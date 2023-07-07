import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addBooks } from "../../Redux/BooksSlice";
// import { addBook, addBooks } from "../../Redux/BooksSlice";

export default function AddBooks(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [finishOn, setFinishOn] = useState("");
  const [edition, setEdition] = useState("");
  const [summary, setSummary] = useState("");

  const dispatch = useDispatch();
  
  function clearForm() {
    setTitle("");
    setAuthor("");
    setFinishOn("");
    setEdition("");
    setSummary("");
  }

  function handleAddBooks(e) {
    e.preventDefault();
    let bookDetails = {
      title,
      author,
      finishOn,
      edition,
      summary,
    };
    clearForm();
    dispatch(addBooks(bookDetails));
  }

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Form>
              <Row>
                <Col xs={6} md={6} className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Col>
                <Col xs={6} md={6} className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Author"
                    name="author"
                    value={author}
                    id="author"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={6} className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="21/07/2013"
                    name="finishOn"
                    value={finishOn}
                    id="finishOn"
                    onChange={(e) => setFinishOn(e.target.value)}
                  />
                </Col>
                <Col xs={6} md={6} className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Edition"
                    name="edition"
                    value={edition}
                    id="edition"
                    onChange={(e) => setEdition(e.target.value)}
                  />
                </Col>
                <Col xs={12} md={12} className="mb-3">
                  <textarea
                    name="summary"
                    id="summary"
                    placeholder="Summary"
                    className="form-control"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  ></textarea>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleAddBooks}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
