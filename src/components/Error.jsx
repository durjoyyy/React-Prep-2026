import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
const error=useRouteError();
console.log(error);
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>Oops!</h1>
      <h2 style={styles.heading}>{error.statusText}</h2>

      <p style={styles.text}>
        We couldn’t process your request. Please try again later.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  code: {
    fontSize: "60px",
    color: "#ff5200",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ff5200",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default ErrorPage;