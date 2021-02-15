import React from "react";
import Headroom from "react-headroom";
function Header() {
  // https://kyleamathews.github.io/react-headroom/
  return (
    <Headroom className="bg-success ">
      <h1 className="p-2 bg-success" style={{ color: "#fff" }}>
        Frontier Example
      </h1>
    </Headroom>
  );
}

export default Header;
