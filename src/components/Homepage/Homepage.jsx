import styles from './homepage.module.scss'
import Section from './Section/Section'
import { useEffect, useState } from 'react'


const Homepage = () => {
  
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTrendingMovies(response.results.slice(0,5))   
    })
  }, [])
  
  const [trendingSeries, setTrendingSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=986cb57c124ba1dd4bd40f4efe74ae25')
    .then(res => res.json())
    .then(response => { 
      setTrendingSeries(response.results.slice(0,5))   
    })
  }, [])

  return (
    <section className={styles.body}>

      <Section 
        title="Películas que son tendencia"
        items={trendingMovies}
      />

      <Section 
        title="Series que son tendencia"
        items={trendingSeries}
      />
    
    </section>
  );
}

export default Homepage;