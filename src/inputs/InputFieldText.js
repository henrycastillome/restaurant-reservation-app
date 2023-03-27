import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  border-radius: 5px;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
  align-items: flex-start;
  label {
    color: var(--secondary-color-black);
  }

  textarea {
    align-self: stretch;
    align-items: flex-start;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid var(--primary-color-green);
    border-radius: 4px;
    box-sizing: border-box;
    font-family: var(--body-font);
    height: 9rem;
    ::placeholder {
      color: gray;
    }
  }
  textarea:focus {
    border: 3px solid var(--primary-color-green);
    outline: none;
  }
`;

const InputFieldText = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  htmlFor,
}) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <textarea
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        htmlFor={htmlFor}
        rows="4"
        cols="50"
      />
    </InputWrapper>
  );
};

export default InputFieldText;
