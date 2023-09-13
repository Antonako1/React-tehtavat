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
    
    export  const deleteJson = async (id) =>{
        axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response =>
            console.log("Item deleted succesfully", response)
        ).catch(error => 
            console.error("Error deleting data:", error)
        );
    }


    export const refreshJsonId = async () => {
        try {
          const data = await loadJson();
          console.log(data);
      
          const dataCopy = [...data];
          for (let i = 0; i < dataCopy.length; i++) {
            dataCopy[i].id = i + 1;
            console.log(dataCopy[i].id);
          }
      
          console.log(dataCopy);
      
          const response = await axios.put("http://localhost:3001/persons", dataCopy);
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    