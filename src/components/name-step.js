import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";

const NameStep = (props) => {
  const handleChange = (e) => {
    if (e.length) props.updateStep(2);
    else props.updateStep(0);
    props.onChange(e);
  };

  return (
    <Form>
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <FormControl value={props.value} onChange={handleChange} name="name" />
        {!props.value ? <HelpBlock>Required</HelpBlock> : <></>}
      </FormGroup>
    </Form>
  );
};

export default NameStep;
