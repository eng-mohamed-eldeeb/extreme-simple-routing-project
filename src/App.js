import { Redirect, Route, Switch } from "react-router-dom";
import Product from "./Pages/Products.js.js";
import Welcome from "./Pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Pages/ProductDetail.js";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
