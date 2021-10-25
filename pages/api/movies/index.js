import {movies} from '../../../movie.json'

export default (req, res) => {
    
    res.status(200).json(movies)
  }