import React from "react";
import styled from "styled-components";

const InputWrapperTime = styled.div`
  border-radius: 5px;
  padding-top: 0.5rem ;
  display: flex;
  flex-direction: column;
  margin-top:1rem;
  width: 100%;

  label {
    color: var(--secondary-color-black);
  }

  input,
  select {
    width: 100%;
    height: 3rem;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: ${props=> props.isinvalid? '1px solid red': '1px solid var(--primary-color-green)'};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: var(--body-font);
    color: ${props => (props.hasValue ? "black" : "gray")};
  }
  input:focus,
  select:focus {
    border: ${props=> props.isinvalid? '3px solid red' : '3px solid var(--primary-color-green)'};
    outline: none;
  }
  select:required:invalid {
    color: gray;
    opacity: 1;
  }
  option[value=""][disabled] {
    display: none;
  }
  option {
    color: #000;
  }
`;

const InputFieldSeat = ({ value, onChange, isinvalid, onBlur, hasValue }) => {
  return (
    <InputWrapperTime isinvalid={isinvalid} hasValue={hasValue}>
      <label>Seating Option<sup>*</sup></label>
      <select data-testid="seat-component" name="seating" value={value} onChange={onChange} onBlur={onBlur} >
        <option value="" disabled >
          Select..
        </option>

        <option value="Outdoor">Outdoor</option>
        <option value="Indoor">Indoor</option>
      </select>
    </InputWrapperTime>
  );
};

export default InputFieldSeat;
