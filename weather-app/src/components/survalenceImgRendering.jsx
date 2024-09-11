const data = {
  "preview": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/preview.png",
  "events": [
    {
      "title": "Person of Interest",
      "subtitle": "Filip Kaliszan",
      "site": "3rd Floor",
      "detail": "Elevator East Lobby",
      "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event1.png",
      "timestamp": 1612247209
    },
    {
      "title": "Motion",
      "subtitle": "People Detected",
      "site": "Outside",
      "detail": "Front Door",
      "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event2.png",
      "timestamp": 1612207950
    },
    {
      "title": "Crowd",
      "subtitle": "2 or more people",
      "site": "London",
      "detail": "Intersection",
      "image": "https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event3.png",
      "timestamp": 1612202420
    }
  ]
}

const IndividualLocation = ({individualData}) => {
  console.log(individualData, "child component");
  return(
    <>
    <div className="location-component-wrapper">
     <div>
     <img src ={individualData.image} />
     </div>
     <div className="location-component-layout">
        <div>
        <h2>{individualData.title}</h2>
        <p>{individualData.subtitle}</p>
        </div>
          <div>
          <p>{individualData.site} - {individualData.detail}</p>
          </div>
          <div>
          <p>{individualData.timestamp}</p>
          </div>
      </div>
      </div>
     </>
  )
}


const App = () => {

  const [imageData, useImageData] = React.useState(data.events);
  const [previewImage, updatePreviewImage] = React.useState(data.preview);

  console.log(imageData, previewImage, "state data");

  const updateNewPreviewImage = (index) => {
    let newPreviewImage = imageData[index].image;
    updatePreviewImage(newPreviewImage);
  }

   return(
     <>
     <div>
     <div className="preview-image-wrapper">
          <img className="preview-image" src ={previewImage} />
     </div>
     </div>
     <div></div>
     <div className="app">Hello from React component!</div>
     {imageData.map((eachdataRender, index) =>
     (<div onClick ={() =>updateNewPreviewImage(index)}>
       <IndividualLocation individualData={eachdataRender} />
       </div>)
     )}
     </>
)
};

ReactDOM.render(<App />, document.getElementById('app'));
