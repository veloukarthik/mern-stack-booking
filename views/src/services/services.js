const token = localStorage.getItem("token");

const API_URL = process.env.REACT_APP_API_URL;

export const services = {

    post(url){
        

        let data = {

        }
        return fetch(API_URL+url,{
          method:'post',
          headers:{
            'authorization':'Bearer '+token
          },
          body: JSON.stringify(data)
        })
    }
}