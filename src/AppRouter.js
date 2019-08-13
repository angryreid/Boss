import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter(){
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav"></div>
      </div>
    </Router>
  )
}

export default AppRouter;