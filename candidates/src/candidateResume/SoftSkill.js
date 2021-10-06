import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const SoftSkill = () => {
  return (
    <>
      <h2>Soft Skill </h2>
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col>Ownership</Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Communication with team</Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row lg={6}>
          <Col lg={3}>Working with team</Col>
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
export default SoftSkill;
