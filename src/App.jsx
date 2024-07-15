import axios from "axios"
import Card from "./componet/Card"
import NavbarApp from "./componet/NavbarApp"
import { useEffect, useState } from "react"


function App() {
  const [movies, setMovies] = useState([]);
  const getAllMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWRmNTA2Y2Q3YjZkMTViNDIzMjdiNGFiODExMjc5NSIsIm5iZiI6MTcyMDk2OTc5OC4xMjk1NTksInN1YiI6IjY2OTNlN2RiOTdlM2JmYjE5MGE3YmRiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W_yOrg55ikLl3d1tEwGHCGWYhHeyDihvuezKj9z0aLk',
          'accept': 'application/json'
        }
      });
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAllMovies();
    console.log(movies);
  }, []);

  return (
    <div className=''>
      <NavbarApp />

      <div className="p-3 container grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((mov) => (
          <Card key={mov.id} mov={mov} />
        ))}
      </div>



    </div>
  )
}

export default App
