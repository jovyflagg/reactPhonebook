import React from "react";
import Title from "./components/Title";
import ContactCard from "./components/ContactCard";
import contacts from "./contacts.json";

const App = () => (
  <div>
    <Title>Contacts</Title>
    <ContactCard
      name={contacts[0].name}
      image={contacts[0].image}
      phone={contacts[0].phone}
      email={contacts[0].email}
    />
    <ContactCard
      name={contacts[1].name}
      image={contacts[1].image}
      phone={contacts[1].phone}
      email={contacts[1].email}
    />
    <ContactCard
      name={contacts[2].name}
      image={contacts[2].image}
      phone={contacts[2].phone}
      email={contacts[2].email}
    />
  </div>
);

export default App;