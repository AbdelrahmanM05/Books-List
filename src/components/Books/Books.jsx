import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { db } from "../../firebase/config";
import { onValue, ref, remove } from "firebase/database";

export default function Books() {
  const [books, setBooks] = useState([]);

function handleDeleteBook(book){
remove(ref(db,`/${book.uuid}`))
}

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setBooks([ ])
      const data = snapshot.val();
      if (data !== null) {
        return Object.values(data).map((book) =>
          setBooks((oldArray) => [...oldArray, book])
        );
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <Card className="details_book text-center bg-secondary py-4 px-2 mb-3">
          <Row>
            <Col xs={3}>
              <h4 className="fa me-2">Name</h4>
            </Col>
            <Col xs={3}>
              <h4 className="fa me-2">Author</h4>
            </Col>
            <Col xs={3}>
              <h4 className="fa ms-3">Finish On</h4>
            </Col>
            {/* <Col xs={3}>
              <h4 className="fa ms-3">More Details</h4>
            </Col> */}
          </Row>
        </Card>
        {books.map((book,index) => (
          <>
            <div key={book.uuid} className="view-books">
              <Card className="text-center px-2 py-4 mb-3">
                <Row className="details_book align-items-center">
                  <Col xs={3}>
                    <p className="fa">{book.title} </p>
                  </Col>
                  <Col xs={3}>
                    <p className="fa">{book.author} </p>
                  </Col>
                  <Col xs={3}>
                    <p className="fa">{book.finishOn} </p>
                  </Col>
                  <Col xs={3}>
                    {/* <Button variant="secondary" className="px-2 fa">
                      Details
                    </Button> */}
                    <Button variant="danger" className="px-2 fa ms-1" onClick={()=>handleDeleteBook(book)}>
                      <i className="fa fa-close"></i>
                    </Button>
                  </Col>
                </Row>
              </Card>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
