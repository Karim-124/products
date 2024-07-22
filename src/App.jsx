import axios from "axios"
import Card from "./componet/Card"
import NavbarApp from "./componet/NavbarApp"
import { useEffect, useState } from "react"
import PaginitionCompoent from "./componet/PaginitionCompoent";


function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount,setPageCount]=useState(0);
  
  const getAllMovies = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=91df506cd7b6d15b42327b4ab8112795&language=ar', {
      
      });
      setMovies(response.data.results);
      setPageCount(response.data.total_pages)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const getPage = async (page) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=91df506cd7b6d15b42327b4ab8112795&language=ar&page=${page}`, {
      
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getAllMovies();
    console.log(movies);
  }, []);


  const search = async (word) => {
    try{
      if(word==""){
        getAllMovies()
      }
      else{
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=91df506cd7b6d15b42327b4ab8112795&query=${word}&language=ar`, {
      
      });
      setMovies(response.data.results)
      setPageCount(response.data.total_pages)
      }
    
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  

  }

  return (
    <div className=''>
      <NavbarApp search={search} />
      <div className="p-3 container grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.length === 0 ? (
          <h2>......لا توجد افلام</h2>
        ) : (
          movies.map((mov) => (
            <Card key={mov.id} mov={mov} />
          ))
        )}
        <div className=" flex justify-center items-center">
        <PaginitionCompoent getPage={getPage} pageCount={pageCount}/>

        </div>
      </div>
    </div>
  )
}

export default App
