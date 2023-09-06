import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Pratos';


export default function Router() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/aluroni"
            element={<PaginaPadrao />}
          >
            <Route index
              element={<Inicio />}
            />
            <Route path="/aluroni/cardapio"
              element={<Cardapio />}
            />
            <Route path="/aluroni/sobre"
              element={<Sobre />}
            />
          </Route>
          <Route path="/aluroni/prato/:id"
            element={<Prato />}
          />
          <Route path="/aluroni/*"
            element={<NotFound />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}