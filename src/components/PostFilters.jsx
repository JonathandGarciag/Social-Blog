import {
  Autocomplete,
  TextField,
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const categoryOptions = [
  { label: "Practica", value: "Practica" },
  { label: "Taller", value: "Taller" },
  { label: "Tecnologia", value: "Tecnologia" },
];

const sortOptions = [
  { label: "Predeterminado", value: "" },
  { label: "Fecha", value: "fecha" },
  { label: "Título", value: "titulo" },
  { label: "Curso", value: "curso" },
  { label: "Popularidad", value: "popularidad" },
];

export default function PostFilters({
  selectedCategories,
  onChange,
  sort,
  onSortChange,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Autocomplete
        multiple
        options={categoryOptions}
        getOptionLabel={(option) => option.label}
        value={selectedCategories}
        onChange={(e, newValue) => onChange(newValue)}
        sx={{ minWidth: 240 }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
              key={option.value}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Categorías" />
        )}
      />

      <FormControl sx={{ minWidth: 160 }}>
        <InputLabel id="sort-label">Ordenar por</InputLabel>
        <Select
          labelId="sort-label"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          label="Ordenar por"
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
