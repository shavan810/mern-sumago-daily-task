import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Spinner, Button, Alert } from "react-bootstrap";
import axios from "axios";
export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams()
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `https://dummyjson.com/products/${id}`
                );

                setProduct(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProduct();
    }, [id]); // ✅ important dependency


    return (
        <Container className="mt-4">
            <Link to="/">
                <Button variant="secondary" className="mb-3">
                    ← Back to Products
                </Button>
            </Link>

            <Card>
                <Card.Img
                    variant="top"
                    src={product?.thumbnail}
                    style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>{product?.description}</Card.Text>
                    <p className="fw-bold">Price: ${product?.price}</p>
                    <p>Brand: {product?.brand}</p>
                    <p>Category: {product?.category}</p>
                </Card.Body>
            </Card>
        </Container>
    );
};