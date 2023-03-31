import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
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
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: ${props=> props.isinvalid? '1px solid red': '1px solid var(--primary-color-green)'};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: var(--body-font);
    height: 3rem;
    ::placeholder {
      color:gray;
    }
  }
  input:focus {
    border: ${props=> props.isinvalid? '3px solid red' : '3px solid var(--primary-color-green)'};
    outline: none;
  }
`;

const InputField = ({ label, type, value, onChange, placeholder, htmlFor, isinvalid,onBlur, id}) => {
  return (
   
    <InputWrapper isinvalid={isinvalid} >
      <label id={id}>{label} <sup>*</sup></label>
      <input
      
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        htmlFor={htmlFor}
        onBlur={onBlur}
        aria-labelledby={id}
      />
    </InputWrapper>
    
    

  )
};

export default InputField;
