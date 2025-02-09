import React from 'react'
import Card1 from '../../components/Card1'

const data ={
  name:"Shoe",
  ImgUrl:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" , 
  price:90,
  description:"This is the latest shoe."
}
 



export default function Cards() {
  return (
   <>
   <section>
    <h2>This is the page of the card</h2>
    <div>
    <h2>Below are the card components</h2>
    </div>
    <Card1 data={data}/>
   </section>
   
   </>
  )
}
