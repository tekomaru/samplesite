import { useState } from "react"
import { useEffect } from "react"

export default function loading(){
const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000)
  }, [])
    
  {isLoading ?
    <div className="animate__animated animate__fadeInLeft">
      {'loading'}
      </div>
    : <div className="animate__animated animate__zoomOutUp">
      {'loading'}
    </div>
  }
}