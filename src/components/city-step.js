import React, { useEffect } from "react";
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
  const handleChange = (e) => {
    if (props.values.length) props.updateStep(3);
    else props.updateStep(2);
    props.onChange(e);
    console.log(e);
  };

  return (
    <Form>
      <FormGroup>
        <ControlLabel>Checkbox</ControlLabel>
        <FormControl name="checkbox" accepter={CheckboxGroup} inline>
          <CheckboxGroup value={props.values} onChange={(e) => handleChange(e)}>
            {props.cities.map((city, i) => (
              <Checkbox key={i} value={city}>
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </Checkbox>
            ))}
            <HelpBlock>This default description.</HelpBlock>
          </CheckboxGroup>
        </FormControl>
      </FormGroup>
    </Form>
  );
};

export default CityStep;
