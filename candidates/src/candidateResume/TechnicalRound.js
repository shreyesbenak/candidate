import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const TechnicalRound = () => {
  return (
    <div>
      <h2>TechnicalRound</h2>

      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col>CSS</Col>
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
            <Row>
              <Col>HTML</Col>
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
            <Row>
              <Col>Data Structure</Col>
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
            <Row>
              <Col>Life Cycle Methods</Col>
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
            <Row>
              <Col>Hooks</Col>
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
            <Row>
              <Col>Global State Management</Col>
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
            <Row>
              <Col>Asynchronous Programming</Col>
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
            <Row>
              <Col>Writing Tests</Col>
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
            <Row>
              <Col>Mocks</Col>
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
            <Row>
              <Col>SSR and SSG</Col>
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
