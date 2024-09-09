import React, {useState, useEffect} from 'react'
import './App.css'
import styled from 'styled-components';

const NewLayout = styled.div`
  height: 300px;
  width: 150px;
`

const ArticlesList = () => {

  const [pageData, updatePageData] = useState([]);
  const [nextPageUrl, updateNextPageUrl] = useState('');
  //https://rickandmortyapi.com/api/character

  console.log(pageData, nextPageUrl,"state");

  // const updateNextPageData = () => {

  // }

// call this function on scroll event listner

  const getData = async (url) => {
    console.log("i am here");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    updateNextPageUrl(json.info.next);
    updatePageData(json.results);
  }

  const updateNextPageData = () => {
    getData(nextPageUrl);
  }

  useEffect(() => {
    getData('https://rickandmortyapi.com/api/character');
    console.log('i am here');
  },[]);

  return (
    <div className="app">
      {pageData.map((eachItem, index) =>
      (
      <>
      <div className="header">
       {eachItem.name}
      </div>
      <div className="header">
      {eachItem.name}
      </div>
      <img src={eachItem.image} />
      </>
      ))}
    </div>
  )
}

export default ArticlesList
