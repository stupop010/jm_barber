import { useState } from "react";

import styles from "./ContactForm.module.scss";

export default function ContactForm({ btnText }) {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    number: "",
    time: "",
    details: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    e.preventDefault();
    console.log(form);

    setForm({
      first: "",
      last: "",
      email: "",
      number: "",
      time: "",
      details: "",
    });
  }
  return (
    <form onSubmit={submit} className={styles.form}>
      <div className={styles.form_control}>
        <input
          type="text"
          placeholder="First Name"
          value={form.first}
          name="first"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={form.last}
          name="last"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_control}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={form.number}
          name="number"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_control}>
        <select name="time" value={form.time} onChange={handleChange}>
          <option>Set Time</option>
          <option value="10.00">10.00</option>
          <option value="11.00">11.00</option>
          <option value="12.00">12.00</option>
          <option value="13.00">13.00</option>
          <option value="14.00">14.00</option>
          <option value="15.00">15.00</option>
        </select>
      </div>
      <div className={styles.form_control}>
        <textarea
          placeholder="Give us more details."
          name="details"
          value={form.details}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.btn}>
        {btnText}
      </button>
    </form>
  );
}
