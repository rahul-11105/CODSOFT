import React from 'react'
import "./category.css"

const Category = () => {
  return (
    <>
        <div className='category'>
            <div className='container'>
                <div className='search'>
                    <input className='containerInp' type="text" placeholder='search keyword' />
                    <a className='findJobsBtn' href="#">Find Jobs</a>
                </div>
                <div className='populerSearch'>
                    <span className='populerSearchHeading'>
                        Populer Search :
                    </span>
                    <a className="populerSearchopt" href="#">Web development</a>
                    <a className="populerSearchopt" href="#">Marketing</a>
                    <a className="populerSearchopt" href="#">development</a>
                    <a className="populerSearchopt" href="#">Teaching</a>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Category
