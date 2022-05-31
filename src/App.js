// components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Sobre from './components/Sobre/Sobre';

// styles
import GlobalStyle from './styles/GlobalStyle';
import AppStyled from './styles/App.styled';
import Container from './styles/Container';
import Atuacao from './components/Atuação/Atuacao';

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <Navbar />
      <Sidebar />
      <Hero />
      <Container>
        <Sobre />
      </Container>
      <Atuacao />
    </AppStyled>
  );
}

export default App;
