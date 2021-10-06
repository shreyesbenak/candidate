import React, { useEffect } from "react";

import axios from "axios";
import { GrReactjs } from "react-icons/gr";
import { FcAndroidOs } from "react-icons/fc";
import { DiDjango } from "react-icons/di";
import { Table } from "./Table";

import "./style.css";

// import CandidateDetails from "./CandidateDetails";

const Candidate = () => {
  return (
    <>
      <div className="main_div">
        <div className="heading1">
          <h2>
            <GrReactjs color="#61DBFB" />
            React Developers
          </h2>
        </div>

        <Table />
      </div>
      <div className="main_div">
        <div className="heading1">
          <h2>
            <FcAndroidOs />
            Android Developers
          </h2>
        </div>

        <Table />
      </div>
      <div className="main_div">
        <div className="heading1">
          <h2>
            <DiDjango />
            Django Developers
          </h2>
        </div>

        <Table />
      </div>
      <div className="main_div">
        <div className="heading1">
          <h2>
            <GrReactjs color="#61DBFB" />
            React Native Developers
          </h2>
        </div>

        <Table />
      </div>
      s
    </>
  );
};

export default Candidate;
