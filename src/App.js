// App.js
import React from 'react';
import { BrowserRouter as  Route, Routes,  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import Add from './Add';
import Add_1 from './Add_1';
import Details_1 from './Details_1';

const App_1 = () => {
  return (
    <Provider store={store}>
     
        <Routes>
          <Route path="/add" element={Add_1} />
          <Route path="/details" element={Details_1} />
        </Routes>
    
    </Provider>
  );
};

export default App_1;
