/*
Retorna a string com a primeira letra "Maiuscula";  
*/

const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

export default capitalizeFirstLetter;
