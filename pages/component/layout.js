import Nav from '../Nav/nav'


export default function Layout({children}){
    return (
        <div>
            <Nav/>
          {children}
         
        </div>
    )
}