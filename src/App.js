import React from 'react';
import './style.css';

function Input({ characterLimit }) {
  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length > characterLimit) {
      event.target.value = value.slice(0, event.target.value.length - 1);
      alert('Character limit exceeded!');
    }
  };

  return <input onChange={handleChange} placeholder="Enter some text" />;
}

export default function App() {
  return (
    <section>
      <h1>Character Limit</h1>
      <Input characterLimit={12} />
    </section>
  );
}
