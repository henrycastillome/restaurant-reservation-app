import styled from "styled-components";

const InputWrapperTime = styled.div`
  border-radius: 5px;
  padding-top: 0.5rem;
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
    border: ${(props) =>
      props.isinvalid
        ? "1px solid red"
        : "1px solid var(--primary-color-green)"};
    border-radius: 4px;
    box-sizing: border-box;
    font-family: var(--body-font);
    color: ${(props) => (props.hasValue ? "black" : "gray")};
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
    border: ${(props) =>
      props.isinvalid
        ? "3px solid red"
        : "3px solid var(--primary-color-green)"};
    outline: none;
  }
`;
const ocasion = [
  "Birthday",
  "Anniversary",
  "Date",
  "Business Meal",
  "Just Because",
];

const InputFieldOcasion = ({
  value,
  onChange,
  isinvalid,
  onBlur,
  hasValue,
}) => {
  return (
    <InputWrapperTime isinvalid={isinvalid} hasValue={hasValue}>
      <label>
        Occasion<sup>*</sup>
      </label>

      <select
        data-testid="ocasion-component"
        name="ocasion"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="" disabled>
          Select..
        </option>

        {ocasion.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </InputWrapperTime>
  );
};

export default InputFieldOcasion;
