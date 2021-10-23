import Link from 'next/link'
export default function Customers(props){
    
    return (
        <div className="text-danger">
        <h1>offerride</h1>
       {props.data.map((item,index)=><Link href={"/component/Customer/"+item.id} key={item.id}>
          
          <h5 className="text-warning"> {item.id} :{item.name}</h5>
          </Link> )}
        </div>
        
    )
}

export async function getStaticProps(){
    
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
   
    return {
        props:{
          data
        }
    }
}