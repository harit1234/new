import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Checkbox,
  CheckboxGroup,
} from "rsuite";

const CityStep = (props) => {
  const [cities, setCities] = useState(props.values);

  const handleChange = (e) => {
    setCities(e);
  };

  useEffect(() => {
    if (cities.length) props.updateStep(3);
    else props.updateStep(2);
    props.onChange(cities);
  }, [cities]);

  console.log(Array.isArray(cities));

  return (
    <Form>
      <FormGroup>
        <ControlLabel>Checkbox</ControlLabel>
        <FormControl
          name="checkbox"
          value={cities}
          accepter={CheckboxGroup}
          onChange={(e) => handleChange(e)}
        >
          {props.cities.map((city, i) => (
            <Checkbox key={i} value={city}>
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </Checkbox>
          ))}
          <HelpBlock>This default description.</HelpBlock>
        </FormControl>
      </FormGroup>
    </Form>
  );
};

export default CityStep;
