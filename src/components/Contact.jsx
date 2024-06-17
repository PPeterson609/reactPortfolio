import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!name.trim()) {
      errors.name = "Name is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid.";
    }
    if (!message.trim()) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setErrors(null);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>
          Message:
          <textarea
            cols={20}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        {errors.message && <p className="error-message">{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
