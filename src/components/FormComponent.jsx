import { useState } from "react";
import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
