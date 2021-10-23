import Link from 'next/link'

export default function Nav(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  bg-success p-2">
        <span className="navbar-brand  ml-5"style={{ color: "white" ,fontWeight:"300px"}} >Infy Movies</span>
        <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-2"><Link href="/"><a className="nav-link font-weight-bold">Home</a></Link></li>
          <li className="nav-item mr-2"><Link href="/component/hello"><a className="nav-link font-weight-bold">Hello</a></Link></li>
          <li className="nav-item mr-2"><Link href="/component/Customer/" ><a className="nav-link font-weight-bold">Offer</a></Link></li>
        </ul>
        </nav>
        
    )
}