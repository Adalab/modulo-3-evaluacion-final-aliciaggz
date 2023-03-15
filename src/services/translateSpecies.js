export const getSpecie = (species) => {
  const speciesTranslations = {
    human: 'Humano',
    werewolf: 'Hombre Lobo',
    ghost: 'Fantasma',
    'half-giant': 'Medio Gigante',
  };
  return speciesTranslations[species];
};
