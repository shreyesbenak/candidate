import React from "react";
import { AiFillStar } from "react-icons/ai";

const AptitudeRound = () => {
  return (
    <>
      <h2>Aptitude Round</h2>
      <div style={{ display: "flex" }}>
        <div>
          <h4>Grasping the problem</h4>
          <p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </p>
        </div>
        <div>
          <h4>Code Efficiency</h4>
          <p>
            <AiFillStar />
            <AiFillStar />
          </p>
        </div>
        <div>
          <h4>Covering Edge Cases</h4>
          <p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </p>
        </div>
      </div>
    </>
  );
};
export default AptitudeRound;
