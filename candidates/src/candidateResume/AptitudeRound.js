import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

import "./Atitude.css";
const AptitudeRound = () => {
  return (
    <>
      <h4>Aptitude Round</h4>

      <Container fluid>
        <Row>
          <Col style={{ marginTop: "1rem" }}>
            <Row>
              <Col>Grasping the problem</Col>
              <Col>
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gray" }} />
                <AiFillStar style={{ color: "gray" }} />
              </Col>
            </Row>
          </Col>
          <Col style={{ marginTop: "1rem" }}>
            <Row>
              <Col>Code Efficiency</Col>
              <Col>
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gray" }} />
                <AiFillStar style={{ color: "gray" }} />
                <AiFillStar style={{ color: "gray" }} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row lg={6} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Col lg={3}>Covering Edge Cases</Col>
          <Col lg={3}>
            <AiFillStar style={{ color: "gold" }} />
            <AiFillStar style={{ color: "gold" }} />
            <AiFillStar style={{ color: "gold" }} />
            <AiFillStar style={{ color: "gray" }} />
            <AiFillStar style={{ color: "gray" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AptitudeRound;
