import React from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Radio,
  RadioGroup,
} from "rsuite";

const DestinationStep = (props) => {
  const handleOnChange = (e) => {
    props.onChange(e);
  };

  return (
    <>
      <Form>
        <FormGroup>
          <ControlLabel>Checkbox</ControlLabel>

          <RadioGroup
            onChange={(d) => handleOnChange(d)}
            value={props.selectedDestination}
          >
            {props.destinations.map((d, i) => (
              <Radio key={i} value={d}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </Radio>
            ))}
          </RadioGroup>

          <HelpBlock>This default description.</HelpBlock>
        </FormGroup>
      </Form>
    </>
  );
};

export default DestinationStep;
