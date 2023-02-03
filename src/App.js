import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';


//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네이게이션바
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인페이지가 나온다.
//5. 로그인이 되어있을 경우에는 상품디테일 페이지를 볼 수 있다
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지로 자동 이동한다
//7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//8. 상품을 검색 할 수 있다.

//https://www.npmjs.com/package/json-server
//https://gist.github.com/legobitna/24cf11ae95d53c9cdcdc7b0040f059e9
//https://github.com/legobitna/hnm-react-router
//json-server --watch db.json --port 5000

function App() {

  //true:로그인 / false:로그인x
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(()=>{
    console.log("Aaaa", authenticate);
  },[authenticate]);

  return (
    <div >
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />

      </Routes>

    </div>
  );
}

export default App;
