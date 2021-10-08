import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const SoftSkill = () => {
  return (
    <>
      <h4>Soft Skill </h4>
      <Container fluid>
        <Row>
          <Col>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>Ownership</Col>
              <Col>
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gray" }} />
                <AiFillStar style={{ color: "gray" }} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>Communication with team</Col>
              <Col>
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gold" }} />
                <AiFillStar style={{ color: "gray" }} />
                <AiFillStar style={{ color: "gray" }} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row lg={6} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Col lg={3}>Working with team</Col>
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
export default SoftSkill;
