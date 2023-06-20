import React from 'react';
import jainPic from '../../images/jainPic.jpg';

import CreateJTemp from './CreateJTemp/CreateJTemp';

const Jain = () => {
  return (
    <>
  <div className='JainBanner'>

    </div>

    <div className='JainMainDiv'>
    <div className='JainPicDiv'>
            <img src={jainPic} className='proflileJain' />
        </div>
        <div className='JainPara'>
            <h4>Jain Marriage Biodata Format in Marathi</h4>
            <p className='myStleLi'>
            Are you a Jain and want to create a marriage biodata in Marathi? Then you are in the right place. In just 5 minutes, you can create Jain Marriage Biodata Format in Marathi and download it in Image and PDF format.
In this biodata format, all information in Jain biodata is in Marathi. This biodata is fully customizable, you can add only the information that you want to add. if you leave any information blank it will not appear in the biodata.
At the top of the Jain biodata is the photo icon of Jain religion and below it || Jai Jinendra || It is written like this.
Below you are given many Marathi Jain marriage biodata formats, from which you can make biodata in any design you like.
If your religion is different, click on the button below to browse Marathi marriage biodata by religion.



.
     
            </p>
        </div>
    </div>
    
    <h3>Other Religion</h3>
    <div className="templatex" style={{ margin: '50px', gap: '50px', display: 'flex', flexWrap: 'wrap' }}>
  <div className="template" style={{ width: 'calc(50% - 50px)' }}>
    <CreateJTemp />
  </div>
</div>

    <div className='stepPara'>
        <h2>Steps to create Jain Marriage Biodata Format in Marathi</h2>

        <p className='myStleLi'>
<li>Step 1: Choose the Jain Marraige bio data design that you like. </li>
<li>Step 2: Click on customize button. ,</li>
<li>Step 3: After clicking on customize button you will be redirected to the create biodata page. </li>
<li>Step 4: Here, you need to fill in the information that you like to add to the biodata </li>
<li>Step 5: After filling in details, click on create biodata button. </li>
<li>Step 6: Congratulation, on your biodata successfully created. You are on the biodata preview page. here you can change the biodata format as well as edit details that you want  to change. </li>
<li>Step 7: To download biodata in image and pdf format you need to fill email and mobile number and click on the download biodata button and follow further steps. </li>
<li>Step 8: After this, you are on the download biodata page to download the image click on the download PNG button, and to download PDF click on the download PDF button.</li> 
</p>
</div>
    
    
    </>
  )
}

export default Jain