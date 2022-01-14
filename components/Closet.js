import { ImageList, ImageListItem, itemData } from "@mui/material";
import React, { Component } from "react";
import ClosetItem from "./ClosetItem";
import SearchBarCloset from "./SearchBarCloset";
import Box from "@mui/material/Box";
import { ACTIONS, reducer } from "../utils/reducer";

export default function Closet(props) {
  let { data, categories, dispatch } = props;
  return (
    <div className="closet-container">
      My Closet
      <div>
        <SearchBarCloset data={data} dispatch={dispatch} />
      </div>
      <div>
        <Box
          sx={{
            border: "1px solid #e8e8e8",
            width: "100%",
            height: "75vh",
            overflowY: "scroll",
            marginTop: "10px",
            padding: "8px",
            paddingTop: "0px",
          }}
        >
          <ImageList variant="masonry" cols={4} gap={8}>
            {data.map((cloth) => (
              <ImageListItem key={cloth.id}>
                <ClosetItem data={data} dispatch={dispatch} item={cloth} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
