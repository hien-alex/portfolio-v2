import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitClicked, setSubmitClicked] = useState(false);
  const [succesfullySent, setSuccesfullySent] = useState(false);

  const postSubmission = async () => {
    const payLoad = {
      Name: name,
      Email: email,
      Message: message,
    };

    try {
      const result = await axios
        .post("https://submit-form.com/sK8uNHa9", payLoad)
        .then((res) => {
          if (res.status === 200) {
            setSubmitClicked(true);
            setSuccesfullySent(true);
          } else {
            setSubmitClicked(false);
            setSuccesfullySent(false);
          }
        });
    } catch (error) {
      console.log(error);
      setSubmitClicked(false);
      setSuccesfullySent(false);
    }
  };

  const submitResponse = () => {
    if (submitClicked) {
      if (succesfullySent) {
        return (
          <div id={"contact-success-msg"} className={"contact-form-footer"}>
            <div>Message succesfully sent!</div>
          </div>
        );
      } else {
        return (
          <div id={"contact-fail-msg"} className={"contact-form-footer"}>
            <div>Message was not processed, please try again.</div>
          </div>
        );
      }
    }
  };

  return (
    <div id={"contact-container"}>
      <h1 id={"contact-header"}>Contact</h1>
      <div id={"contact-content"}>
        <span id={"contact-text"}>
          Have inquiries or want to work together? Leave your details and I'll
          get back to you as soon as possible.
        </span>
        <div id={"contact-form"}>
          <input
            className={"contact-form-input"}
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            className={"contact-form-input"}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <textarea
            className={"contact-form-input"}
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          {!submitClicked && (
            <div className={"contact-form-footer"}>
              <button id={"contact-form-submit"} onClick={postSubmission}>
                SUBMIT
              </button>
            </div>
          )}
          {submitResponse()}
        </div>
      </div>
    </div>
  );
};

export default Contact;
