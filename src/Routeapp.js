// import logo from './logo.svg';
import React, {  } from 'react';
import './App.css';
import 'antd/dist/reset.css';
import {  Menu } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CheckCircleFilled, CheckSquareOutlined,  DashboardOutlined,  KeyOutlined,  OrderedListOutlined,  PoweroffOutlined,  RestOutlined,  SettingFilled,  SolutionOutlined, StarFilled} from "@ant-design/icons";
import MainPage from './components/mainpage';


// import StudentForm from './components/addpage';
// import List from './components/listpage';
import LeaveTable from './components/Leave';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart,faEnvelope, faGraduationCap,  faUserEdit, faEdit, faAdd, faFileEdit, faDeleteLeft, faSave,  faUserGraduate, faMale, faCheckDouble, faHandPointDown, faFemale, faCloudUpload, faUpload}from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon  } from '@fortawesome/react-fontawesome';


import AttendanceTable from './components/Present';
// import MergeData from './Marks/Term1/mergeapp';
// import InputTable from './Marks/Term2';
import Term2 from './Marks/Term2';
import App from './components/app';
import Term1 from './Marks/Term1';
import Term3 from './Marks/Term3';
// import Addform from './Add_1';
import Display from './Details_1';
import StudentForm from './components/addpage';
import List from './components/listpage';





// import { Footer } from 'antd/es/layout/layout';

library.add(faHeart,faEnvelope, faGraduationCap,
   faUserGraduate,faMale, faCheckDouble,faUpload,faCloudUpload ,faHandPointDown,faFemale , faEdit, faSave , faAdd, faFileEdit, faUserEdit, faDeleteLeft );
// feather.replace();

function App1() {
 
  return ( 
    <div style={{display: "flex", flexDirection:"column", flex: 1,height:'100vh'}}>
      <Header />
      <div style={{display: "flex", flexDirection:"row", flex: 1}}>
        <Sidemenu />
        <Content />
      </div>
      {/* <Foooter /> */}
    </div>
  );
}

function Header(){
  return <div className='head' > 
 <span id='s-1'> <FontAwesomeIcon icon='graduation-cap' /> </span>
 <span id='s-2'>S</span>
 <span id='s-3'>T</span> 
 <span id='s-4'>U</span> 
 <span id='s-5'>D</span> 
 <span id='s-6'>E</span> 
 <span id='s-7'>N</span> 
 <span id='s-8'>T</span> 
 <span id='s-9'>_HUB</span>   </div>


}

// function Foooter(){
//   return <div className='head'>Welcome to our page2222</div>

// }


function Sidemenu(){
  const navigate = useNavigate()

return( 
<Menu 
 onClick={({key})=>{
     if(key === "signout"){
       // no here in ok
     }else{
        navigate(key);
     }
 }}
defaultSelectedKeys={[window.location.pathname]}

items={[

{ label:"Dashboard",key:"/", icon:<DashboardOutlined /> , className:'l1'},

{ label:"Student List",key:"/student list", icon:<SolutionOutlined />,
children:[{label:'Add',key:"/add", icon:<KeyOutlined />},{label:'List',key:"/list",icon:<OrderedListOutlined />}] },

{ label:"Attendance",key:"/attendance", icon:<CheckCircleFilled />, 
children:[{label:'Present',key:'/present',icon:<CheckSquareOutlined /> },
{label:'Leave', key:'/leave',icon:<RestOutlined />}] },

{ label:"Marks",key:"/marks", icon:<StarFilled />,
children:[{label:'Mid-Term I', key:'/midterm1',  },
{label:'Mid-Term II', key:'/midterm2',  },
{label:'Mid-Term III', key:'/midterm3',  }]
},

{ label:"Settings",key:"/settings", icon:<SettingFilled /> },

{ label:"Signout ",key:"signout", icon:<PoweroffOutlined /> , danger: true}

]} className='menuno1' id='menu-container1' ></Menu>


);
};

function Content(){
  return <div>
     <Routes>
       <Route path='/' element={<MainPage  />}></Route>
       {/* <Route path='/student list' element={<p>hello world</p>}></Route> */}
     
       <Route path='/add' element={<StudentForm /> }></Route>
       <Route path='/list' element={<List /> }  ></Route>
       {/* <Route path='/attendance' element={<div>Attendance</div>}></Route> */}
      
       <Route path='/present' element={<AttendanceTable />}></Route>
       <Route path='/leave' element={<LeaveTable />}></Route>
       
       {/* <Route path='/marks' element={<div>Marks</div>}></Route> */}

       <Route path='/midterm1' element={<Term1 />}></Route>
       <Route path='/midterm2' element={<Term2 />}></Route>
       <Route path='/midterm3' element={<Term3 />}></Route>



       <Route path='/settings' element={<div>Settings</div>}></Route>
       {/* <Route path='/' element={<div>Home</div>}></Route> */}
     </Routes>
  </div>;



};


export { App1 };





// export default function App() {
//   return (
//     <React.StrictMode>
//       <Provider store={store}>
//         <Router>
//           <Routes>
//             <Route path='/' element={<App1 />} />
//             <Route path='/add' element={<Add />} />
//             <Route path='/list' element={<Details />} />
//             {/* Other routes go here */}
//           </Routes>
//         </Router>
//       </Provider>
//     </React.StrictMode>
//   );
// }

// With this setup, when you navigate to /add, it should render the Add.js component, and when you navigate to /list, it should render the Details.js component. The content should display correctly, and you should be able to add student details using the Add.js component and see them listed in a table with edit and delete options using the Details.js component.
