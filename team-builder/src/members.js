import React from "react";

const Members = props => {
  return (
    <div>
      {props.members.map(i => {
        return (
          <div>
            <h2>{i.name}</h2>
            <h2>{i.email}</h2>
            <h2>{i.role}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
