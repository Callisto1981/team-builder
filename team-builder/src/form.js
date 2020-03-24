import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(member);
  };

  const submitForm = e => {
    e.preventDefault();
    setMember({ name: "", email: "", role: "" });
    props.setMembers([...props.members, member]);
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        id="id"
        name="name"
        type="text"
        placeholder="name here"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="role">Role: </label>
      <input
        id="role"
        name="role"
        type="role"
        onChange={handleChanges}
        value={member.role}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
