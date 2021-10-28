import { Children, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const App = () => {
  const [name, setName] = useState("amrendra");
  const [hits, setHits] = useState([]);
  useEffect(
    () =>
      function callApi() {
        axios
          .get("https://hn.algolia.com/api/v1/search?query=redux")
          .then((res) => setHits(res.hits));
      },
    []
  );

  return (
    console.log(hits),
    (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/page">Page</Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/page" component={name} />
        </div>
      </BrowserRouter>
    )
  );
};
const Home = () => <h2>Home</h2>;
const Page = (props) => <h2> Page {}</h2>;
export default App;

// render approch
// chidren approch
//profile

//rectpatterns.com
//SSR using
//nextjs
//testing spiceng
// codesplitting using webpack
// webpeck othr feature
