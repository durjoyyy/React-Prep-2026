import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <p style={styles.subtext}>
        Have questions or feedback? We'd love to hear from you.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  subtext: {
    marginBottom: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff5200",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Contact;