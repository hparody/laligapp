import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import ContentWrapper from "src/layout/ContentWrapper";
import NavBar from "../NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const HomeLayout = () => {
  return (
    <Container>
      <NavBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default HomeLayout;
