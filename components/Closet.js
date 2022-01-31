import { ImageList, ImageListItem, itemData } from '@mui/material';
import React, { useMemo } from 'react';
import ClosetItem from './ClosetItem';
import SearchBarCloset from './SearchBarCloset';
import Box from '@mui/material/Box';

export default function Closet(props) {
  const { data, categories, dispatch, selectedTags } = props;
  let showCard = true;
  let selectedClothes = [];

  const findSelectedItems = useMemo(() => {
    if (selectedTags.length > 0) {
      data.forEach((item) => {
        const containsAllTags = [];
        console.log('tags:', item.tags);
        selectedTags.map((selectedTag) => {
          item.tags.includes(selectedTag)
            ? containsAllTags.push(true)
            : console.log('no match');
        });
        containsAllTags.length === selectedTags.length
          ? selectedClothes.push(item)
          : console.log('not enough matches');
        // console.log('selected tags', selectedTags);
        // console.log('containsAllTags', containsAllTags);
        // console.log('selectedClothes', selectedClothes);
      });
    } else {
      selectedClothes = data;
    }
  }, [selectedTags]);

  return (
    <div className="closet-container">
      My Closet
      <div>
        <SearchBarCloset
          data={data}
          dispatch={dispatch}
          selectedTags={selectedTags}
        />
      </div>
      <div>
        <Box
          sx={{
            border: '1px solid #e8e8e8',
            width: '100%',
            height: '75vh',
            overflowY: 'scroll',
            marginTop: '10px',
            padding: '8px',
            paddingTop: '0px',
          }}
        >
          <ImageList variant="masonry" cols={4} gap={8}>
            {selectedClothes.map((cloth) => (
              <ImageListItem key={cloth.id}>
                <ClosetItem
                  data={data}
                  dispatch={dispatch}
                  item={cloth}
                  selectedTags={selectedTags}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
