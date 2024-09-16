"use client";

import React from 'react';
import { Card } from 'react-bootstrap';

export default function Info() {
  const assetPrefix = process.env.NODE_ENV === 'production' ? '/FBT-GYM/' : '';

  return (
    <section className="text-center my-5">
      <h2>About Us</h2>
      <Card className="mx-auto" style={{ maxWidth: '100%' }}>
        <Card.Img variant="top" src={`${assetPrefix}1.png`} alt="FBT Gym" />
        <Card.Body>
          <Card.Title>About Us</Card.Title>
          <Card.Text>
            FBT Functional Body Training is dedicated to providing top-notch fitness programs to help you achieve your goals.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}
