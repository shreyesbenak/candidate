import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const AptitudeRound = () => {
  return (
    <>
      <h2>Aptitude Round</h2>

      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col>Grasping the problem</Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Code Efficiency</Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row lg={6}>
          <Col lg={3}>Covering Edge Cases</Col>
          <Col lg={3}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AptitudeRound;
