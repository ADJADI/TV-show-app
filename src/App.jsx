import { useState, useEffect } from "react"
import { fetchData } from "./utils/fetchData"
import Card from "./components/reusable/Card"

function App() {
  const [tvShowList, setTvShowList] = useState([])
  const endPoint = "/tv/popular"
  const fetchPopularTvShow = async () => {
    setTvShowList(await fetchData(endPoint))
  };

  useEffect(() => {
    fetchPopularTvShow()
  }, [])


  console.log(tvShowList)
  return (
    <div><Card img="http://plop.fr" title="holla" /></div>
  )
}

export default App
