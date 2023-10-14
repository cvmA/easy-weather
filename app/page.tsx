"use client"
import React, { useState } from "react"
import Input from "./components/Input"
import Current from "./components/Current"
import Week from "./components/Week"
import Details from "./components/Details"
import getWeather from "./services/get-weather"

const Home = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")
  
  const handleSearch = async(e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === "Enter"){
      e.preventDefault()
      const result = await getWeather(location)

      if("error" in result){
        setError(result.error)
        return
      }
      setData(result)
    }
  }

  let content
  if(Object.keys(data).length === 0 && error === ''){
    content = (
      <div className="text-white text-center mt-14 px-12 sm:px-0">
        <h2 className="text-2xl font-bold">Welcome to your favorite weather app</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    )
  } else if(error !==""){
    content = (
      <div className="text-white text-center mt-14 px-12 sm:px-0">
        <p className="text-2xl font-bold">City not found</p>
        <p className="text-xl">Enter a valid city</p>
      </div>
    )
  } else{
    content = (
      <>
      <div className="flex flex-col p-12 items-center justify-between">
          <Current data = {data} />
          <Details data = {data} />
          <Week data = {data} />
      </div>
      </>
    )
  }
  return (
    <div className ="bg-gradient-to-r from-blue-300 to-blue-500 h-screen overflow-auto">
      <header className="flex flex-col justify-between items-center px-12 pt-8 md:flex-row">
        <Input handleSearch={handleSearch} setLocation={setLocation}  />
        <h1 className="mb-8 md:mb-0 order-1 text-white text-xl italic font-bold">easy weather</h1>
      </header>
      {content}
    </div>
   )
}
 
export default Home