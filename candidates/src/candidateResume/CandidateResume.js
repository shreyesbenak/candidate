import React from "react";

import NotableProject from "./NotableProject";
import ReachOut from "./ReachOut";
import AptitudeRound from "./AptitudeRound";
import SoftSkill from "./SoftSkill";
import TechnicalRound from "./TechnicalRound";

import WebSite from "./WebSite";

export const CandidateResume = () => {
  return (
    <div>
      <WebSite />
      <div style={{ display: "flex" }}>
        <h3>Name-</h3>
        <h4>Satheesh Kumar </h4>
        <h3>( SDE-2 )</h3>
      </div>
      <div style={{ display: "flex" }}>
        <h3>Notable Skills</h3>
        <h4>Kotlin, MVVM, Android, Dagger, Room, RxJava </h4>
      </div>
      <div>
        <h2>Highlights</h2>
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
