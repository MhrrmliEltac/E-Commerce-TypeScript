"use client"
import { products } from "@/utils/Product";
import Heading from "../general/Heading";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <Heading text="Tüm Ürünler" />
      <div className="flex flex-wrap gap-3 md:gap-10 px-3 md:px-10 mb-3 md:mb-10 justify-center items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
