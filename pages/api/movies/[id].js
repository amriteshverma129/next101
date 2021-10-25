import {movies} from '../../../movie.json'

export default (req, res) => {
    const id=req.query.id;
    const data=movies.filter((item)=>{
       if(item.id===parseInt(id))
        return true;
    })
    res.status(200).json(data)
  }