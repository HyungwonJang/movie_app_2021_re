import axios from 'axios';
import React from 'react';
import Movie from './Movie'

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json")
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    this.getMovies()
  }
  render() {
    const {isLoading, movies} = this.state;
    return (<section className="container">{isLoading ?(
    <div className="loader">
      <span className="loader_text">Loading....</span>
    </div>): (<div className="movies"> {movies.map(movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        poster={movie.medium_cover_image}
        summary={movie.summary}
        genres={movie.genres} />
    ))}</div>)}</section>);
  }
}

export default App;
