import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as S from './styles';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Themes } from '../../themes/globalStyles';
import logoW from '../../assets/logoW.png';
import { useNavigate } from 'react-router-dom';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['HOME', 'PRODUTOS', 'SOBRE', 'ORÇAMENTO'];
const info = 'Olá! Gostaria de fazer um orçamento contigo.'


export const Header = (props: Props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);

  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{

      fontWeight: '800',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: `${Themes.colors.primaryColor}`
    }}>

      <S.ImgLogoSand src={logoW} alt='logo' />




      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: `${Themes.colors.whiteColor}` }}>
              <ListItemText onClick={() => {
                if (item !== "ORÇAMENTO") { navigate(`/${item.toLowerCase()}`) }
                else {
                  const link = document.createElement('a');
                  link.href = 'https://wa.me/558496341546';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  link.click();
                }
              }} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const ShowButtom = () => {


    return <S.ButtonX href={`https://wa.me/558496341546?text=${info}`}><WhatsAppIcon />ORÇAMENTO</S.ButtonX>
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: `${Themes.colors.primaryColor}`, color: `${Themes.colors.whiteColor}` }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />

          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            <S.ImgLogoSand onClick={() => navigate('/home')} src={logoW} alt='logo' />

          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            {navItems.map((item) => (

              <Button onClick={() => {
                item !== "ORÇAMENTO" && navigate(`/${item.toLowerCase()}`)
              }} key={item} sx={{ color: `${Themes.colors.whiteColor}` }}>
                {item === 'ORÇAMENTO' ? ShowButtom() : item}

              </Button>
            ))}
          </Box>
          {mobileOpen && <></>}
        </Toolbar>

      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

      </nav>
    </Box >
  );
}
