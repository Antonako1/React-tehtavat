import React, { useState } from 'react';
import './App.css';
import { DataArea } from './assets/DataArea';

// Main
function App () {
  // Statet
  const [newThing, setNewThing] = useState("");
  const [otsikko, setOtsikko] = useState("");
  const [datam, setDatam] = useState([]);

  // Inputin päivitys
  const handleChange = (e) => {
    setNewThing(e.target.value)
  }
  // Otsikko
  const handleChange2 = (e) => {
    setOtsikko(e.target.value)
  }

  // Tietojen tallentaminen
  const saveChanges = (toEdit, parentId, innerId, newData) => {
    console.log(toEdit, parentId, innerId, newData)
    if(toEdit === "OTSIKKO"){
      let copy = [...datam];
      copy[parentId][0] = newData
      setDatam(copy)
    } else if (toEdit === "INNER"){
      let copy = [...datam];
      copy[parentId][innerId] = newData
      setDatam(copy)
    }
  }
  // Napin klikkaus
  const handleClick = () => {
    let copy = [...datam];
    // [0] sisältää otsikon, [1] ja eteenpäin sisällön
    let otsikkoTXT = otsikko
    if(otsikko === ""){
      otsikkoTXT = "[tyhjä]"
    }
    const arrItem = [
      otsikkoTXT
    ]
    copy.push(arrItem)
    setDatam(copy)
  }

  // Poistonappi
  const handleDelete = (id) => {
    // Poistaa muistiinpanoalueen
    let copy = [...datam];
    copy.splice(id, 1)
    setDatam(copy)
  }

  // Poistaa sisäsemmät muistit
  const handleDeleteInner = (id, parentId) => {
    let copy = [...datam];

    // Poistaa sisäsemmän muistin
    copy[parentId].splice(id, 1)
    setDatam(copy)
  }
  
  // Lisää uuden tavaran
  const handleAdd = (id) => {
    let copy = [...datam];
    // Lisää id:een kohdalle uutta tavaraa
    if(newThing === ""){
      copy[id].push("[tyhjä]")
    } else {
      copy[id].push(newThing)
    }
    setDatam(copy)
  }
  return (
    <div>
      {/* jebs jutut */}
      <input placeholder="Otsikko" onChange={handleChange2}/>
      <button onClick={handleClick}>Lisää</button>

      {/* Data näkyvii */}

      {
        datam.map((thing, id) => (
          <DataArea 
          handleChange={handleChange}
          key={id} 
          thing={thing} 
          id={id} 
          handleAdd={handleAdd}
          handleDelete={handleDelete} 
          handleDeleteInner={handleDeleteInner}
          saveChanges={saveChanges}
          />
        ))
      }
    </div>
  )
}

export default App
