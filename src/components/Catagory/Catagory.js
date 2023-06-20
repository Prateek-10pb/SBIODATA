import React from 'react';

import { Link } from 'react-router-dom';

import hindu from '../../images/hindu.jpg';
import Muslim from '../../images/muslim.jpg'
import Jain from '../../images/jain.jpg';
import Christain from '../../images/christian.jpg';


const Catagory = () => {

    const Dharm =[
        {
            name:'Hindu',
            photos:hindu,
            link:'/hinduReg'
        },

        {
            name:'Muslim',
            photos:Muslim,
            link:'/muslim'
        },
        
        {
            name:'Jain',
            photos:Jain,
            link:'/jain'
        },
        
        {
            name:'Christain',
            photos:Christain,
            link:'/christain'
        },
       
    ]

    const DharmCard =({name,photos,link})=>{
        return(
            <div className='DharmCard'>
                <Link to={link} style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                <img src={photos} alt="" srcset="" className='photo-cat' />
                <p> {name}</p>
                </Link>
                
            </div>

        );

    }

  return (
    <>
    <div className='catagory-banner'>
     <div className='paraCatogry'>
        <p style={{fontSize:'30px', color:"black"}}>Search Marriage Biodata Format in Marathi by Religion</p>

        <p style={{fontSize:'24px', color:"black"}}>Want to make a marriage biodata in Marathi? Then you are in the right place. Make a beautiful biodata for marriage by choosing your religion to make biodata for marriage in Marathi.</p> </div>
    </div>


    <div className='outPutCards'>
        {Dharm.map (mycardsx =>(
           <DharmCard key={mycardsx.name} {...mycardsx} />
        ))}
    </div>
    
    
    
    
    </>
  )
}

export default Catagory