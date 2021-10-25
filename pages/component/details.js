import React from "react";
import Link from 'next/link'

const Details = () => {
    const people = [
        {v:'car',name:'amritesh'},
        {v:"bike",name:"ashu"},
        {v:"airplane",name:"ashwani"}
    ]
    return (
       <ul>
           Hello
           {people && people.map((item,i)=>{
           return <li> <Link key={i} href={`/component/${item.v}/${item.name}`}><a className="text-danger">Navigate to {item.name}'s {item.v}</a></Link></li> 
           })}
       </ul>
     );
}
 
export default Details;