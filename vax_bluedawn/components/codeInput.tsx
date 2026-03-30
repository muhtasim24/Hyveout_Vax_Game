'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

type Props = {
  onCorrectCode: () => void;
}

export default function CodeInput( {onCorrectCode} : Props) {
  const [code, setCode] = useState("")
  const [error, setError] = useState(false);
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase().slice(0,4)
    setCode(value)

    if (value.length === 4) {
      (document.getElementById("code-input") as HTMLInputElement)?.blur();
      if (value === "abcd") {
        onCorrectCode();
      } else {
        setError(true);

        setTimeout( () => {
          setError(false);
          setCode("")
        }, 600)
      }
    }
  }
  
  

  return (
    <div
      className= {`flex justify-center ${error ? "shake":""}`}
      onClick={() => document.getElementById("code-input")?.focus()}
    >
      <input
        id="code-input"
        value={code}
        onChange={handleChange}
        maxLength={4}
        placeholder = "CLICK HERE"
        autoFocus
        className="opacity-0 absolute"
      />

      <div className="flex gap-6 text-6xl md:text-7xl">
        {[0,1,2,3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <span className={`h-[1em] flex items-center justify-center font-bold ${error ? "text-red-500" : "text-white"}`}>
              {code[i] || " "}
            </span>
            
            {/* DASH */}
            <span className="text-blue-700 text-6xl font-bold [text-shadow:_2px_0_0_white,_-2px_0_0_white,_0_2px_0_white,_0_-2px_0_white] [-webkit-text-stroke:3px] scale-y-140 md:text-7xl">—</span>
          </div>
        ))}
      </div>
    </div>
  )
}