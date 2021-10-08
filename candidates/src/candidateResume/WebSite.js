import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const WebSite = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
          <Col>
            <img
              src="https://getdefault.in/wp-content/uploads/2020/04/Logo_Black_White_BG_cropped.png"
              style={{ width: "25% " }}
            />
          </Col>
          <Col style={{ textAlign: "right", paddingTop: "1rem" }}>
            <span style={{}}>
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
