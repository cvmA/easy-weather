"use client"
import React, { useState } from "react"
import Input from "./components/Input"

const Home = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`

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
  return (
    <div className="bg-cover bg-gradient-to-r from-blue-300 to-blue-500 h-screen">
      <header className="flex flex-col justify-between items-center p-12 md:flex-row">
        <Input />
        <h1 className="mb-8 order-1 text-white py-2 px-4 rounded-xl italic font-bold">easy weather</h1>
      </header>
    </div>
   )
}
 
export default Home