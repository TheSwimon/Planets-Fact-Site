import styled from "styled-components";

interface DescriptionListProps {
  activePlanet: TPlanet | undefined; // Ensure activePlanet is properly typed
}

const DescriptionList: React.FC<DescriptionListProps> = ({ activePlanet }) => {
  return (
    <Dl>
      <DescriptionContainer>
        <dt>ROTATION TIME</dt>
        <dd>{activePlanet?.rotation}</dd>
      </DescriptionContainer>
      <DescriptionContainer>
        <dt>REVOLUTION TIME</dt>
        <dd>{activePlanet?.revolution}</dd>
      </DescriptionContainer>
      <DescriptionContainer>
        <dt>RADIUS</dt>
        <dd>{activePlanet?.radius}</dd>
      </DescriptionContainer>
      <DescriptionContainer>
        <dt>AVERAGE TEMP.</dt>
        <dd>{activePlanet?.temperature}</dd>
      </DescriptionContainer>
    </Dl>
  );
};

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 85%;
  margin: 0 auto;
  padding-bottom: 6rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: none;
    padding: 0rem 3rem 4rem;
  }
`;

const DescriptionContainer = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    display: inline-block;
    padding: 1.5rem 1rem;
  }

  & > dt {
    color: rgb(255, 255, 255, 0.5);
    font-size: 1.2rem;
    font-weight: 500;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }

  & > dd {
    color: #ffffff;
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
`;

export default DescriptionList;
