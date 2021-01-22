import React from "react";

import { getPerson } from "./api";

export function StarWarsLoader() {
  const [person, setPerson] = React.useState();

  async function callGetPerson(e) {
    e.preventDefault();
    const data = await getPerson(e.target.elements.name.value);

    setPerson(data.results[0]);
  }

  return (
    <>
      <form onSubmit={callGetPerson}>
        <label htmlFor='name'>Name</label>
        <input id='name' />
        <button>search</button>

        {person && <p>Hello {person.name}</p>}
      </form>
    </>
  );
}
