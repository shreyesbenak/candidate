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
        <spam>Name- Satheesh Kumar ( SDE-2 ) </spam>
      </div>
      <div style={{ display: "flex" }}>
        <span>Notable Skills</span>
        <span>Kotlin, MVVM, Android, Dagger, Room, RxJava </span>
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
