import React from "react";

const NotableProject = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>AutoSync (for Oman only)</td>
          </tr>
          <tr>
            <td>Project Description</td>
            <td>
              AutoSync is a project for an Oman client. The najor role of the
              this app is to send thousand of images(Those will be captured from
              another app) at a time to the AWS(S3) cloud platform on a periodic
              interval and only if the app gets required constraints like an
              unmetrd network, enough battery level at the time of sync.{" "}
            </td>
          </tr>
          <tr>
            <td>Objective</td>
            <td>To create a multi-purpose CMS</td>
          </tr>
          <tr>
            <td>Technology Used</td>
            <td>
              Android SDK, Kotlin, Jetpack components, AWS S3, Room, MVVM,
              Retrofit, RXJava, Dagger, JIRA, Git, Agile, Play store
            </td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>3 months</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>Senior Android Developer</td>
          </tr>
          <tr>
            <td>Contribution</td>
            <td>He was the only an Anrdroid Developer in that project</td>
          </tr>
          <td>Team Structure</td>
          <td>
            He was handling the project alone and liaised with back end
            developers, front end developers, quality assurance testers, and CTO
            as needed
          </td>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default NotableProject;
