import SmoothieCard from "../components/SmoothieCard"
import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

// Components

const Home = () => {

  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select()

      if (error) {
        setFetchError('Could not fetch smoothies')
        setSmoothies(null)
        console.log(error)
      }

      if (data != null) {
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothies()
  }, [])

  return (
    <div className="page home">
      {fetchError && (<p> {fetchError} </p>)}
      {smoothies && (
        <div className="smoothies">
          {/* Orden by buttons */}
          <div className="smoothie-grid">
          {smoothies.map(smoothie => 
            <SmoothieCard key={smoothie.id} smoothie={smoothie} />
          )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home