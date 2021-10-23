export async function getStaticPaths(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
   
    const paths=data.map((item)=>{
        return {
           params:{
               id:item.id.toString()
           }
        }
    })
    return {
        paths,
        fallback:false
    }
}
export async function getStaticProps(paths){
    let id=paths.params.id
    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const data=await res.json()

    return {
        props:{
          data
        }
    }
}

const  Person= ({data}) => {
    return ( <div className="container">
       <div className="row">
          <div className="col-4 offset-4 card px-0">
           <div className="card-header bg-primary text-light font-weight-bold">{data.name}</div>
           <div className="card-body">
             <p className="card-text">
              <span><b>Nick Name :</b>{data.username}</span><br/>
              <span><b>Email Id  :</b>{data.email}</span><br/>
             </p>
           </div>
          </div>
       </div>
    </div> );
}
 
export default Person ;