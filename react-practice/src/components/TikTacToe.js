import TikSmallBox from './TikSmallBox'

const initialGrid = [["","",""], ["","",""], ["","",""]];

const TikTacToe = () => {

  return (
    <div>
      {initialGrid.map((eachRow, key) =>(
        <div id={key} class="parent-box">{
          eachRow.map((eachCelll) => (
            <>
            <TikSmallBox data={eachCelll}/>
            </>
          ))
        }</div>
      ))}
    </div>
  );
}

export default TikTacToe;
