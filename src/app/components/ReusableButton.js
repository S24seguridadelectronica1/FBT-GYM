"use client";

import React from 'react';
import { Button } from 'react-bootstrap';

export default function ReusableButton({ onClick, children }) {
  return (
    <Button variant="primary" onClick={onClick}>
      {children}
    </Button>
  );
}
