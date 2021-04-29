//const baseURL = "http://localhost:3001"
const baseURL = "https://zaina-api.herokuapp.com"
 
const setOffer = (payload) => ({ type: "SET_OFFER", payload})

// Methods

export const fetchOffer = () => dispatch => {
  
        fetch(`${baseURL}/offers`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }       
     
       })

    .then(res => res.json())
    .then(res => {
     
        dispatch(setOffer(res.data))
      
    })
   .then(data => {
       
    })
    
}
