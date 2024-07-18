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
`;

const DescriptionContainer = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid rgb(255, 255, 255, 0.5);
  & > dt {
    color: rgb(255, 255, 255, 0.5);
    font-size: 1.2rem;
    font-weight: 500;
  }

  & > dd {
    color: #ffffff;
    font-size: 2rem;
  }
`;

export default DescriptionList;
