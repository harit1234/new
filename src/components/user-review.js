import React, { useEffect } from "react";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";

const UserReview = (props) => {
  const [review, setReview] = React.useState(props.value);

  const handleChange = (e) => {
    setReview(e);
  };

  useEffect(() => {
    if (review.length) props.updateStep(4);
    else props.updateStep(3);
    props.onChange(review);
  }, [review]);

  return (
    <Form fluid>
      <FormGroup>
        <ControlLabel>Any Suggestions for us ?</ControlLabel>
        <FormControl
          rows={5}
          cols={800}
          name="textarea"
          componentClass="textarea"
          value={review}
          onChange={handleChange}
        />
        {!props.value ? <HelpBlock>Required</HelpBlock> : <></>}
      </FormGroup>
    </Form>
  );
};

export default UserReview;
