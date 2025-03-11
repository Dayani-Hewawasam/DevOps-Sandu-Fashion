import React, { useEffect, useState } from 'react'
import'./NewCollection.css'
import { Item } from '../Item/Item'

export const NewCollection = () => {

  const [new_collection,setNew_Collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_Collection(data));
  },[])
  return (
    <div className='new-collection'>
        <h1>New lineup</h1>
        <h2>Get your order before it's too late</h2>
        <hr/>
    <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
        })}
    </div>
    </div>
  )
}
export default NewCollection