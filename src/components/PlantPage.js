import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleNewPlant(newPlant) {
    const newPlants = [...plants, newPlant]
    setPlants(newPlants);
  }

  function handleSearchBar(event) {
    setSearch(event.target.value);
  }

  const plantsToDisplay = plants.filter(plant => {
    if(search.length > 0) {
      return plant.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  })

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant}/>
      <Search onChange={handleSearchBar}/>
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
