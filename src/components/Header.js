import React from "react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
export const Header = (props) => {
  const h1Style = { textAlign: "center" };
  const spanStyle = { color: "var(--light-purple)" };

  return (
    <>
      <Link to="/">
        <h1 style={h1Style}>
          Free<span style={spanStyle}>2GO</span>
        </h1>
      </Link>
      <Nav />
    </>
  );
};
