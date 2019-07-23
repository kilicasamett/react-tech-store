import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
export default function HomePage() {
  return (
    <>
      <Hero title="Harİka ürünler" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          Ürünlerİmİz
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
