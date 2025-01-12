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
                <h4><a href="#">Design & Creative</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><a href="#">Marketinge</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><a href="#">Telemarketing</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><a href="#">Software & Web</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><a href="#">Administration</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><a href="#">Teaching & Education</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><a href="#">Engineering</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        <div className='singleCategory'>
                <h4><a href="#">Garments / Textile</a></h4>
                <p><span>50</span>Available position</p>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default PopulerCategory
