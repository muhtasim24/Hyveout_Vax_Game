'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CodeInput() {
  const [code, setCode] = useState("")
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase().slice(0,4)
    setCode(value)

    if (value === "abcd") {
      router.push("/tracks")
    }
  }

  return (
    <div
      className="flex justify-center"
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
            <span className="h-[1em] flex items-center justify-center">{code[i] || " "}</span>
            <span>—</span>
          </div>
        ))}
      </div>
    </div>
  )
}