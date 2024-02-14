import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import "../Styles/Spinner.css"
const Spinner = () => {
  return (
    <div className="spinner" >
      <SyncLoader color="#36d7b7" />
    </div>
  );
};

export default Spinner;
