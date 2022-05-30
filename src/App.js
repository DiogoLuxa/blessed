// components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';

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
      <Container></Container>
    </AppStyled>
  );
}

export default App;
