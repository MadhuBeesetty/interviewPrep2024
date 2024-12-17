import {dummyData} from './response';

export const dataApi = () => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dummyData);
  }, 1000);
})
};
