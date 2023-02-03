import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({authenticate,setAuthenticate}) => {
  const menulist = ['여성','Divided','남성','신생아/유아','H&M Home', 'Sale', '지속가능성',];
  const navigate = useNavigate();
  const goToLogin=()=>{
    navigate("/login");
  }
  const search=(event)=>{
    if(event.key == "Enter"){
      console.log('we click this key', event.key);
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;
      //url을 변경해준다

      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
      {authenticate ? (
          <div className='login-button' onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
          <div className='login-button' onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        )}

      <div className='nav-section'>
        <img onClick={() => navigate("/")}
        width={100} 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png"
        />
      </div>

      <div className='menu-area'>
          <ul className='menu-list'>
            {menulist.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>

        <div className='search-area'>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
          <input type='text' onKeyUp={(event)=>search(event)}></input>
        </div>
      </div>
    </div>
  )
}

export default Navbar



