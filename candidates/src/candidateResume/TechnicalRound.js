import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const TechnicalRound = () => {
  return (
    <div>
      <h4>TechnicalRound</h4>

      <Container fluid>
        <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Col>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">CSS</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              He is well versed with usinf ViewGroups for creating layouts but
              hasn't created custom view before
            </Row>
          </Col>
          <Col>
            {" "}
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">HTML</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              He has somr knowledge about different kinds of Dispatchers and
              scope
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">Data Structure</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Could differentiate between types of services and explain ways of
              communicating between services and main application effectively.
            </Row>
          </Col>
          <Col>
            {" "}
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">Life Cycle Methods</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Has implemented MVVM on multiple projects and knows about its
              benefits for increasing testability.
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">Hooks</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Has implemented it on few projects and knows the broad
              implementation.
            </Row>
          </Col>
          <Col>
            {" "}
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">
                  Global State Management
                </span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Has implemented it on few projects and knows the broad
              implementation.
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">
                  Asynchronous Programming
                </span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Has implemented it on few projects and knows the broad
              implementation.
            </Row>
          </Col>
          <Col>
            {" "}
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">Writing Tests</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Knows about unit testing as a concept but hasn't written a lot of
              unit tests in production
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">Mocks</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Has implemented it on few projects and knows the broad
              implementation.
            </Row>
          </Col>
          <Col>
            {" "}
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col>
                <span className="technicalRound_span">SSR and SSG</span>
              </Col>
              <Col>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Col>
            </Row>
            <Row>
              Has implemented it on few projects and knows the broad
              implementation.
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TechnicalRound;
