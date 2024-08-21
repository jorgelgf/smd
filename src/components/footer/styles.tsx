import styled from 'styled-components';
import bgfooter from '../../assets/foot.png';

export const Footer = styled.footer`
position: fixed; /* Use fixed to keep the footer at the bottom */
  left: 0;
  bottom: 0;
  width: 100%; /* Ensure the footer spans the full width */
  height: 50px;
  background-image: url(${bgfooter});
  background-size: cover; /* Make sure the image covers the footer */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center; /* Center the image */
`;
