'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CodeInput() {
  const [code, setCode] = useState("")
  const [error, setError] = useState(false);
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase().slice(0,4)
    setCode(value)

    if (value.length === 4) {
      if (value === "abcd") {
        router.push("/tracks")
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

      <div className="flex gap-6 text-4xl">
        {[0,1,2,3].map((i) => (
          <div key={i} className="flex flex-col items-center">
            <span className={`h-[1em] flex items-center justify-center ${error ? "text-red-500" : "text-white"}`}>
              {code[i] || " "}
            </span>
            
            {/* DASH */}
            <span className="text-blue-700 text-6xl font-bold [text-shadow:_1px_0_0_white,_-1px_0_0_white,_0_1px_0_white,_0_-1px_0_white]">—</span>
          </div>
        ))}
      </div>
    </div>
  )
}