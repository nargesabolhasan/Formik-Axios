import axios from "axios";
import React from 'react'

const Axios = () => {
    useEffect(() =>{
        axios.get('./data.json').then(res =>{
            console.log(res.profile)}).catch(err =>alert(err.response.statusText))
    })
  return (
    <div>Axios</div>
  )
}

export default Axios