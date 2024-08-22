"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

type Product = {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
};

function CardList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data: Product[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 w-full">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default CardList;
