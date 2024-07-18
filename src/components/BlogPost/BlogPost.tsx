import styled from "styled-components";
import source from "/assets/icon-source.svg";
import DescriptionList from "../DescriptionList/DescriptionList";
import planetJson from "../../../data.json";
import Navigation from "../Navigation/Navigation";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

type BlogPostProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BlogPost({ openNav, setOpenNav }: BlogPostProps) {
  const { BlogPostId } = useParams<{ BlogPostId: string }>();

  const activePlanet: TPlanet | undefined = planetJson.find((planet) => {
    return planet.name.toLowerCase() === BlogPostId;
  });

  return (
    <>
      <section>
        <UlEl>
          <LiEl>
            <StyledLink to={`/${BlogPostId}/Overview`}>OVERVIEW</StyledLink>
          </LiEl>
          <LiEl>
            <StyledLink to={`/${BlogPostId}/Structure`}>STRUCTURE</StyledLink>
          </LiEl>
          <LiEl>
            <StyledLink to={`/${BlogPostId}/Surface`}>SURFACE</StyledLink>
          </LiEl>
        </UlEl>
        <article>
          <ImageContainer>
            <img
              src={activePlanet?.images.planet}
              alt={`Planet ${activePlanet?.name}`}
            />
          </ImageContainer>
          <PlanetContainer>
            <h1>{activePlanet?.name}</h1>
            <p>{activePlanet?.overview.content}</p>
            <SourceContainer>
              <span>Source :</span>
              <a target="_blank" href={activePlanet?.overview.source}>
                Wikipedia
              </a>
              <img src={source} alt="source icon" />
            </SourceContainer>
          </PlanetContainer>
          <DescriptionList activePlanet={activePlanet} />
        </article>
        <Navigation openNav={openNav} setOpenNav={setOpenNav} />
      </section>
    </>
  );
}

const UlEl = styled.ul`
  padding: 2rem 0rem;
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
`;

const LiEl = styled.li`
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(255, 255, 255, 0.5);

  .planet-name {
    font-size: 6rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding: 4rem 0rem;

  & > img {
    width: 22rem;
    margin: 0 auto;
    display: block;
  }
`;

const PlanetContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 4rem;
  & > h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  & > p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 3rem;
  }
`;

const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  word-spacing: 2px;

  & > span {
    font-size: 1.4rem;
    color: rgb(255, 255, 255, 0.5);
    font-weight: 300;
    margin-right: 0.5rem;
  }

  & > a {
    font-size: 1.4rem;
    color: rgb(255, 255, 255, 0.5);
    font-weight: 500;
    margin-right: 0.4rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
