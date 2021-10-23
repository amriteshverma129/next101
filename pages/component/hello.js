
import Image from 'next/image'
import style from '../../styles/Home.module.css'

export default function Hello(){
    return (
        <div>
        <h1>Hello World</h1>
        <Image src="/image/movieBackgorund.webp" height={300} width={300}/>
         <style jsx>{`
         h1{
                background-color:yellow;
            }
            `}   
         </style>
        <h1 style={{color:"red"}}>Server side rendering</h1>
        <h3 className={style.green}>Styling with the help of home.module.css</h3>
        </div>
        
    )
}