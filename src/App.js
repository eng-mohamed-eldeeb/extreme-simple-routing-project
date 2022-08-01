import { Route } from "react-router-dom";
import Product from "./Pages/Products.js.js";
import Welcome from "./Pages/Welcome";
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
      </main>
    </div>
  );
}

export default App;
