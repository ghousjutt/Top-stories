import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const NewsCard = ({ title, image, publishedDate, url }) => {
  return (
    <a href={url} style={{ textDecoration: 'none'}}>
      <Card elevation={3}>
        <CardMedia
          component="img"
          height="200"
          image={image.url}
          alt={title}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Published: {new Date(publishedDate).toDateString()}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

export default NewsCard;
