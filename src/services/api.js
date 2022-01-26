// Fichero src/services/api.js
const callToApi = (changeHouse) => {
  // Llamamos al API
  return fetch(
    `http://hp-api.herokuapp.com/api/characters/house/${changeHouse}`
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          specie: character.species,
          status: character.alive,
          image: character.image,
          gender: character.gender,
          house: character.house,
          id: `${character.name} ${character.actor} `,
        };
      });
      return cleanData;
    });
};

export default callToApi;
