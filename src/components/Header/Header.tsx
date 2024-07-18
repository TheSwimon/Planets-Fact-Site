import hamburger from "/assets/icon-hamburger.svg";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

type TNavProps = {
  openNav: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ openNav, setOpenNav }: TNavProps) {
  function handleOpenNav() {
    setOpenNav(!openNav);
  }

  return (
    <HeaderEl>
      <Container>
        <h2>THE PLANETS</h2>
        <span>
          <img onClick={handleOpenNav} src={hamburger} alt="menu icon" />
        </span>
      </Container>
    </HeaderEl>
  );
}

const HeaderEl = styled.header`
  user-select: none;
`;

const Container = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);

  & > h2 {
    font-size: 2.8rem;
  }

  & > span {
    cursor: pointer;
  }
`;
