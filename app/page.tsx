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
      <div>
        <h2>Welcome to your favorite weather app</h2>
      </div>
    )
  } else if(error !==""){
    content =(
      <div>
        <p>City not found</p>
        <p>Enter a valid city</p>
      </div>
    )
  } else{
    content = (
      <>
      <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data = {data} />
          <Week data = {data} />
      </div>
      <div>
        <Details />
      </div>
      </>
    )
  }
  return (
    <div className ="bg-cover bg-gradient-to-r from-blue-300 to-blue-500 h-screen">
      <header className="flex flex-col justify-between items-center p-12 md:flex-row">
        <Input handleSearch={handleSearch} setLocation={setLocation}  />
        <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">easy weather</h1>
      </header>
      {content}
    </div>
   )
}
 
export default Home