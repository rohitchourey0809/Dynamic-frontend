import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { TextInput, CheckboxList, RadioList, DatePicker } from "oolib";
import CustomDropdownSingle from "./CustomDropdownSingle";

const fetchFormData = async () => {
  const { data } = await axios.get(
    "https://dynamic-form-orpin.vercel.app/formdata"
  );
  return data;
};

const DynamicForm = () => {
  const { data, error, isLoading } = useQuery("formData", fetchFormData);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, valuePath) => {
    const { id, name, value } = e; // Extract target from event
    const inputId = id || name;
    setFormData((prevData) => ({
      ...prevData,
      [valuePath]: { ...prevData[valuePath], [inputId]: value },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [inputId]: "", // Clear error when value changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    data.forEach((component) => {
      const { valuePath, isRequired, props } = component;
      const { id, label } = props;
      const value = formData[valuePath]?.[id];

      if (isRequired && (!value || value.trim() === "")) {
        newErrors[id] = `${label} is required`;
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // Form submission logic
    console.log("Form submitted:", formData);

    // Clear form data
    setFormData({});
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading form data</div>;

  const renderComponent = (component) => {
    const { comp, props, valuePath } = component;

    switch (comp) {
      case "TextInput":
        return (
          <TextInput
            key={props.id}
            {...props}
            value={formData[valuePath]?.[props.id] || ""}
            onChange={(e) => handleChange(e, valuePath)}
            error={errors[props.id]}
          />
        );
      case "DropdownSingle":
        return (
          <CustomDropdownSingle
            key={props.id}
            {...props}
            value={formData[valuePath]?.[props.id] || ""}
            onChange={(e) => handleChange(e, valuePath)}
            error={errors[props.id]}
          />
        );
      case "CheckboxList":
        return (
          <CheckboxList
            key={props.id}
            {...props}
            value={formData[valuePath]?.[props.id] || []}
            onChange={(e) => handleChange(e, valuePath)}
            error={errors[props.id]}
          />
        );
      case "RadioList":
        return (
          <RadioList
            key={props.id}
            {...props}
            value={formData[valuePath]?.[props.id] || ""}
            onChange={(e) => handleChange(e, valuePath)}
            error={errors[props.id]}
          />
        );
      case "DatePicker":
        return (
          <DatePicker
            key={props.id}
            {...props}
            value={formData[valuePath]?.[props.id] || ""}
            onChange={(e) => handleChange(e, valuePath)}
            error={errors[props.id]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {data.map((component, index) => (
        <div key={index}>{renderComponent(component)}</div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
