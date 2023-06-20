import React from 'react'
import template1 from '../../../images/template1.png'
import { useLocation }from 'react-router-dom';

function CreateHTemp() {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  

  // Access individual query parameters
  const age = queryParams.get('age');
  const occupation = queryParams.get('occupation');
  const title = queryParams.get('title');
  const name = queryParams.get('name');
  const study = queryParams.get('study');
  const dob = queryParams.get('dob');
  const rashi = queryParams.get('rashi');
  const birthPlace = queryParams.get('birthPlace');
  const religion = queryParams.get('religion');
  const gotra = queryParams.get('gotra');
  const height = queryParams.get('height');
  const bloodGroupInput = queryParams.get('bloodGroupInput');
  const job = queryParams.get('job');
  const salary = queryParams.get('salary');
  const addressLine1 = queryParams.get('addressLine1');
  const mob_no = queryParams.get('mob_no');


  return (
    <div>
    <p >BIO DATA</p>
  <div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Name:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{name}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Age:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{age}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Occupation:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{occupation}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Title:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{title}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Study:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{study}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  DOB:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{dob}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Rashi:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{rashi}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Name:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{name}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Birth Place:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{birthPlace}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Religion:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{religion}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Gotra:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{gotra}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Height:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{height}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Bood Group:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{bloodGroupInput}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Job:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{job}</label>
</div>
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Salary:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{salary}</label>
</div> <div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Mobile no. :   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{mob_no}</label>
</div> 
<div className='box'>
  <label style ={{ color:'black'}} className='title' htmlFor='name'>
  Address:   
 </label>
  <label style ={{ color:'black'}} htmlFor='name'>{addressLine1}</label>
</div>

</div>
  )
}

export default CreateHTemp