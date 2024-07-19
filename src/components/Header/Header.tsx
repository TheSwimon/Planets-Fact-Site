import hamburger from "/assets/icon-hamburger.svg";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import useMediaQuery from "@custom-react-hooks/use-media-query";

type TNavProps = {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ openNav, setOpenNav }: TNavProps) {
  function handleOpenNav() {
    setOpenNav(!openNav);
  }

  const isSmallScreen = useMediaQuery("(max-width:767px)");

  return (
    <HeaderEl>
      <Container>
        <h2>THE PLANETS</h2>
        {isSmallScreen ? (
          <span>
            <img onClick={handleOpenNav} src={hamburger} alt="menu icon" />
          </span>
        ) : (
          ""
        )}
      </Container>
    </HeaderEl>
  );
}

const HeaderEl = styled.header`
  user-select: none;

  @media (min-width: 1024px) {
    display: inline-block;
  }
`;

const Container = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    border-bottom: none;
    display: block;
    text-align: center;
  }

  @media (min-width: 1024px) {
    display: inline-block;
  }

  & > h2 {
    font-size: 2.8rem;
  }

  & > span {
    cursor: pointer;
  }
`;
