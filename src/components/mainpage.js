// import { ProfileOutlined } from '@ant-design/icons';
// import Icon from '@ant-design/icons/lib/components/AntdIcon';
// import Icon from '@ant-design/icons/lib/components/Icon';
// import {Icon} from 'antd';
import React from 'react'
import './mainpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ProfileFilled, ProfileOutlined } from '@ant-design/icons';

const MainPage = () => {
  return ( <>
    <div id='maincontainer' className='Maincontainer'>
      {/* 1stset */}
       <section className='set1' style={{backgroundColor:"greenyellow",border:"2px solid white"}}>
        <div>
            <h2>871</h2>
            <h5>Total students</h5>
        </div>
        <div className='icon-set'><FontAwesomeIcon icon='user-graduate' /></div>
       </section>
       {/* 2nd sec */}
       <section className='set2'  style={{backgroundColor:"red",border:"2px solid white"}}> <div>
            <h2>450</h2>
            <h5>Male Students</h5>
        </div>
        <div className='icon-set'><FontAwesomeIcon icon='male' /> </div>
        </section>
       {/* 3rd sec */}
       <section className='set3 '  style={{backgroundColor:"blue",border:"2px solid white"}}> <div>
            <h2>820</h2>
            <h5> Present Today</h5>
        </div>
        <div className='icon-set'><FontAwesomeIcon icon='check-double' /></div>
        </section>
      {/* 4th sec */}
       <section className='set4'  style={{backgroundColor:"purple",border:"2px solid white"}}> <div>
            <h2>604</h2>
            <h5>Were Placed</h5>
        </div>
        <div className='icon-set'><FontAwesomeIcon icon='upload' /> </div>
        </section>
       {/* 5th sec  */}
       <section className='set5'  style={{backgroundColor:"goldenrod",border:"2px solid white"}}> <div>
            <h2>421</h2>
            <h5>Female students</h5>
        </div>
        <div className='icon-set'><FontAwesomeIcon icon='female' /> </div>
        </section>
       {/* 6th sec  */}
       <section className='set6'  style={{backgroundColor:"darkgreen",border:"2px solid white"}}> <div>
            <h2>51</h2>
            <h5>Sick Leave</h5>
        </div>
        <div className='icon-set'><FontAwesomeIcon icon='hand-point-down' /> </div>
        </section>
    </div>



    <div className='quote-contain'>
      <h4 className='quotation '> 
        "Education is <br></br>
         not the filling <br>
         </br> of a pail,<br></br> but the lighting
         <br></br>  of a fire"
         </h4>
    </div>
  </>)
}

export default MainPage;