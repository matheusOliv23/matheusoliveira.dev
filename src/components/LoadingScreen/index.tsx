import { Container, SpinnerContainer } from './styles';

function LoadingScreen() {
  return (
    <Container>
      <SpinnerContainer>
        <div className="grid">
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
          <div className="grid-cube"></div>
        </div>
      </SpinnerContainer>
    </Container>
  );
}

export default LoadingScreen;
