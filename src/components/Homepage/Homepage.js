import React from "react";

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Link to="/sounds">
        <button>Sounds</button>
      </Link>
      <Link to="glossar">
        <button>Glossar</button>
      </Link>
    </div>
  );
};

export default Homepage;
