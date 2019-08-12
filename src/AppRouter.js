import React from "react";
import Index from "./pages/Index";
import List from "./pages/List";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/list/">list</Link>
        </li>
      </ul>
      {/* exact 表示精确匹配 */}
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" exact component={List} />
      <Route path="/home/" exact component={Home} />

    </Router>
  );
};

export default AppRouter;
