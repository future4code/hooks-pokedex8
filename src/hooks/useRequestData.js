import axios from "axios"
import { useState, useEffect } from "react"


const useRequestData = (url) => {
    const [data, setData] = useState({})
    useEffect(()=>{
      axios
      .get(url)
      .then((res)=>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
        console.log("Ocorreu um erro")
      })

    },[url])
    return data
  }

  export default useRequestData