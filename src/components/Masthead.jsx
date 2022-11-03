import React from "react";

function Masthead(props) {
  return (
    <>
      <div className="mb-10 mt-10 text-4xl text-center">
        <span className="text-black">{props.judul}</span>
      </div>
    </>
  );
}

export default Masthead;
