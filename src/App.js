// components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Sobre from './components/Sobre/Sobre';
import Atuacao from './components/Atuação/Atuacao';
import Cases from './components/Cases/Cases';
import Contato from './components/Contato/Contato';

// styles
import GlobalStyle from './styles/GlobalStyle';
import AppStyled from './styles/App.styled';
import Container from './styles/Container';

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
      <Container>
        <Cases />
        <Contato />
      </Container>
    </AppStyled>
  );
}

export default App;
