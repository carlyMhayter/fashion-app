import { ImageList, ImageListItem, itemData } from "@mui/material";
import React, { Component } from "react";
import ClosetItem from "./ClosetItem";
import SearchBarCloset from "./SearchBarCloset";
import Box from "@mui/material/Box";
import { ACTIONS, reducer } from "../utils/reducer";

export default function Closet(props) {
  let { clothes, categories, dispatch } = props;
  return (
    <div className="closet-container">
      My Closet
      <div>
        <SearchBarCloset clothes={clothes} dispatch={dispatch} />
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
            {clothes.map((cloth) => (
              <ImageListItem key={cloth.id}>
                <ClosetItem
                  dispatch={dispatch}
                  src={cloth.src}
                  tags={cloth.tags}
                  id={cloth.id}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
