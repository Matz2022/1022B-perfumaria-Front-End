import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroPerfume from './CadastroPerfume.tsx';
import CadastroCliente from './CadastroCliente.tsx';
import AppCliente from './AppCliente.tsx';
import AlterarPerfume from './AlterarPerfume.tsx';
import AlterarCliente from './AlterarCliente.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/cadastro-perfume',
    element: <CadastroPerfume />,
  },
  {
    path: "/cadastro-cliente",
    element: <CadastroCliente />,
  },
  {
    path: "/lista-cliente",
    element: <AppCliente />,
  },
  {
    path: "/alterar-perfume/:id",
    element: <AlterarPerfume/>,
  },
  {
    path: "/alterar-cliente/:id",
    element: <AlterarCliente/>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);