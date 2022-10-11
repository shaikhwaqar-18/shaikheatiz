import React from 'react'

function Midcontent2() {
  return (
    <>
  
   
        <div data-aos="zoom-in" className="container mid_sec_container">
        <span className="restro_img_container" >
            <img src="./assets/restaurant.png" alt="" width={"100px"}  />
        </span>
        <div className="restro_content1">
        <h3 className="restro_h3" >advanced table booking</h3>
        <p style={{width: "200px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="restro_content2">
        <h3 className="restro_sec_h3" >Food for Free 24/7</h3>
        <p className="restro_p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="restro_dish_container">
        <span className="restro_dish_img" >
            <img src="./assets/dish2.png" alt="dish2" width={"100px"}  />
        </span>
        </div>


        
        <div className="restro_bike_container">
        <span className="restro_bike_img" >
            <img className="bike_img"  src="./assets/motorbike.png" alt="dish2" width={"150px"}  />
        </span>
        </div>
        <div className="restro_content">
        <h3 className="restro_third_h3" >free home delivery at your door steps</h3>
        <p className="bike_p" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    </div>
    </>

  )
}

export default Midcontent2