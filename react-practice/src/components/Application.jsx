import React, { useEffect, useState } from "react";
import responseData from "../api";
import ImageComponent from "./ImageComponent";
import styled from 'styled-components';
import MainComponent from "./ListAndUpdate/MainComponent";

const ItemLayout = styled.div`
  padding-left: 25px;
`

const Application = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const dataReceived = await responseData();
      if(dataReceived){
        setData(dataReceived);
      }
      }catch(error){
        setError(error);
        console.log("error receiving data");
      }
    };
    fetchData();
  }, [data]);
console.log(data, "this is data");
  return (
    <div>
    <>
    <MainComponent />
    </>
    <div>
      {data && data.map((eachIteam, key) => (
        <ItemLayout>
          <ImageComponent {...eachIteam}/>
        </ItemLayout>
      ))}
    </div>
    </div>
  );
};

export default Application;
