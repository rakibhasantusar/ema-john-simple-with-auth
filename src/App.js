// import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Main from './Layouts/Main';
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import { productAndCartLoader } from './loaders/productAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: productAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
