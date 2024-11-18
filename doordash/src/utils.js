export const categorize = (data) => {
  const output = {
    vegitables: [],
    fruits: [],
  }

  for(var i = 0; i< data.length; i++){
    // for now we are considering only fruits and vegitable from given data
    if(data[i].category.name === "fruit"){
      // console.log("i am here");
      output.fruits.push(data[i]);
      // console.log(output, "fruits");
    }else{
      output.vegitables.push(data[i])
    }
  }
return output;
}
