import {dummyData} from './response';

const responseData = async () => {
  try{
    const results = await new Promise((resolve, reject) => {
      if(dummyData){
          resolve(dummyData);
      }else{
        reject("no data found");
      }
    });
    return results;
  }catch(error){
        throw new Error("error fetching data");
  }
};

export default responseData;
