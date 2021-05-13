import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import routes from "./routes/AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;


