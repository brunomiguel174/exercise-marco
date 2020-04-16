import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    alert(`${email} has been sent`);
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required={true}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={event => setSubject(event.target.value)}
        />

        <textarea
          cols="30"
          rows="10"
          placeholder="Write your message here"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </main>
  );
}
