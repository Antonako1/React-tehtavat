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

export const appendJson = () =>{

}