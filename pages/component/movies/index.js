import Image from 'next/image'
import style from '../../../styles/Home.module.css'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

export default function Hello(){
   const [dataArray,setDataArray]=useState([])
   const [index ,setIndex]=useState(-1);
   let  router =useRouter()

    useEffect(()=>{
    axios.get('/api/movies')
      .then((response)=>{
        setDataArray(response.data)
      })
    },[])

    return (
        <div className="container-fluid">
            <div className="row d-flex">
            {dataArray && dataArray.map((item )=>{
              return (<div key={item.id} className="col-3 card m-2 px-0">
                  <Image src={item.imageSrc} className="card-img-top " height={180} width={100}></Image>
                 <div className="card-body">
                 <h1>{item.name}</h1>
                 <h2>{item.language}</h2>
                 <h3>{item.dimension}</h3>
                 <button className="btn btn-primary btn-block btn-lg" onClick={()=>{router.push('/component/movies/'+item.id+'?userName=amritesh')}}>Book Ticket</button>
                
                  </div>
            </div>)
       })}
            </div>

        <h1>Hello World</h1>
        <Image src="/image/movieBackgorund.webp" height={300} width={300}/>
         <style jsx>{`
         h1{
               
            }
            `}   
         </style>
        <h1 style={{color:"red"}}>Server side rendering</h1>
        <h3 className={style.green}>Styling with the help of home.module.css</h3>
       
      
        </div>
        
    )
}