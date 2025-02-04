import styled from 'styled-components';

const ImageStyling = styled.img`
  height: 250px;
  width: 250px;
  border: 1px solid black;
`;

const ImageComponent = (data) => {
  console.log(data, "img component");
  const {title, imageUrl, priceInCents} = data;
  return(
    <div>
      <p>{title}</p>
      <ImageStyling src={imageUrl} alt={title} />
      <p>price: ${priceInCents/100}</p>
    </div>
  )
}

export default ImageComponent;
