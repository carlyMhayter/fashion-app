import React, { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ACTIONS } from '../utils/reducer';

export default function SearchBarCloset(props) {
  const { data, dispatch, selectedTags } = props;

  const allTags = useMemo(() => {
    let array = data.map((item) => {
      return item.tags;
    });
    return [...new Set(array.flat())];
  }, [data]);

  return (
    <div>
      <Autocomplete
        options={allTags}
        multiple={true}
        getOptionLabel={(allTags) => allTags}
        id="clear-on-escape"
        clearOnEscape
        value={selectedTags}
        onChange={(event, newValue) => {
          dispatch({
            type: ACTIONS.UPDATE_SELECTED_TAGS,
            payload: newValue,
          });
          console.log('newvalue', newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for tags/categories here..."
            variant="standard"
          />
        )}
      />
    </div>
  );
}

const categories = ['fall', 'spring', 'winter', 'jackets', 'vintage', 'skirts'];
