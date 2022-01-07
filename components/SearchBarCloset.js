import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBarCloset() {

      const defaultProps = {
    options: categories,
    getOptionLabel: (categories) => categories,
  };

   const flatProps = {
    options: categories.map((option) => option),
  };

  const [value, setValue] = React.useState(null);
    return (
        <div>
           <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Search for tags/categories here..." variant="standard" />
        )}
      />
        </div>
    )
}



const categories = ["fall", "spring", "winter", "jackets", "vintage", "skirts"]
 