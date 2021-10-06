import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const WebSite = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>LOGO</Col>
          <Col style={{ textAlign: "right" }}>
            <span>
              Website:<a href="https://getdefault.in/">getdefault.in</a>
            </span>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};
export default WebSite;
