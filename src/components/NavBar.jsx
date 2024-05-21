import { css } from "@emotion/react";
import Logo from "./Logo";
import defaultProfilePicture from "src/assets/user-default.png";

const sectionWrapperStyle = css`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const headerStyle = css`
  background: linear-gradient(90deg, #8b322c 0%, #a91d3a 70%);
  display: flex;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;
  justify-content: space-between;
  padding: 10px 60px;
  height: 80px;
`;

const iconStyle = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 84px;
`;

const NavBar = () => {
  return (
    <div css={sectionWrapperStyle}>
      <header css={headerStyle}>
        <Logo />
        <img css={iconStyle} src={defaultProfilePicture} alt="Icon" />
      </header>
    </div>
  );
};

export default NavBar;
