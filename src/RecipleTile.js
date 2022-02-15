/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./RecipleTile.css"

export default function RecipleTile({recipe}) {
    return (
      // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div 
        className="recipleTile" 
        onClick={() => {
          window.open(recipe["recipe"]["shareAs"]);
        }} 
      >

        <img 
          className="recipeTile__img" 
          src={recipe["recipe"]["image"]} 
        />
        <p className="recipeTile__name">
          {recipe["recipe"]["label"]}
        </p>     
      </div>
      // )
    )
  }