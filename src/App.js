import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout"
import "./css/style.css";
import "./css/main.css";

const Home = lazy(() => import("./Layouts/Pages/Home"));
const Blog = lazy(() => import("./Layouts/Pages/Blog"));
const About = lazy(() => import("./Layouts/Pages/About"));
const Service = lazy(() => import("./Layouts/Pages/Services"));
const Contact = lazy(() => import("./Layouts/Pages/Contact"));
const SinglePost = lazy(() => import("./Sections/SinglePost"));
const ErrorPage = lazy(() => import("./Components/Error"));
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />{" "}
                <Route path="/services" component={Service} exact />
                <Route path="/blog" exact component={Blog} />{" "}
                <Route path="/blog/:id" component={SinglePost} />{" "}
                <Route path="/contact" component={Contact} />{" "}
                <Route path="*" component={ErrorPage} />{" "}
              </Switch>{" "}
            </Suspense>
          </Layout>{" "}
        </div>{" "}
      </BrowserRouter>
    );
  }
}

export default App;
