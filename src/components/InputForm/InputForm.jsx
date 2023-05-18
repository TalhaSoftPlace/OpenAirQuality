import React, { useState } from "react";
import { Form, Header } from "semantic-ui-react";

export const InputForm = React.memo(({ onFormSubmit }) => {
  const [inputCityOne, setInputCityOne] = useState("");
  const [inputCityTwo, setInputCityTwo] = useState("");
  const [errorCityOne, setErrorCityOne] = useState(false);
  const [errorCityTwo, setErrorCityTwo] = useState(false);

  const cityInputChangeHandler = (setState, setErrorState) => (e) => {
    setState(e.target.value);
    setErrorState(false);
  };

  const formSubmitHandler = () => {
    if (!inputCityOne.trim()) {
      setErrorCityOne(true);
    }
    if (!inputCityTwo.trim()) {
      setErrorCityTwo(true);
    }
    if (inputCityOne.trim() && inputCityTwo.trim()) {
      const data = [inputCityOne, inputCityTwo];
      onFormSubmit(data);
    }
  };

  return (
    <>
      <Header as="h2" textAlign="center">
        Air Quality Comparison
      </Header>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group widths="equal">
          <Form.Input
            id="form-input-control-city-first-name"
            label="Enter First City Name"
            placeholder="e.g Chicago"
            value={inputCityOne}
            onChange={cityInputChangeHandler(setInputCityOne, setErrorCityOne)}
            error={errorCityOne}
          />
          <Form.Input
            id="form-input-control-city-second-name"
            label="Enter Second City Name"
            placeholder="e.g Botson"
            value={inputCityTwo}
            onChange={cityInputChangeHandler(setInputCityTwo, setErrorCityTwo)}
            error={errorCityTwo}
          />
        </Form.Group>
        <Form.Button color="teal" content="Compare" />
      </Form>
    </>
  );
});
