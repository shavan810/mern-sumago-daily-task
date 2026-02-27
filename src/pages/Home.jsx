import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";


export default function Home() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleClose = () =>{
    setShow(false);
    navigate("/");
  };
  const handleShow = () => setShow(true);

    const { id } = useParams();


  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products || []);
    } catch (err) {
      console.error(err);
    }
  };

  fetchProducts();
}, []);   // ✅ empty dependency

useEffect(() => {
  if (id && products.length > 0) {
    const foundProduct = products.find(
      (item) => item.id === Number(id)
    );

    if (foundProduct) {
      setSelectedProduct(foundProduct);
      setShow(true);
    }
  }
}, [id, products]);

return (
  <Container className="mt-4">
    <h2 className="mb-4 text-center">Products</h2>

    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {products.map((prod) => (
        <Col key={prod.id}>
          <Card className="h-100">
            <h4>{prod.id}</h4>

            <Card.Img
              variant="top"
              src={prod.thumbnail}
              style={{ height: "180px", objectFit: "cover" }}
            />

            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text className="text-muted">
                ${prod.price}
              </Card.Text>

              <Card.Text style={{ fontSize: "14px" }}>
                {prod.description.length > 60
                  ? prod.description.slice(0, 60) + "..."
                  : prod.description}
              </Card.Text>
            </Card.Body>

            <Button
              variant="primary"
            onClick={() => {
  navigate(`/product/${prod.id}`);
}}
            >
              View Details
            </Button>
          </Card>
        </Col>
      ))}
    </Row>

    {/* 🔥 Modal yaha hoga - map ke bahar */}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedProduct?.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Card.Img
          variant="top"
          src={selectedProduct?.thumbnail}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <Card.Body>
          <Card.Title>{selectedProduct?.title}</Card.Title>
          <Card.Text>{selectedProduct?.description}</Card.Text>
          <p className="fw-bold">
            Price: ${selectedProduct?.price}
          </p>
          <p>Brand: {selectedProduct?.brand}</p>
          <p>Category: {selectedProduct?.category}</p>
        </Card.Body>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </Container>
);

}
