import React, {useState, useEffect} from "react";
import "./App.css";
import {getStoreFeed} from './api';
import {categorize} from './utils';


const App = () => {

const [renderData, updateRenderData] = useState({});
useEffect(() => {
  console.log("i am in use effect");
  const data = getStoreFeed();
  data.then((value) => {
    console.log(value, "this is value");
    console.log(categorize(value), "i am here");
    updateRenderData(categorize(value))
  }
  );
}, []);


// {
//   "title": "banana",
//   "priceInCents": "234",
//   "category": {
//       "name": "fruit",
//       "id": "123",
//       "description": "healthy fresh fruits",
//       "imageUrl": ""
//   },
//   "imageUrl": "https://img.cdn4dd.com/p/fit=cover,width=300,height=300,format=auto,quality=50/media/photosV2/1476eeb1-7013-45f0-b15b-693c756c5e0e-retina-large.jpg",
//   "hasDiscount": "no",
//   "discountedPrice": "",
//   "offer": {
//       "type": "2for1",
//       "id": "2332"
//   },
//   "tags": [
//       "Low on stock",
//       "Just arrived"
//   ],
//   "id": 1
// }

  // updateRenderData(categorize(ApiResponse));
  // console.log(renderData, "use state value");

  return (
    <>
        <section>
      <h1>We are building a new grocery store feed page, and want your help with it.</h1>

      <p>We will be using an API called getStoreFeed, that will give us all the items we need to show on the grocery store page. </p>

      <p>The response is an array of item objects, you can look at the response in response.js</p>

      <p>You need to create the feed page, which will have distinct sections for each category with all items that are marked with that category. </p>

      <p>You need to display the title of the item, show the image of the item, the price of the item in $ and if the item has a discount, the original price should have a strikethrough and should show the discounted price beside it. Check out the mockup for illustration.</p>

      <p>We have provided the CSS for the header sections and the individual item cards. You need to use them.</p>
      <img width='500' src={'/mockup.png'} alt='Feature design'/>
    </section>
    <section>
      <div>
        <p> Fruits </p>
         { renderData.fruits && renderData.fruits.map((eachfruit, i) => (
            <div id={i} >
            <p>{eachfruit.title}</p>
            <img className="productImage" src={eachfruit.imageUrl}/>
            {eachfruit.hasDiscount === "yes" ?
            (
              <p>{eachfruit.priceInCents/100}</p>
              ) :
            (
              <div>
            <p className="strikeThrough">{eachfruit.priceInCents/100}</p>
            <p>{eachfruit.discountedPrice/100}</p>
              </div>
            )
          }
            </div>
          )
          )}
      </div>
      <div>
      <p> Vegitables </p>
          {renderData.vegitables && renderData.vegitables.map((eachVegitable, i) => (
            <div id={i} >
            <p>{eachVegitable.title}</p>
            <img class="productImage" src={eachVegitable.imageUrl}/>
            <p>{eachVegitable.priceInCents/100}</p>
            </div>
          ))}
      </div>
      </section>
    </>
  )
}

export default App;
