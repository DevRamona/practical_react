import {useState, useEffect} from "react"
import useFetchData from "./Gate"



export default function UseCustom() {
    const {data, error, loading} = useFetchData(URL)
    if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => (
        <p>{ele["title"]}</p>
      ))}
    </div>
  );
 
}