const dogsList = async (callback) => {
// https://dog.ceo/api/breeds/list/all
  const dogsList = await callback('https://dog.ceo/api/breeds/list/all');
  console.log(dogsList);
  const firstDogBreed = Object.keys(dogsList.message)[0];
  const imageUrl = await callback(`https://dog.ceo/api/breed/${firstDogBreed}/images/random`);
  console.log(imageUrl, "image url output");
};

const APIrequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

dogsList(APIrequest);
