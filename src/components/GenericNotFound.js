import React from "react";
import { Link } from "react-router-dom";
const GenericNotFound = () => (
  <div>
    <h1> Page Not Found</h1>
     Return to <Link to="/">Homepage</Link>
  </div>
);
export default GenericNotFound;
