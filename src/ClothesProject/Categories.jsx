import React from 'react'
import '../ClothesProject/Main.css'

const Categories = ({category,filterItems}) => {
  return (
    <div className='btn-carrier'>{category.map((eachCategory,index)=>{
        return <button key={index} onClick={()=>{
            filterItems(eachCategory)
        }}>{eachCategory}</button>
    })}</div>
  )
}

export default Categories