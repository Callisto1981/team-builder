import React, { useState } from "react";
import Members from "./members";

const From = props => {
  return (
    <form>
      <input
        id="id"
        name="name"
        type="text"
        placeholder="name here"
        onChange={handleChanges}
        value={Members.name}
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email"
        onChange={handleChanges}
        value={Members.email}
      />
      <input
        id="role"
        name="role"
        type="role"
        onChange={handleChanges}
        value={Members.role}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};
