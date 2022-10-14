import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  ContactParentDiv,
  BtnDiv,
  FormDiv,
  FlexInputDiv,
  ErrorNameDiv,
  ErrorEmailDiv,
  ErrorMessageDiv,
} from "./ContactMe.styled";

const ContactMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const form = useRef();

  const [nshow, setnShow] = useState(false); // show name error line
  const [eshow, seteShow] = useState(false); // show email error line
  const [mshow, setmShow] = useState(false); // show message error line

  // ------------this function is sending email to me-------------------
  const sendEmail = (e) => {
    e.preventDefault();
    const errorEmail = document.querySelector(".email");
    const errorName = document.querySelector(".name");
    const errorMesssage = document.querySelector(".message");
    const errorEmailValue = errorEmail.value.length;
    const errorNameValue = errorName.value.length;
    const errorMessageValue = errorMesssage.value.length;

    if (
      errorEmailValue === 0 &&
      errorNameValue === 0 &&
      errorMessageValue === 0
    ) {
      setnShow(true);
      seteShow(true);
      setmShow(true);
    } else if (errorNameValue === 0) {
      if (errorNameValue === 0) {
        setnShow(true);
      }
      if (errorEmailValue === 0) {
        seteShow(true);
      }
      if (errorMessageValue === 0) {
        setmShow(true);
      }
    } else if (errorEmailValue === 0) {
      if (errorNameValue === 0) {
        setnShow(true);
      }
      if (errorEmailValue === 0) {
        seteShow(true);
      }
      if (errorMessageValue === 0) {
        setmShow(true);
      }
    } else if (errorMessageValue === 0) {
      if (errorNameValue === 0) {
        setnShow(true);
      }
      if (errorEmailValue === 0) {
        seteShow(true);
      }
      if (errorMessageValue === 0) {
        setmShow(true);
      }
    } else {
      emailjs
        .sendForm(
          "service_e9mh7m6",
          "template_2jxxegs",
          form.current,
          "ozkfMe9qFXAjpO7AB"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Your message has been sent successfully.");
          },
          (error) => {
            console.log(error.text);
          }
        );

      // ----this function will clear all the textarea of input and message on clicking the send button
      setTimeout(() => {
        const name = document.querySelector(".name");
        const email = document.querySelector(".email");
        const message = document.querySelector(".message");

        name.value = "";
        email.value = "";
        message.value = "";
      }, 300);
    }

    // --------------condition to hide the errors-----------
    if (errorNameValue !== 0) {
      setnShow(false);
    }
    if (errorEmailValue !== 0) {
      seteShow(false);
    }
    if (errorMessageValue !== 0) {
      setmShow(false);
    }
  };

  return (
    <ContactParentDiv>
      <h1 id="contact" data-aos="fade-right" data-aos-duration="1000">
        contact me
      </h1>

      <FormDiv data-aos="zoom-in" data-aos-duration="1000">
        <form ref={form} onSubmit={sendEmail}>
          <FlexInputDiv>
            <div className="input">
              <input
                type="text"
                name="user_name"
                placeholder="NAME"
                className="name"
                autoComplete="off"
              />

              <ErrorNameDiv>
                <p className={nshow ? "nshow" : null}>
                  *Please insert your Name
                </p>
              </ErrorNameDiv>
            </div>

            <div className="input">
              <input
                type="email"
                name="user_email"
                placeholder="EMAIL"
                className="email"
                autoComplete="off"
              />

              <ErrorEmailDiv>
                <p className={eshow ? "eshow" : null}>
                  *Please insert your Email
                </p>
              </ErrorEmailDiv>
            </div>
          </FlexInputDiv>

          <textarea
            name="message"
            placeholder="YOUR MESSAGE"
            className="message"
          />

          <ErrorMessageDiv>
            <p className={mshow ? "mshow" : null}>
              *Please insert your Message
            </p>
          </ErrorMessageDiv>
          <BtnDiv>
            <input type="submit" value="SEND MESSAGE" className="submit" />
          </BtnDiv>
        </form>
      </FormDiv>
    </ContactParentDiv>
  );
};

export default ContactMe;
