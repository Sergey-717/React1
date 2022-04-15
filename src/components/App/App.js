import PostsList from '../Posts-list/Posts-list';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';
import { Typography, Button } from 'antd';

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      
<Header></Header>
<div className="content">
  <div className='content__row'>
    <div className="titles">
      <Title level={3}>Welcome to Our Image Board!</Title>    
      <Title level={5}>We're stoked that you're here. 🥳</Title>
    </div>
    <Button className='create-post-button' size='middle' onClick={() => console.log('Есть контакт!')}>Create post</Button>
  </div>
  <PostsList></PostsList>

</div>


  <Footer></Footer>
    </div>
  );
}

export default App;
