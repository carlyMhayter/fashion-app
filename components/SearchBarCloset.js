import React, { useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomAutocomplete from './CustomAutocomplete';

export default function SearchBarCloset(props) {
  const { data, dispatch } = props;

  const allTags = useMemo(() => {
    let array = data.map((item) => {
      return item.tags;
    });
    return [...new Set(array.flat())];
  }, [data]);

  const defaultProps = {
    options: allTags,
    getOptionLabel: (allTags) => allTags,
  };

  const [value, setValue] = React.useState(null);
  return (
    <div>
      <CustomAutocomplete data={data} />
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        groupBy={(option) => option.firstLetter}
        clearOnEscape
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
