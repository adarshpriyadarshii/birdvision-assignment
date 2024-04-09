import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

function ProductCard(props) {
  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: 5,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardMedia sx={{ height: 200 }} image={props.src} title={props.title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 20, fontWeight: "bold" }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 16 }}
          >
            ${props.price}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;
