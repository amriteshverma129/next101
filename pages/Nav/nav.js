import Link from 'next/link'

export default function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  bg-success p-2">
        <span className="navbar-brand  ml-5" style={{ color: "white" ,fontWeight:"300px"}} >Infy Movies</span>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-2"><Link href="/"><a className="nav-link font-weight-bold">Home</a></Link></li>
          <li className="nav-item mr-2"><Link href="/component/movies"><a className="nav-link font-weight-bold">Movies</a></Link></li>
          <li className="nav-item mr-2"><Link href="/component/Customer/" ><a className="nav-link font-weight-bold">Offer</a></Link></li>
          <li className="nav-item mr-2"><Link href="/component/details/" ><a className="nav-link font-weight-bold">Details</a></Link></li>
        </ul>
        </nav>
        
    )
}