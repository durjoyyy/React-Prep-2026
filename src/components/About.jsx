import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>

      <p style={styles.text}>
        Welcome to <strong>FoodieExpress</strong> 🍔 — your go-to place for
        ordering delicious food from your favorite restaurants.
      </p>

      <p style={styles.text}>
        Our mission is simple: make food ordering fast, easy, and reliable.
        Whether you're craving street food or fine dining, we connect you with
        the best options around you.
      </p>

      <p style={styles.text}>
        Built with ❤️ using React, this project is a clone inspired by Swiggy to
        learn modern web development.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    marginBottom: "15px",
    color: "#555",
    lineHeight: "1.6",
  },
};

export default About;