import PostsList from '../Posts-list/Posts-list';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';
import { Typography, Button, Modal, Select, Input } from 'antd';
import { useState, useEffect } from 'react';
import api from '../../utils/Api';

const { Title } = Typography;

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((user) => {setUser(user)})
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form, setFormValue] = useState({});

  const closeModal = () => {
    setIsModalVisible(!isModalVisible);
  } 
  const handleChange = (value) => {
    setFormValue({...form, tags: value});
  }

  const inputChange = (value) => {
    setFormValue({...form, [value.target.name]: value.target.value});
  }

  const savePost = () => {
    if (form.text && form.title && form.tags?.length) {
      api.createPost({...form, image: user.avatar}).then(
            closeModal
          );

          return;
    }

    alert('Please fill all inputs. RIGHT NOW!!!!')
    
  }
  
  return (
    <div className="App">
      
<Header></Header>
<div className="content">
  <div className='content__row'>
    <div className="titles">
      <Title level={3}>Welcome to Our Image Board!</Title>    
      <Title level={5}>We're stoked that you're here. 🥳</Title>
    </div>
    <Button className='create-post-button' size='middle' onClick={closeModal}>Create post</Button>
  </div>
  <PostsList></PostsList>
  
  <Modal title="Create post" visible={isModalVisible} onOk={savePost} onCancel={closeModal}>
      <Input className='input' placeholder="Title" name='title' onChange={inputChange}/>
      <Input className='input' placeholder="Text" name='text' onChange={inputChange}/>
      <Select className='input' mode="tags" style={{ width: '100%' }} name='tags' placeholder="Tags" onChange={handleChange}>
       {[]}
      </Select>
  </Modal>
</div>


  <Footer></Footer>
    </div>
  );
}

export default App;
