import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

const TechnicalRound = () => {
  return (
    <div>
      <h2>TechnicalRound</h2>
      <Row xs={1} md={2} className="g-4">
        {/* {Array.from({ length: 8 }).map((_, idx) => ( */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                CSS
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                He is well versed with usinf ViewGroups for creating layouts but
                hasn't created custom view before
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* ))} */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                HTML
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                He has somr knowledge about different kinds of Dispatchers and
                scope
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Data Structure
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Could differentiate between types of services and explain ways
                of communicating between services and main application
                effectively.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Life Cyle Methoids
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Has implemented MVVM on multiple projects and knows about its
                benefits for increasing testability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Hooks
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Has implemented it on few projects and knows the broad
                implementation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Global State Management
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Has implemented it on few projects and knows the broad
                implementation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Asynchronous Programming
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Has implemented it on few projects and knows the broad
                implementation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Writing Tests
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Knows about unit testing as a concept but hasn't written a lot
                of unit tests in production
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                Mocks
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Has implemented it on few projects and knows the broad
                implementation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                SSR and SSG
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </Card.Title>
              <Card.Text>
                Has implemented it on few projects and knows the broad
                implementation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default TechnicalRound;
