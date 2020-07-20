import React from "react";
import Input from "@material-ui/core/TextField";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const styles = {
    title: {
      color: "black",
      margin: 0,
      fontSize: 60,
      fontWeight: "bold",
      paddingBottom: 20,
      paddingTop: 15,
    },

    paragraph: {
      fontWeight: "light",
      fontSize: 22,
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "fernando_pineda_gmail",
        "contact_form",
        e.target,
        "user_5dgKaHf6knYaKBFHCEHuT"
      )
      .then(
        (result) => {
          toast.success("Message sent succesfully!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div style={{ padding: "1rem", backgroundColor: "#e9ecef" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <h1 style={styles.title}>Contact</h1>
          <p style={styles.paragraph}>
            Leave me a message, so we can keep in touch!
          </p>
        </div>
      </div>
      <form
        id="contact-form"
        autoComplete="off"
        onSubmit={sendEmail}
        className="contact-form"
      >
        <Input
          name="from_name"
          label="Your Name"
          variant="filled"
          style={{ paddingBottom: "1rem" }}
          required
        />
        <Input
          name="subject"
          label="Subject"
          variant="filled"
          style={{ paddingBottom: "1rem" }}
          required
        />

        <Input
          name="email"
          label="Your email"
          variant="filled"
          type="email"
          style={{ paddingBottom: "1rem" }}
          required
        />
        <Input
          name="message"
          rowsMax={10}
          rows={10}
          multiline
          label="Your message"
          variant="filled"
          style={{ paddingBottom: "1rem" }}
          required
        />

        <Button type="submit" variant="outlined">
          Send
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
}
