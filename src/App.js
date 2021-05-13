import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import routes from "./routes/AllRoutes";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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


