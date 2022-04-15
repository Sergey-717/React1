import {Button} from 'antd'
import './Header.css';

function Header() {
  return (
    <div className="Header">
      
      <div className='Header__content'>
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
