import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";
import img5 from "../../assets/5.jpeg";
import img6 from "../../assets/6.jpeg";
import img7 from "../../assets/7.jpeg";
import img8 from "../../assets/8.jpeg";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        transform: "translateZ(0)",
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: `${img1}`,
    title: "Feliz Natal",
    author: "@suamidia.digital",
    featured: true,
  },
  {
    img: `${img2}`,
    title: "Ele vive",
    author: "@suamidia.digital",
  },
  {
    img: `${img3}`,
    title: "DMCA",
    author: "@suamidia.digital",
  },
  {
    img: `${img4}`,
    title: "Dia do Gari",
    author: "@suamidia.digital",
  },
  {
    img: `${img5}`,
    title: "Dia dos Pais",
    author: "@suamidia.digital",
  },
  {
    img: `${img6}`,
    title: "Dia das Mães",
    author: "@suamidia.digital",
    featured: true,
  },
  {
    img: `${img7}`,
    title: "Dia do Trabalhador",
    author: "@suamidia.digital",
  },
  {
    img: `${img8}`,
    title: "Dia do Trabalhador",
    author: "@suamidia.digital",
  },
];
