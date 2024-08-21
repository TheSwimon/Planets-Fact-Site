import styled from "styled-components";
import source from "/assets/icon-source.svg";
import DescriptionList from "../DescriptionList/DescriptionList";
import planetJson from "../../../data.json";
import Navigation from "../Navigation/Navigation";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import useMediaQuery from "@custom-react-hooks/use-media-query";

type BlogPostProps = {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

type TTopic = `overview` | `structure` | `geology`;

export default function BlogPost({ openNav, setOpenNav }: BlogPostProps) {
  const { BlogPostId } = useParams<{ BlogPostId: string }>();
  const location = useLocation();

  const topic: TTopic =
    (new URLSearchParams(location.search).get("topic") as TTopic) || "overview";

  const activePlanet: TPlanet | undefined = planetJson.find((planet) => {
    return planet.name.toLowerCase() === BlogPostId;
  });

  const isSmallScreen = useMediaQuery("(max-width:767px)");
  return (
    <Section>
      <Navigation
        openNav={openNav}
        setOpenNav={setOpenNav}
        activePlanet={activePlanet}
      />
      {isSmallScreen && (
        <UlEl>
          <LiEl $activePlanet={activePlanet} $topic={topic} $text={"overview"}>
            <StyledLink to={`/${BlogPostId}?topic=overview`}>
              OVERVIEW
            </StyledLink>
          </LiEl>
          <LiEl $activePlanet={activePlanet} $topic={topic} $text={"structure"}>
            <StyledLink to={`/${BlogPostId}?topic=structure`}>
              STRUCTURE
            </StyledLink>
          </LiEl>
          <LiEl $activePlanet={activePlanet} $topic={topic} $text={"geology"}>
            <StyledLink to={`/${BlogPostId}?topic=geology`}>SURFACE</StyledLink>
          </LiEl>
        </UlEl>
      )}
      <article>
        <PlanetWrapper>
          <ImageContainer $activePlanet={activePlanet}>
            <img
              src={
                topic === "overview"
                  ? activePlanet?.images.planet
                  : topic === "structure"
                  ? activePlanet?.images.internal
                  : activePlanet?.images.planet
              }
              alt={`Planet ${activePlanet?.name}`}
            />
            {topic === "geology" && !isSmallScreen ? (
              <GeologyImg
                $activePlanet={activePlanet}
                src={activePlanet?.images.geology}
                alt={`${activePlanet?.name}'s geology`}
              />
            ) : (
              ""
            )}
          </ImageContainer>
          <PlanetControlBox>
            <PlanetContainer>
              <h1>{activePlanet?.name}</h1>
              <p>{activePlanet?.[topic].content}</p>
              <SourceContainer>
                <span>Source :</span>
                <a target="_blank" href={activePlanet?.[topic].source}>
                  Wikipedia
                </a>
                <img src={source} alt="source icon" />
              </SourceContainer>
            </PlanetContainer>
            {!isSmallScreen && (
              <UlEl>
                <LiEl
                  $activePlanet={activePlanet}
                  $topic={topic}
                  $text={"overview"}
                >
                  <StyledLink to={`/${BlogPostId}?topic=overview`}>
                    <span>01</span> OVERVIEW
                  </StyledLink>
                </LiEl>
                <LiEl
                  $activePlanet={activePlanet}
                  $topic={topic}
                  $text={"structure"}
                >
                  <StyledLink to={`/${BlogPostId}?topic=structure`}>
                    <span>02</span> STRUCTURE
                  </StyledLink>
                </LiEl>
                <LiEl
                  $activePlanet={activePlanet}
                  $topic={topic}
                  $text={"geology"}
                >
                  <StyledLink to={`/${BlogPostId}?topic=geology`}>
                    <span>03</span> SURFACE
                  </StyledLink>
                </LiEl>
              </UlEl>
            )}
          </PlanetControlBox>
        </PlanetWrapper>
        <DescriptionList activePlanet={activePlanet} />
      </article>
    </Section>
  );
}

const Section = styled.section`
  margin-bottom: 4rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const UlEl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    width: 300px;
    border-bottom: none;
    justify-self: end;
    align-self: center;
  }

  @media (min-width: 1024px) {
    justify-self: start;
    align-self: start;
  }
`;

type TLiElProps = {
  $activePlanet: TPlanet | undefined;
  $topic: string;
  $text: string;
};

type TImageContainerProps = {
  $activePlanet: TPlanet | undefined;
};

const LiEl = styled.li<TLiElProps>`
  padding: 2rem 0rem;
  border-bottom: ${({ $activePlanet, $topic, $text }) => {
    return $topic === $text ? `2px solid ${$activePlanet?.color}` : "";
  }};
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    border-bottom: none;
    padding: 0;
    background-color: ${({ $topic, $text, $activePlanet }) => {
      return $topic === $text ? $activePlanet?.color : "";
    }};
    transition: all 0.25s;

    &:hover {
      background-color: ${({ $activePlanet }) => $activePlanet?.color};
    }
  }

  .planet-name {
    font-size: 6rem;
  }
`;

const ImageContainer = styled.div<TImageContainerProps>`
  width: 100%;
  padding: 4rem 0rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  & > img:first-of-type {
    width: ${({ $activePlanet }) => $activePlanet?.sizes.mobile};
    margin: 0 auto;
    display: block;

    @media (min-width: 768px) {
      width: ${({ $activePlanet }) => $activePlanet?.sizes.tablet};
    }
  }
`;

const GeologyImg = styled.img<TImageContainerProps>`
  width: 120px;

  @media (min-width: 768px) {
    margin-top: ${({ $activePlanet }) => {
      return $activePlanet?.name.toLowerCase() === "saturn"
        ? "-14rem"
        : "-4rem";
    }};
  }
`;

const PlanetContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    text-align: left;
    margin: 0;
    width: 340px;
    max-width: 450px;
    flex-grow: 1;
  }
  & > h1 {
    font-size: 4.8em;
    margin-bottom: 2rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 5.6rem;
      margin-bottom: 3rem;
    }
  }

  & > p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 5rem;
    }
  }
`;

const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  word-spacing: 2px;

  @media (min-width: 768px) {
    display: inline-block;
  }

  & > span {
    font-size: 1.4rem;
    color: rgb(255, 255, 255, 0.5);
    font-weight: 300;
    margin-right: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  & > a {
    font-size: 1.4rem;
    color: rgb(255, 255, 255, 0.5);
    font-weight: 500;
    margin-right: 0.4rem;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    border-bottom: none;
    height: 4.5rem;
    border: 1px solid rgb(255, 255, 255, 0.2);
    padding-left: 2rem;
    display: flex;
    align-items: center;
  }

  & > span {
    color: rgb(255, 255, 255, 0.5);
    margin-right: 2rem;
  }
`;

const PlanetControlBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0rem 3rem;
    margin-bottom: 6rem;
    gap: 6rem;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    width: 400px;
  }
`;

const PlanetWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;
