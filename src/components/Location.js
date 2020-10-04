import React from "react";

export const Location = (props) => {
  const { location } = props;

  return (
    <main>
      <article>
        <h3>{location.name}</h3>
        <ul>
          <li>street: {location.street}</li>
          <li>city: {location.city}</li>
          <li>state: {location.state}</li>
          <li>accessible: {location.accessible ? "true" : "false"}</li>
          <li>unisex: {location.unisex ? "true" : "false"}</li>
        </ul>
      </article>
    </main>
  );
};
