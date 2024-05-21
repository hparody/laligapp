import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ImageSelect = ({
  selectedValue,
  label,
  itemsList,
  onChange,
  sx = {},
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel required>{label}</InputLabel>
      <Select
        required
        value={selectedValue}
        label={label}
        onChange={onChange}
        {...props}
        sx={{
          "& .MuiSelect-select": {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignContent: "stretch",
            alignItems: "center",
            justifyContent: "flex-start",
          },
          ...sx,
        }}
      >
        {itemsList.map(({ id, value, label, image }) => (
          <MenuItem key={id} value={value} sx={{ boxSizing: "border-box" }}>
            <Avatar
              alt={label}
              src={image}
              variant="rounded"
              sx={{ marginRight: "10px", width: "20px", height: "20px" }}
              slotProps={{ img: { sx: { objectFit: "contain" } } }}
            />
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

ImageSelect.propTypes = {
  selectedValue: PropTypes.string,
  label: PropTypes.string,
  itemsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
  sx: PropTypes.object,
  onChange: PropTypes.func,
};

export default ImageSelect;
