import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { Ars } from 'ars-arsenal'
export const Album = ({title,options})=>{
    
   
        return(
            <div className="example">
            <div className="example-content">
              <h2 className="type-subheading">{title}</h2>
              <Ars {...options} />
            </div>
          </div>
        )
    
}
