import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const RadioComponent = ({ handleChange, value, options, label, labelClassName, formClassName }) => {

  const marginTop = { marginTop: 5 };
  return (
    <FormControl component="fieldset" style={marginTop} className={formClassName}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender"
        style={{ display: "initial" }}
        value={value || ""}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((item, index) => (
          <FormControlLabel
            key={index}
            className={labelClassName}

            value={item.value || item}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioComponent;
