import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import AddBooks from "../AddBooks/AddBooks";
import Books from "../Books/Books";
import { Button, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";

export default function Home() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Container>
        <Header />
        <Row>
          <Col className="mb-5">
            <Books />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mx-auto">
            <Button
              variant="primary"
              className="w-25 py-3 fa"
              onClick={() => setModalShow(true)}
            >
              Add Book
            </Button>
          </Col>
        </Row>

        <AddBooks show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </>
  );
}
