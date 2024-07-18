import chevron from "/assets/icon-chevron.svg";
import styled from "styled-components";
import planetJson from "../../../data.json";
import { Link } from "react-router-dom";

type TPlanetBallProps = {
  color: string;
};

type TStyledComponentProp = {
  $openNav: boolean;
};

type NavigationProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navigation({ openNav, setOpenNav }: NavigationProps) {
  return (
    <>
      <NavBar $openNav={openNav}>
        <ul>
          {planetJson.map((planet) => {
            return (
              <StyledLink
                onClick={() => {
                  setOpenNav(!openNav);
                }}
                key={planet.name}
                to={`/${planet.name.toLowerCase()}`}
              >
                <ListEl color={planet.color}>
                  <div>
                    <PlanetBall color={planet.color}></PlanetBall>
                    <p>{planet.name.toUpperCase()}</p>
                  </div>
                  <img src={chevron} alt="chevron icon" />
                </ListEl>
              </StyledLink>
            );
          })}
        </ul>
      </NavBar>
    </>
  );
}

const NavBar = styled.nav<TStyledComponentProp>`
  position: absolute;
  top: 66px;
  padding: 3rem 2rem;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  background-color: #070724;
  transition: transform cubic-bezier(0.15, 0.1, 0.25, 1) 0.3s;
  overflow-y: ${(props) => (props.$openNav ? "hidden" : "")};
  transform: ${(props) =>
    props.$openNav ? "translateX(0%)" : "translateX(100%)"};
  & > ul {
    display: flex;
    flex-direction: column;
  }
`;

const ListEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0rem;
  border-bottom: 1px solid rgb(255, 255, 255, 0.1);
  user-select: none;

  & > div {
    display: flex;
    align-items: center;
    gap: 3rem;

    & > p {
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }

  & > img {
    margin-right: 1rem;
  }
`;

const PlanetBall = styled.span<TPlanetBallProps>`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
