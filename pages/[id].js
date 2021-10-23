import {useRouter} from 'next/router'
export default function Post() {
  const router=useRouter()
  console.log(router)
  return (
   <div>
     <h1>Post page</h1>
     <button className="btn btn-primary" onClick={()=>{router.push('/')}}>Home Page</button>
   </div>
  )
}
