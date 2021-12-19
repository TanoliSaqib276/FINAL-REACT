import React from "react";

function Navbar(){
    return(
      <>
      <ul className="nav justify-content-center bg-info">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Request Tab</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Approved and Rejected Request</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Branch Manager Tab</a>
  </li>
  
</ul></>
    )
}
export default Navbar;