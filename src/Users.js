import React, { useState } from "react";

function Users() {
  let [data, setdata] = useState("nikhil");

  function update() {
    if (data == "nikhil") return setdata("chavan");
    else return setdata("nikhil");
  }

  //  catcatic sugar form
  return (
    <>
      <h1> {data} </h1> <button onClick={update}> update </button>{" "}
    </>
  );
}

export default Users;
