"use client";

import React from 'react';
import { Button } from 'react-bootstrap';

export default function ReusableButton({ onClick, children, variant = "primary", size = "md" }) {
  return (
    <Button 
      variant={variant}  // Permite cambiar el estilo del botón
      size={size}        // Permite cambiar el tamaño del botón
      onClick={onClick}  // Manejador de evento para el clic
    >
      {children}         // Contenido del botón (texto o componentes hijos)
    </Button>
  );
}
