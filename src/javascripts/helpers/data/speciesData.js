import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllSpecies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/species.json`)
    .then((response) => {
      const demSpecies = response.data;
      const species = [];
      if (species) {
        Object.keys(demSpecies).forEach((fbId) => {
          demSpecies[fbId].id = fbId;
          species.push(demSpecies[fbId]);
        });
      }
      resolve(species);
    })
    .catch((error) => reject(error));
});

const deleteSpecies = (speciesId) => axios.delete(`${baseUrl}/species/${speciesId}.json`);

export default { getAllSpecies, deleteSpecies };
