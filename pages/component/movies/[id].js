import axios from "axios"
import {useRouter} from 'next/router'
import { useEffect, useState } from "react"
import Image from 'next/image'
// export async function getStaticPaths(){

//     const paths=[]
//     await axios.get('/api/movies')
//      .then((response)=>{
//         paths= response.data.movies.map((item)=>{
//         return {
//            params:{
//                id:item.id
//            }
//         }
//     })
//      }) 
//      console.log(paths)
//     return {
//         paths,
//         fallback:false
//     }
// }

const Person= () => {
    const router=useRouter()
    const [data,setData]=useState([])
    console.log(router.query.userName)
    useEffect(()=>{
        axios.get('/api/movies/'+router.query.id) 
        .then((response)=>{
           setData(response.data)
           
        })
    },[])

    console.log(data)
    return ( <div className="container">
       {data && data.map((item,i)=>{
         return (
            <div className="row" key={i}>
            <div className="col-4 offset-4 card px-0">
             <Image className="card-img-top" height={180} width={100} src={item.imageSrc}></Image>
             <div className="card-body">
                 <h1>{item.name}</h1>
                 <h2>{item.language}</h2>
                 <h3>{item.dimension}</h3>
               
                  </div>
            </div>
         </div>
         )
       })}
    </div> );
}
 
export default Person ;