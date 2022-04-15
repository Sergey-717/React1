import {Button} from 'antd'
import './Header.css';
import React, { useEffect, useState } from "react";
import api from '../../utils/Api';


function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((user) => {setUser(user)})
  }, [])
  

  return (
    <div className="Header">
      
      <div className='Header__content'>
        <div className='user-info'>
        <div>{user.name}</div>
        <div>{user.email}</div>
        </div>
        <Button type="link" size={'middle'} href='https://react-learning.ru/'>
            Home
          </Button>
          <Button type="link" size={'middle'}>
            Remix Docs
          </Button>
          <Button type="link" size={'middle'}>
            GitHub
          </Button>
      </div>
  
    </div>
  );
}

export default Header;
