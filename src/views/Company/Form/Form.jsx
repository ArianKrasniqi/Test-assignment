import React from "react";
import PropTypes from "prop-types";
import { sectorsData, stages } from "data/data";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";
import InputBase from "@material-ui/core/InputBase";

export const AddCompanyForm = styled.div`
  margin: 20px 100px;
  width: 500px;
  color: #267384;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

export const LabeledInput = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: black;
  font-size: 14px;
`;

export const LabelInside = styled.span`
  position: absolute;
  right: 20px;
  top: calc(50% + 4px);
  transform: translateY(-50%);
  color: #c0c9d0;
`;

export const Input = styled.input`
  border: 2px solid #b9c3cd;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  margin-top: 8px;
  padding: 10px 0 10px 12px;
  font-size: 15px;

  ::placeholder {
    color: #c0c9d0;
  }
`;

export const Submit = styled.button`
  border: none;
  width: 200px;
  border-radius: 4px;
  height: 50px;
  color: white;
  background-color: #0f7380;
  background-color: ${(props) => (props.allowSubmit ? "#0f7380" : "#a8aaab90")};
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  cursor: ${(props) => (props.allowSubmit ? "pointer" : "not-allowed")};
`;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  select: {
    width: "100%",
    marginBottom: "20px",
  },
  inputLabel: {
    color: "black",
    fontSize: "19px",
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #B9C3CD",
    fontSize: 15,
    padding: "10px 26px 10px 12px",
    color: "#C0C9D0",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Arial"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const Form = ({ handleInputChange, handleSubmit, inputs, allowSubmit }) => {
  const classes = useStyles();

  return (
    <AddCompanyForm>
      <Title>ADD NEW COMPANY</Title>

      <LabeledInput>
        <Label htmlFor="company">Company Name</Label>
        <Input
          type="text"
          id="company"
          name="company"
          placeholder="Company Name"
          onChange={handleInputChange}
        />
      </LabeledInput>

      <FormControl className={classes.select}>
        <InputLabel
          className={classes.inputLabel}
          htmlFor="demo-customized-select-native"
        >
          Stage
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={inputs.stage}
          name="stage"
          onChange={handleInputChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          {stages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.select}>
        <InputLabel
          className={classes.inputLabel}
          htmlFor="demo-customized-select-native"
        >
          Sector
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={inputs.sector}
          name="sector"
          onChange={handleInputChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          {sectorsData.map((sector) => (
            <option key={sector.type} value={sector.type}>
              {sector.type}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <LabeledInput>
        <Label htmlFor="amount">Investment size</Label>
        <div style={{ position: "relative" }}>
          <Input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            onChange={handleInputChange}
          />
          <LabelInside>EUR</LabelInside>
        </div>
      </LabeledInput>

      <Submit onClick={handleSubmit} allowSubmit={allowSubmit}>
        Add new company
      </Submit>
    </AddCompanyForm>
  );
};

Form.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  inputs: PropTypes.any,
  allowSubmit: PropTypes.bool,
}

export default Form;
