import React, { useEffect, useState } from "react";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";

const NameStep = (props) => {
  const [name, setName] = useState(props.value);

  const handleChange = (e) => {
    setName(e);
  };

  useEffect(() => {
    console.log(name);
    if (!name.length) props.updateStep(0);
    else props.updateStep(2);
    props.onChange(name);
  }, [name]);

  return (
    <Form>
      <FormGroup>
        <ControlLabel>Username</ControlLabel>
        <FormControl value={name} onChange={handleChange} name="name" />
        {!props.value ? <HelpBlock>Required</HelpBlock> : <></>}
      </FormGroup>
    </Form>
  );
};

export default NameStep;
