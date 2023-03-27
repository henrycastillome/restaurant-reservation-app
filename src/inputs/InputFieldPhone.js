import React from "react";
import styled from "styled-components";

const InputWrapperDate = styled.div`
  border-radius: 5px;
  padding-top: 0.5rem ;
  display: flex;
  flex-direction: column;
  margin-top:1rem;
  width: 100%;

  label {
    color: var(--secondary-color-black);
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: ${props=> props.isinvalid? '1px solid red': '1px solid var(--primary-color-green)'};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: var(--body-font);
  }
  input:focus {
    border: ${props=> props.isinvalid? '3px solid red' : '3px solid var(--primary-color-green)'};
    outline: none;
  }
`;

const InputFieldPhone = ({ value, onChange, isinvalid, onBlur }) => {
  return (
    <InputWrapperDate isnvalid={isinvalid}>
      <label>Phone Number <sup>*</sup></label>
      <input
        type='"tel"'
        value={value}
        onChange={onChange}
        placeholder="333-333-0000"
        onBlur={onBlur}
       
       
      />
    </InputWrapperDate>
  );
};

export default InputFieldPhone;
