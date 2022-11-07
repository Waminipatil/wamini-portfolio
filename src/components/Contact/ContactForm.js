import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const Result = () => {
  return <p>Your response has been submitted.</p>;
};

function ContactForm() {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rvd2mp7",
        "template_bqimba3",
        e.target,
        "m407pDr3Csp2TUjh0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <div className={styles["contact-form"]}>
      <form method="POST" name="contactForm" onSubmit={sendEmail}>
        {/* <p class="success-submit-message">
          Your message has been successfully sent.
        </p>
        <p class="fail-submit-message">
          An error occurred while sending the message.
        </p> */}
        <div className={styles["form-control"]}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className={styles["submit-btn"]} type="submit" value="Submit" />
        <div>{result ? <Result /> : null}</div>
      </form>
    </div>
  );
}

export default ContactForm;
