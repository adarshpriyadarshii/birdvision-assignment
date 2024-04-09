import React, { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { Grid, IconButton, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Dashboard({ setId }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fectchApi = async (page) => {
    const limit = 10;
    const skip = (page - 1) * limit;
    await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fectchApi(page);
  }, [page]);
  const handlePageInfo = (idx) => {
    setId(idx);
    navigate(`/product/${idx}`);
  };
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 12));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home Page</h1>
      <Typography>Page: {page}</Typography>
      <IconButton onClick={handlePrevPage} disabled={page === 1}>
        <ArrowBackIcon sx={{ color: page === 1 ? "" : "black" }} />
      </IconButton>
      <IconButton onClick={handleNextPage} disabled={page === 12}>
        <ArrowForwardIcon sx={{ color: page === 12 ? "" : "black" }} />
      </IconButton>

      <Grid
        container
        spacing={2}
        padding={1}
        justifyContent="center"
        alignItems="center"
      >
        {products.map((product) => (
          <Grid
            item
            xs={4}
            key={product.id}
            onClick={() => handlePageInfo(product.id)}
            sx={{ cursor: "pointer" }}
          >
            <ProductCard
              src={product.thumbnail}
              title={product.title}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
