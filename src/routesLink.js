import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ChoosePokemon from "./ChoosePokemon";
import App from './App';

const routesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<ChoosePokemon />}>
      <Route path='pokemon' element={<App />} />
    </Route>
  )
);

export default routesLink;
