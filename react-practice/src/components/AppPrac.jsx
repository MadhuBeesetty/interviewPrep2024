import { useEffect, useState } from "react";
//When you load app, call the api  -https://dog.ceo/api/breeds/list/all endpoint and get the repsonse
// dog breeds with sub breeds list
// render dog breed names -> Pagination
// Upon clicking dog breed, call api : https://dog.ceo/api/breed/${breed}/images/random , display the image on rigth side
//clicking on back goes to list of breeds

const AppPrac = () => {

const [initialDogBreedData, updateInitialDogBreedData] = useState([]);

const [imageData, updateImageData] = useState([]);


  const makeApiCall = async (url) => {
    const data = await fetch(url);
    const responseData = await data.json();
    console.log(responseData, "response data");
    let dogsBreeds = Object.keys(responseData.message);
    updateInitialDogBreedData(dogsBreeds);
  };

  useEffect (() => {
    makeApiCall("https://dog.ceo/api/breeds/list/all");
  }, []);

  console.log(initialDogBreedData, "this is dog bread");

  const getImages = (breed) => {
    return new Promise((resolve, reject) => {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  };

   const getDogImage = (breed) => {
    getImages(breed).then((data) => {
      console.log(data, data.message, "dog image data");
      updateImageData(data.message);
     return  data.message;
    });
  };

  return (
    <div>
      {initialDogBreedData.map((eachDog) => (
        <>
        <div>{eachDog}</div>
        <img src={getDogImage(eachDog)} alt={eachDog} />
        </>
      ))}
    </div>
  );
}

export default AppPrac;
