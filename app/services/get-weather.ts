export default async function getWeather(location:string){
    try{
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`)
        if(!res.ok){
          throw new Error()
        }
        const data = await res.json()
        return data
        //setData(data)
        //setError("")
      } catch(error){
        return{error:"City not found"}
        //setError("City not found")
       // setData({})
      }
}