import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from '../Context/context';
import error from "../assets/404.png";
import nofile from "../assets/file.png"

const url=`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

console.log(url);
export const Gallery = () => {

const {search}=useGlobalContext();


  const response=useQuery({
    queryKey:["images",search],
    queryFn:async()=>{
      const result=await axios.get(`${url}&query=${search}`)
      return result.data;
    }
  })



 
  if(response.isLoading){
    return(<section className="Loading"></section>)
  }
  if(response.isError){
    return(
      <section className="Error">
      <img src={error} />
      </section>
    )
  }

  const results=response.data.results;
  if(results<1){
    return <section className="nomatch">
    <div className="nofound">
    <img src={nofile} />
<h2>No such result is Found</h2>
</div>

    </section>
  }
  return (
    <section className="image-container">
    {results.map((item)=>{
      const url=item?.urls?.regular;
     return(
        <img src={url}  alt="noimg" key={item.id} className="img" />
      )
    })}
    </section>
  )
}
