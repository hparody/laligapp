import styled from "@emotion/styled";
import LogoImg from "src/assets/Logo LaLigapp.png";
const Image = styled.img`
  object-fit: contain;
  object-position: left;
`;

const Logo = () => (
  <Image loading="lazy" src={LogoImg} alt="Logo" />
);

export default Logo;
