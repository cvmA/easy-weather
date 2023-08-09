export const getCurrentDate = () =>{
    const currentDate = new Date().toLocaleDateString
    ('en-US',{
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    })
    return currentDate
} 