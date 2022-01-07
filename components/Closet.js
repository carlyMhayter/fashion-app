import { ImageList, ImageListItem, itemData } from "@mui/material";
import React, { Component } from "react";
import ClosetItem from "./ClosetItem";
import  SearchBarCloset from "./SearchBarCloset"
import Box from '@mui/material/Box';


let imgArray = [
  { src: "/clothes/IMG_0840.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0841.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0842.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0843.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0844.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0845.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0846.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0847.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0852.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0849.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0850.jpeg", name: "shirt" },
  { src: "/clothes/IMG_0851.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1096.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1097.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1098.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1099.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1100.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1101.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1103.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1104.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1105.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1106.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1107.jpeg", name: "shirt" },
  { src: "/clothes/IMG_1109.jpeg", name: "shirt" },
    { src: "/clothes/IMG_1110.jpeg", name: "shirt" },


];

export default function Closet() {
  return (
    <div className="closet-container">
      My Closet
      <div><SearchBarCloset/></div>
      <div>
      <Box sx={{ width: 500, height: 650, overflowY: 'scroll' }} >
        <ImageList
          variant="masonry"
          cols={4}
          gap={8}
        >
          {imgArray.map((item) => (
            <ImageListItem key={item.src}>
              <ClosetItem src={item.src} name={item.name} />
            </ImageListItem>
          ))}
        </ImageList>
        </Box>
      </div>
    </div>
  );
}
