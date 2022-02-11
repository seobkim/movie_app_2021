import React from 'react';
//import Home from './routes/Home';
import "./App.css";
import {HashRouter, Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';

  function App() {
   return (
     //--------------------------------------------------------------------------------------------------
     // 210P 액션01 'react-router-dom' 설치시 최신 버전으로 설치되면서 JSX 구문 Route 태그의 사용법이 변경됨!
     // 책의 예제와 달리 Route 태그를 Routes 태그로 감싸줘야함
     // component 옵션이 아니라 element 옵션으로 변경 {} 괄호안 태그로 사용해야함.
     // react router dom v6 버전 확인하여 사용
     //--------------------------------------------------------------------------------------------------
     <HashRouter>
       <Routes>
         <Route path = "/" element = {<Home></Home>}>
           
         </Route>
         <Route path = "/home/introduction">
           
         </Route>
         <Route path = "/about" element = {<About><h1>About</h1></About>}>
         </Route>
       </Routes>
     </HashRouter>
   );
  }

export default App;
