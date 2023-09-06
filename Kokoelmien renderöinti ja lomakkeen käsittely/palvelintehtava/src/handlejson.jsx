import { useEffect  } from 'react'
import axios from 'axios';

export const loadJson = () => {
    return axios.get('http://localhost:3001/persons')
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
    
    export const deleteJson = (id) =>{
        axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response =>
            console.log("Item deleted succesfully", response)
        ).catch(error => 
            console.error("Error deleting data:", error)
        );
    }


    export const refreshJsonId = () => {
        
    }