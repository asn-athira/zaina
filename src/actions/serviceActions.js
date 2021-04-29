//const baseURL = "http://localhost:3001"
const baseURL = "https://zaina-api.herokuapp.com"
 
const setService = (payload) => ({ type: "SET_SERVICE", payload})

// Methods

export const fetchService = () => dispatch => {
  
        fetch(`${baseURL}/services`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }       
     
       })

    .then(res => res.json())
    .then(res => {
     
        dispatch(setService(res.data))
      
    })
   .then(data => {
       
    })
    
}
