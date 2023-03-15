export const getSpecie = (specie) => {
  const speciesTranslations = {
    human: 'Humano',
    werewolf: 'Hombre Lobo',
    ghost: 'Fantasma',
    'half-giant': 'Medio Gigante',
  };
  return speciesTranslations[specie];
};
