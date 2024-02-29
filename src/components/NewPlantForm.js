import React, {useState} from "react";

function NewPlantForm({onNewPlant}) {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: ""
  })

  function handleOnChange(event) {
    const key = event.target.name;
    const tempForm = {...formData, [key]: event.target.value}
    setFormData(tempForm);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        price: formData.price
      })
    })
    .then(res => res.json())
    .then(newPlant => onNewPlant(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleOnChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleOnChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleOnChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
