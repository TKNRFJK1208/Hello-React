import React, { useState} from "react";
import './ContactForm.scss';
import { db } from "../../firebase";

export default function ContactForm () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>

        <p>Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Email</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Message</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

