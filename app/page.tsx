"use client"
import React, { useState } from "react"
import Input from "./components/Input"
import Current from "./components/Current"
import Week from "./components/Week"
import Details from "./components/Details"

const Home = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`

  const handleSearch = async(e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === "Enter"){
      e.preventDefault()
      try{
        const res = await fetch(url)
        if(!res.ok){
          throw new Error()
        }
        const data = await res.json()
        setData(data)
        setLocation("")
        setError("")
      } catch(error){
        setError("City not found")
        setData({})
      }
    }
  }
  let content
  if(Object.keys(data).length === 0 && error === ''){
    content = (
      <div className="text-white text-center h-screen mt-14 px-12 sm:px-0">
        <h2 className="text-2xl font-bold">Welcome to your favorite weather app</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    )
  } else if(error !==""){
    content =(
      <div className="text-white text-center h-screen mt-14 px-12 sm:px-0">
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
    <div className ="bg-gradient-to-r from-blue-300 to-blue-500 h-fit lg:h-screen">
      <header className="flex flex-col justify-between items-center px-12 pt-8 md:flex-row">
        <Input handleSearch={handleSearch} setLocation={setLocation}  />
        <h1 className="mb-8 md:mb-0 order-1 text-white text-xl italic font-bold">easy weather</h1>
      </header>
      {content}
    </div>
   )
}
 
export default Home