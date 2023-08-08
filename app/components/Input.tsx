"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";

interface InputProps{
    handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void
    setLocation: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ handleSearch, setLocation }) => {
    return ( 
        <form className="flex items-center w-full order-2 md:w-2/4 md:order-1">
            <input
             type="text"
             placeholder="Search City"
             className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
             onKeyDown={handleSearch}
             onChange={(e) => setLocation(e.target.value)}
            />
            <MagnifyingGlass color="white"/>
        </form>
     );
}
 
export default Input;