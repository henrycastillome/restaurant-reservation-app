import styled from "styled-components";

const InputWrapperTime = styled.div`
  border-radius: 5px;
  padding-top: 0.5rem ;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;

  label {
    color: var(--secondary-color-black);
  }

  select {
    appearence: none !important;
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

  input:focus,
  select:focus {
    border: ${props=> props.isinvalid? '3px solid red' : '3px solid var(--primary-color-green)'};
    outline: none;
  }
`;

const InputFieldGuest = ({ value, onChange, isinvalid, onBlur }) => {
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <InputWrapperTime isnvalid={isinvalid}>
      <label>Guests <sup>*</sup></label>

      <select name="guest" value={value} onChange={onChange} onBlur={onBlur} required>
        <option value="" disabled >
          Select..
        </option>

        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </InputWrapperTime>
  );
};

export default InputFieldGuest;
