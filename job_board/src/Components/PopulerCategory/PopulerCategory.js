import React from 'react'
import "./populercategory.css";

const PopulerCategory = () => {
  return (
    <>
    <div className='populerCategory'>
      <div className='populerCategoryHeading'>
        <h3>Populer Categories :</h3>
      </div>
      <div className='populerCategoriesInfo'>
        <div className='singleCategory'>
                <h4><p>Design & Creative</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><p>Marketinge</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><p>Telemarketing</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><p>Software & Web</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><p>Administration</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><p>Teaching & Education</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><p >Engineering</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><p>Garments / Textile</p></h4>
                <p><span>50</span>Available position</p>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default PopulerCategory
