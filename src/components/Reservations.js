import React, { useState } from "react";
import Button from "./Button";
import InputField from "../inputs/InputField";
import InputFieldDate from "../inputs/InputFieldDate";
import InputFieldGuest from "../inputs/InputFieldGuest";
import InputFieldPhone from "../inputs/InputFieldPhone";
import InputFieldSeat from "../inputs/InputFieldSeat";
import InputFieldTime from "../inputs/InputFieldTime";
import InputFieldText from "../inputs/InputFieldText";
import InputFieldOcasion from "../inputs/InputFieldOcasion";
import ErrorMessage from "../inputs/ErrorMessage";
import { useAlertContext } from "../context/alertContext";
import { Slide } from "react-awesome-reveal";
import { fetchAPI } from "../API/Api";


const isEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const Reservations = () => {
  const [name, setName] = useState({
    value: "",
    isTouched: false,
  });
  const [lastName, setLastName] = useState({
    value: "",
    isTouched: false,
  });
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [date, setDate] = useState({
    value: "",
    isTouched: false,
  });
  const [guest, setGuest] = useState({
    value: "",
    isTouched: false,
  });
  const [timeOfDay, setTimeofDay] = useState({
    value: "",
    isTouched: false,
  });
  const [seat, setSeat] = useState({
    value: "",
    isTouched: false,
  });
  const [special, setSpecial] = useState("");
  const [telephone, setTelephone] = useState({
    value: "",
    isTouched: false,
  });
  const [ocasion, setOcasion] = useState({
    value: "",
    isTouched: false,
  });
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    let formattedInput = "";
    if (input)
      if (input.length >= 1) {
        formattedInput += `(${input.slice(0, 3)}`;
      }
    if (input.length >= 4) {
      formattedInput += `) ${input.slice(3, 6)}`;
    }
    if (input.length >= 7) {
      formattedInput += `-${input.slice(6, 10)}`;
    }

    setTelephone({ value: formattedInput, isTouched: true });
  };

  const handleEmail = (e) => {
    const emailInput = e.target.value;

    if (!isEmail(emailInput)) {
      setIsInvalidEmail(true);
    } else {
      setIsInvalidEmail(false);
    }

    setEmail({
      value: emailInput,
      isTouched: true,
    });
  };

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);

  const minDate = new Date();
  minDate.setHours(0, 0, 0, 0); // set the time part to midnight

  

  const formValidation = () => {
    let isValid = true;

    if (name.value === "") {
      setName({ ...name, isTouched: true });
      isValid = false;
    }
    if (lastName.value === "") {
      setLastName({ ...lastName, isTouched: true });
      isValid = false;
    }
    if (email.value === "") {
      setEmail({ ...email, isTouched: true });
      setIsInvalidEmail(true);
      isValid = false;
    }
    if (
      telephone.value === "" ||
      (telephone.value.length <= 10 && telephone.isTouched)
    ) {
      setTelephone({ ...telephone, isTouched: true });
      isValid = false;
    }
    if (
      date.value === "" ||
      new Date(date.value) > maxDate ||
      new Date(date.value) < minDate
    ) {
      setDate({ ...date, isTouched: true });
      isValid = false;
    }
    if (timeOfDay.value === "") {
      setTimeofDay({ ...timeOfDay, isTouched: true });
      isValid = false;
    }
    if (guest.value === "") {
      setGuest({ ...guest, isTouched: true });
      isValid = false;
    }
    if (seat.value === "") {
      setSeat({ ...seat, isTouched: true });
      isValid = false;
    }
    if (ocasion.value === "") {
      setOcasion({ ...ocasion, isTouched: true });
      isValid = false;
    } else {
      return isValid;
    }
  };

  const clearForm = () => {
    setName({
      value: "",
      isTouched: false,
    });
    setLastName({
      value: "",
      isTouched: false,
    });
    setEmail({
      value: "",
      isTouched: false,
    });
    setDate({
      value: "",
      isTouched: false,
    });
    setGuest({
      value: "",
      isTouched: false,
    });
    setTimeofDay({
      value: "",
      isTouched: false,
    });
    setSeat({
      value: "",
      isTouched: false,
    });
    setSpecial("");
    setTelephone({
      value: "",
      isTouched: false,
    });
    setOcasion({
      value: "",
      isTouched: false,
    });
    setIsInvalidEmail(false);
    setIsFormValid(false);
  };

  const { alertSucess } = useAlertContext();

  

  

  const handleDate=(e)=>{
    
    const inputDate=e.target.value
    const dateRequested= new Date(inputDate)
    const dateFetch=fetchAPI(dateRequested)
    setDate({
      value:inputDate,
      isTouched:true
    })
    setAvailableTimes(dateFetch)
   

  }

 



  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      setIsFormValid(true);

      const formData = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        date: date.value,
        phone: telephone.value,
        time: timeOfDay.value,
        guest: guest.value,
        ocasion: ocasion.value,
      };

      const formValues = Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

      

      alert(`Form submitted with the following values:\n\n${formValues}`);

      alertSucess({ name: name.value, lastName: lastName.value });

      clearForm();
    }
  };
  return (

    <div className="reservation">
      
      <div className="reservation-card">
        <Slide cascade triggerOnce>
          <h1
            id="reservations-section"
            style={{ color: "var(--primary-color-green" }}
          >
            Reservations
          </h1>
        </Slide>

        <form onSubmit={handleSubmit}>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputField
                label="First Name"
                type="text"
                htmlFor="firstName"
                id="firstName"
                value={name.value}
                placeholder="Enter your first name"
                onChange={(e) => setName({ ...name, value: e.target.value })}
                onBlur={(e) => setName({ ...name, isTouched: true })}
                isinvalid={
                  (name.isTouched && name.value === "") ||
                  (name.value.length < 4 && name.isTouched)
                }
              />
              {name.isTouched && name.value === "" ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : name.value.length < 4 && name.isTouched ? (
                <ErrorMessage>Too short!</ErrorMessage>
              ) : null}
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputField
                label="Last Name"
                type="text"
                htmlFor="lastName"
                id="lastName"
                value={lastName.value}
                placeholder="Enter your last name"
                onChange={(e) =>
                  setLastName({ ...lastName, value: e.target.value })
                }
                onBlur={(e) => setLastName({ ...lastName, isTouched: true })}
                isinvalid={
                  (lastName.isTouched && lastName.value === "") ||
                  (lastName.value.length < 4 && lastName.isTouched)
                }
              />
              {lastName.isTouched && lastName.value === "" ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : lastName.value.length < 4 && lastName.isTouched ? (
                <ErrorMessage>Too short!</ErrorMessage>
              ) : null}
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputField
                label="Email"
                type="text"
                htmlFor="email"
                id="email"
                value={email.value}
                placeholder="Enter your email"
                onChange={handleEmail}
                isinvalid={isInvalidEmail}
                onBlur={handleEmail}
              />
              {email.isTouched && email.value === "" ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : isInvalidEmail ? (
                <ErrorMessage>Invalid Email</ErrorMessage>
              ) : null}
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputFieldPhone
                value={telephone.value}
                onChange={handlePhoneNumberChange}
                onBlur={handlePhoneNumberChange}
                isinvalid={
                  (telephone.isTouched && telephone.value === "") ||
                  (telephone.value.length <= 10 && telephone.isTouched)
                }
              />
              {telephone.isTouched && telephone.value === "" ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : telephone.value.length < 14 && telephone.isTouched ? (
                <ErrorMessage>too short! you need 10 digits</ErrorMessage>
              ) : null}
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item-inline">
              <div style={{ display: "block", width: "100%" }}>
                <InputFieldDate
                  value={date.value}
                  onChange={handleDate}
                  onBlur={(e) => setDate({ ...date, isTouched: true })}
                  isinvalid={
                    (date.isTouched && date.value === "") ||
                    new Date(date.value) > maxDate ||
                    new Date(date.value) < minDate
                  }
                />
                {date.isTouched && date.value === "" ? (
                  <ErrorMessage>Required</ErrorMessage>
                ) : new Date(date.value) > maxDate && date.isTouched ? (
                  <ErrorMessage>
                    The date has to be no more than 2 weeks in advance
                  </ErrorMessage>
                ) : new Date(date.value) < minDate && date.isTouched ? (
                  <ErrorMessage>
                    The date can't be earlier than today
                  </ErrorMessage>
                ) : null}
              </div>

              <div style={{ display: "block", width: "100%" }}>
                <InputFieldTime
                  value={timeOfDay.value}
                  availableTimes={availableTimes}
                  hasValue={timeOfDay.value} //to add a place holder color gray to the select button in the component (check component)
                  onChange={(e) =>
                    setTimeofDay({ ...timeOfDay, value: e.target.value })
                  }
                  onBlur={(e) =>
                    setTimeofDay({ ...timeOfDay, isTouched: true })
                  }
                  isinvalid={(timeOfDay.isTouched && timeOfDay.value === "") || (date.value!=="" && timeOfDay.value==="")}
                />
                {timeOfDay.isTouched && timeOfDay.value === ""  && date.value==="" ? (
                  <ErrorMessage>Select a date first</ErrorMessage>
                ) :
                  <ErrorMessage>{timeOfDay.isTouched && timeOfDay.value === "" ? "Required" : null}</ErrorMessage> }
              </div>
            </div>
          </Slide>

          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputFieldGuest
                value={guest.value}
                hasValue={guest.value}
                onChange={(e) => setGuest({ ...guest, value: e.target.value })}
                onBlur={(e) => setGuest({ ...guest, isTouched: true })}
                isinvalid={guest.isTouched && guest.value === ""}
              />
              {guest.isTouched && guest.value === "" ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : null}
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputFieldSeat
                value={seat.value}
                hasValue={seat.value}
                onChange={(e) => setSeat({ ...seat, value: e.target.value })}
                onBlur={(e) => setSeat({ ...seat, isTouched: true })}
                isinvalid={seat.isTouched && seat.value === ""}
              />
              {seat.isTouched && seat.value === "" ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : null}
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputFieldOcasion
                value={ocasion.value}
                hasValue={ocasion.value}
                onChange={(e) =>
                  setOcasion({ ...ocasion, value: e.target.value })
                }
                onBlur={(e) => setOcasion({ ...ocasion, isTouched: true })}
                isinvalid={ocasion.isTouched && ocasion.value === ""}
              />
              {ocasion.isTouched && ocasion.value === "" ? (
                <ErrorMessage>Required</ErrorMessage>
              ) : null}
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <InputFieldText
                type="text"
                label="Special Request"
                placeholder="Enter any special request here..."
                onChange={(e) => setSpecial(e.target.value)}
                value={special}
              />
            </div>
          </Slide>
          <Slide cascade triggerOnce>
            <div className="reservation-item">
              <Button type="submit" disabled={isFormValid}>
                {isFormValid ? "Submitting" : "Submit"}
              </Button>
            </div>
          </Slide>
        </form>
      </div>
    </div>
  );
};

export default Reservations;
