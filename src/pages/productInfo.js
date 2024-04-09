import React, { useEffect, useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function ProductInfo({ id }) {
  const [info, setInfo] = useState([]);
  const fectchSingle = async () => {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fectchSingle();
  }, []);
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        borderRadius: "10px",
      }}
      spacing={2}
    >
      <Typography variant="h4">{info.title}</Typography>
      <Stack direction="row">
        <div>
          {info.images && info.images.length > 0 && (
            <img
              src={info.images[0]}
              alt="Product"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            />
          )}
        </div>
        <Stack
          direction="column"
          sx={{ marginLeft: "20px", textAlign: "left" }}
        >
          <Typography sx={{ fontSize: 15 }}>{info.description}</Typography>
          <Typography>Price: ${info.price}</Typography>
          <Typography>Discount: {info.discountPercentage}%</Typography>
          <Typography>Rating: {info.rating}/5</Typography>
          <Typography>Brand: {info.brand}</Typography>
          <Typography>Category: {info.category}</Typography>
        </Stack>
      </Stack>
      <Button
        startIcon={<HomeIcon />}
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
    </Stack>
  );
}

export default ProductInfo;
