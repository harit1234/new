import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";

const UserReview = (props) => {
  return (
    <Form fluid>
      <FormGroup>
        <ControlLabel>Any Suggestions for us ?</ControlLabel>
        <FormControl
          rows={5}
          cols={800}
          name="textarea"
          componentClass="textarea"
          value={props.value}
          onChange={props.onChange}
        />
        {!props.value ? <HelpBlock>Required</HelpBlock> : <></>}
      </FormGroup>
    </Form>
  );
};

export default UserReview;
