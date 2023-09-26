import { useEffect  } from 'react'
import axios from 'axios';

export const loadJson = async () => {
    return await axios.get('http://localhost:3001/persons')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        return null;
      });
  };

  
  export const postJson = (obj) => {
      axios.post('http://localhost:3001/persons', obj)
      .then(response => {
            console.log('Data appended:', response.data);
        })
        .catch(error => {
            console.error('Error appending data:', error);
        });
    }
    
    export  const deleteJson = async (id) =>{
        console.log(id)
        axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response =>
          console.log(response.data)
        ).catch(error => 
            console.error("Error deleting data:", error)
        );
    }

    export const replaceJson = async (id, obj) => {
      console.log(id, obj)
      try {
        await axios.put(`http://localhost:3001/persons/${id}`, {
          name: obj.name,
          number: obj.number,
        });
      } catch (error) {
        console.error("Error updating data:", error);
        throw error; // Rethrow the error to handle it elsewhere, if needed
      }
    }
