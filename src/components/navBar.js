import React from "react";

const navBar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")}>planets</button>
      <button onClick={() => setPage("people")}>people</button>
    </nav>
  );
};

export default navBar;
