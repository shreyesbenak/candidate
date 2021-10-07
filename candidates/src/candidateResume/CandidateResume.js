import React from "react";

import NotableProject from "./NotableProject";
import ReachOut from "./ReachOut";
import AptitudeRound from "./AptitudeRound";
import SoftSkill from "./SoftSkill";
import TechnicalRound from "./TechnicalRound";

import WebSite from "./WebSite";

import "./style.css";

export const CandidateResume = () => {
  return (
    <div className="main_div">
      <WebSite />
      <div style={{ display: "flex" }}>
        <spam className="nameSpan">Name- </spam>
        <span>Satheesh Kumar</span> <span className="nameSpan">( SDE-2 )</span>
      </div>
      <div style={{ display: "flex" }}>
        <span className="nameSpan">Notable Skills</span>
        <span> Kotlin, MVVM, Android, Dagger, Room, RxJava </span>
      </div>
      <div>
        <h4>Highlights</h4>
        <ul>
          <li>
            Android developer with 6 years of experience and 3 years of Kotlin
            experience.
          </li>
          <li>Worked on more than 13 mobile apps.</li>
          <li>Worked on 7 projects as an individual contributor.</li>
          <li>
            Apart from Android having experience in Unity 3D and Flutter as well
          </li>
        </ul>
      </div>
      <AptitudeRound />
      <TechnicalRound />
      <ReachOut />
      <SoftSkill />
      <NotableProject />
      <ReachOut />
    </div>
  );
};
