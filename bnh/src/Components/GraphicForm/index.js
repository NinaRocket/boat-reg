import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ImageUpload from "../ImageUpload";
import Select from "react-select";
import colors from "../../utils/colors.json";

function GraphicForm() {
  const [regText, setRegText] = useState();
  const [regTextColor, setRegTextColor] = useState();
  const [color, setColor] = useState();

  const handleChange = (event) => {
    setRegText(event.target.value);
  };

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "white",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize,
    }),
  };

  const changeColor = (e) => {
    console.log(`On change working and is grabbing: ${e.color}`);

    setColor(colors);
    setRegTextColor(e.color);
  };

  return (
    <>
      <React.Fragment>
        <Container>
          <div className="boatText" style={{ color: regTextColor }}>
            {regText}
          </div>

          <br></br>
        </Container>

        <Form.Group
          className="regText"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Registration Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            value={regText}
            onChange={handleChange}
            placeholder="NR 1234 NJ"
          />
        </Form.Group>
      </React.Fragment>

      <Form.Label>Color</Form.Label>
      <Select
        className="colorPick"
        myFontSize="20px"
        value={regTextColor}
        styles={styles}
        options={colors}
        onChange={changeColor}
      />

      <Form.Group
        className="background-color"
        controlId="exampleForm.ControlSelect1"
      >
        <Form.Label>Background Color</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group
        className="outline-color"
        controlId="exampleForm.ControlSelect1"
      >
        <Form.Label>Outline Shadow</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <ImageUpload />
    </>
  );
}
export default GraphicForm;

{
  /* <Form.Group className="color" controlId="exampleForm.ControlSelect1">
        <Form.Label>Font</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group> */
}

{
  /* <Form.Group className="color" controlId="exampleForm.ControlSelect1">
        <Form.Label>Color</Form.Label>
        <Form.Control as="select" value={regText} onChange={changeColor}>
          <option></option>
          <option style={{ color: "red" }}>Red</option>
          <option>Blue</option>
          <option>Green</option>
        </Form.Control>
      </Form.Group> */
}
