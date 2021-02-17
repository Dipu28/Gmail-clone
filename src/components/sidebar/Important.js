import React from "react";

function Important() {
  return (
    <div style={{ flex: "1", textAlign: "center" }}>
      <h1
        style={{
          color: "grey",
          marginTop: "20px",
          textDecoration: "underline",
        }}
      >
        Important
      </h1>
      <div className="img">
        <img
          style={{ padding: "20px", marginTop: "20px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHRWfsD4kVgdyWurO1mtDi2PJtVhgiA8IYQ&usqp=CAU"
          alt=""
        />
      </div>
      <h1 style={{ color: "black", marginTop: "20px" }}>Not Available...</h1>
    </div>
  );
}

export default Important;
