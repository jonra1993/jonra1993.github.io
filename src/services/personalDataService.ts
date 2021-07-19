import responseCamelizerAxios from 'src/lib/axios';

export const getUserData = () => new Promise((resolve, reject) => {
  responseCamelizerAxios.get('/api/resume')
    .then((response) => {
      if (response.status === 200) {
        resolve(response.data.resume);
      } else {
        // console.log(response.data)
        reject(response.data.error);
      }
    })
    .catch((error) => {
      console.log(error.response.data)
      reject(error);
    });
});
