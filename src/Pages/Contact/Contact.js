const Contact = () => {
  return (
    <div id={"contact-container"}>
      <h1 id={"contact-header"}>Contact</h1>
      <div id={"contact-content"}>
        <span id={"contact-text"}>
          Have inquiries or want to work together? Leave your details and I'll
          get back to you as soon as possible.
        </span>
        <form id={"contact-form"}>
          <input className={"contact-form-input"} placeholder="Name" />
          <input className={"contact-form-input"} placeholder="Email" />
          <textarea className={"contact-form-input"} placeholder="Message" />
          <div id={"contact-form-footer"}>
            <button id={"contact-form-submit"}>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
