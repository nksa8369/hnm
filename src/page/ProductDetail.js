import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';

const ProductDetail = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/nksa8369/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);

  }
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div className='choice'>{product?.choice === true ? "Conscious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              { product?.size.map((size)=>(
                  <Dropdown.Item>
                    {size}
                  </Dropdown.Item> 
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
              추가
            </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
