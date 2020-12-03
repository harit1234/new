import "./App.css";
import { Steps, Panel, Button, ButtonGroup } from "rsuite";
import React, { useEffect } from "react";
import "rsuite/dist/styles/rsuite-default.css";
import NameStep from "./components/name-step";
import DestinationStep from "./components/destination-step";
import CityStep from "./components/city-step";
import UserReview from "./components/user-review";
import Review from "./components/values-step";

const App = () => {
  const [step, setStep] = React.useState(0);
  const [name, setName] = React.useState("");
  const [destinationType, setDestinationType] = React.useState("mountains");
  const [selectedCities, setCities] = React.useState([]);
  const [review, setReview] = React.useState("");
  const [allowedLastStep, setallowedLastStep] = React.useState(0);

  const destinationTypes = ["mountains", "beaches"];
  const citiesObj = {
    mountains: ["shimla", "manali", "nainital"],
    beaches: ["goa", "pondicherry", "kerala"],
  };

  useEffect(() => {
    if (
      selectedCities.length &&
      citiesObj[destinationType].indexOf(selectedCities[0]) == -1
    ) {
      setCities([]);
    }
  }, [destinationType]);

  const onChange = (nextStep) => {
    setStep(
      nextStep < 0 ? 0 : nextStep > allowedLastStep ? allowedLastStep : nextStep
    );
  };

  const onCityChange = (e) => {
    setCities(e);
  };

  const activeComponent = () => {
    switch (step) {
      case 0:
        return (
          <NameStep onChange={setName} value={name} updateStep={updateStep} />
        );
      case 1:
        return (
          <DestinationStep
            onChange={setDestinationType}
            destinations={destinationTypes}
            selectedDestination={destinationType}
            value={name}
            updateStep={updateStep}
          />
        );
      case 2:
        return (
          <CityStep
            values={selectedCities}
            onChange={onCityChange}
            cities={citiesObj[destinationType]}
            updateStep={updateStep}
          />
        );
      case 3:
        return (
          <UserReview
            value={review}
            onChange={setReview}
            updateStep={updateStep}
          />
        );
      case 4:
        return (
          <>
            <Review
              name={name}
              destination={destinationType}
              cities={selectedCities}
              rev={review}
            />
          </>
        );
    }
  };

  console.log(step >= allowedLastStep, step, allowedLastStep);

  useEffect(() => {
    if (!selectedCities.length && step >= 1) {
      setallowedLastStep(2);
    }
  }, [selectedCities]);

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);

  const updateStep = (step) => {
    console.log(" updateStep ", step);
    setallowedLastStep(step);
    console.log(allowedLastStep);
  };

  return (
    <div className="container mt-5">
      <Steps current={step}>
        <Steps.Item title="Enter Name" description="Description" />
        <Steps.Item title="Select Location" description="Description" />
        <Steps.Item title="Select Cities" description="Description" />
        <Steps.Item title="Comments" description="Description" />
        <Steps.Item title="Review" description="Description" />
      </Steps>
      <hr />
      <Panel header={`Step: ${step + 1}`} shaded>
        {activeComponent()}
      </Panel>
      <hr />
      <ButtonGroup>
        <Button onClick={onPrevious} disabled={step === 0}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={step >= allowedLastStep}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default App;
