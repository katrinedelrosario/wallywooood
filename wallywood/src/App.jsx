import AppRouter from './components/app/approuter/approuter';
import CartIcon from './components/app/cart/carticon';
import Footer from './components/partials/footer';
import Header from './components/partials/header';
import {ContainerStyle} from './components/styled/container.style'

function App() {
  return (
    <ContainerStyle maxwidth='1024'>
      <CartIcon></CartIcon>
      <Header />
      <AppRouter />
      <Footer />
    </ContainerStyle>
  );
}

export default App;
