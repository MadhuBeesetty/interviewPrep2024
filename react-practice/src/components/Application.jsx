import { useState,useEffect, useMemo } from "react";
import { dataApi } from "../api";

//When you load app, call the api  -https://dog.ceo/api/breeds/list/all endpoint and get the repsonse
// dog breeds with sub breeds list
// render dog breed names -> Pagination
// Upon clicking dog breed, call api : https://dog.ceo/api/breed/${breed}/images/random , display the image on rigth side
//clicking on back goes to list of breeds
//
const Application = () => {

  const [marketData, setMarketData] = useState([]);

  const data = useMemo(() => dataApi(), []);

  useEffect(() => {
    data.then((value) => {
      setMarketData(value);
    })
  }, []);

console.log(marketData, "this is market data");

  return (
    <div className="App">
    <h1>List of dog Breeds</h1>
    <section>
      <h1>We are building a new grocery store feed page, and want your help with it.</h1>

      <p>We will be using an API called getStoreFeed, that will give us all the items we need to show on the grocery store page. </p>

      <p>The response is an array of item objects, you can look at the response in response.js</p>

      <p>You need to create the feed page, which will have distinct sections for each category with all items that are marked with that category. </p>

      <p>You need to display the title of the item, show the image of the item, the price of the item in $ and if the item has a discount, the original price should have a strikethrough and should show the discounted price beside it. Check out the mockup for illustration.</p>

      <p>We have provided the CSS for the header sections and the individual item cards. You need to use them.</p>
      <img width='500' src={'/mockup.png'} alt='Feature design'/>
    </section>
    <>
    <p>madhu new project description</p>
    {marketData.map((data) => (
      <>
      <img className="app-image" alt={data.title} src={data.imageUrl} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      </>
    ))}
    </>
    </div>
  );
}

export default Application;
