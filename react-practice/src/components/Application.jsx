import { useState, useEffect } from "react";
//When you load app, call the api  -https://dog.ceo/api/breeds/list/all endpoint and get the repsonse
// dog breeds with sub breeds list
// render dog breed names -> Pagination
// Upon clicking dog breed, call api : https://dog.ceo/api/breed/${breed}/images/random , display the image on rigth side
//clicking on back goes to list of breeds
//
const Application = () => {
  // const response = {
  //   "message": {
  //     "affenpinscher": [],
  //     "african": [],
  //     "airedale": [],
  //     "akita": [],
  //     "appenzeller": [],
  //     "australian": [
  //       "kelpie",
  //       "shepherd"
  //     ],
  //   }
  // };
//  const imageUrl = "https://images.dog.ceo/breeds/african/n02116738_5953.jpg"
// https://dog.ceo/api/breed//african/images/random
// https://dog.ceo/api/breed/african/images/random
 const [ breed , setBreed] = useState(""); //dogbree dis dynamic so keep it in state
 const [ imageUrl, setImageUrl] = useState("");
 const [breedData, updateBreedData] = useState({})

 const fetchData = async () => {
  const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const data = await response?.json();
  console.log("all Data ",data )
  updateBreedData(data)
}
 useEffect(() => {
  console.log("i am here use effect" ) // when component renders, useEffect triggeres  based on dependencies ( it could be any state)
  fetchData();
 }, [])
  console.log("keys", breedData);
  const keys = breedData.message ? Object.keys(breedData.message): [];
  console.log("keys", breedData);
  const handleClick = async (dogBreed) =>{
    setBreed(dogBreed);
    console.log("dogBreed", breed);
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    setImageUrl(data.message)
  }
  return (
    <div className="App">
    <h1>List of dog Breeds</h1>
    <div>
    {keys.map((item, index)=>{
      //  console.log("item", item, index);
       return (item && <div
       key={index}
       onClick={() => handleClick(item)} //handleClick(item) is saved in onClick
       >{item}</div>  // we could have simple ( ) if we dont have to return
    )})}
    </div>
    <img src={imageUrl} alt="Girl in a jacket" width="500" height="600"/>
    </div>
  );
}

export default Application;
