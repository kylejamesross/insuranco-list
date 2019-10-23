import React, { useCallback } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import categories from "../../../static/categories";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const CategorySelect = ({ value, setValue }) => {
  const onChange = useCallback(event => setValue(event.target.value), [
    setValue
  ]);

  return (
    <FormControl>
      <InputLabel htmlFor="category-label">Category</InputLabel>
      <Select
        className="select-category"
        value={value}
        onChange={onChange}
        inputProps={{ name: "category", id: "category-label" }}
      >
        {categories.map(category => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
