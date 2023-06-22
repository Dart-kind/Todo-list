import React from 'react';
import './App.css';

import Header from './components/Header';
import MyModal from './components/MyModal/MyModal';
import Modal from './components/modal/Modal';
import ButtonAdd from './components/Elements/Buttons/ButtonAdd';
import List from './components/List';

function App() {
  const [posts, setPosts] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  

    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el !== post));
  };


  
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <Header />
          <ButtonAdd onClick={() => setModal(true)} />
        </div>

        <MyModal visible={modal} setVisible={setModal}>
          <Modal visible={modal} setVisible={setModal} create={createPost} />
        </MyModal>
        <div className="content">
          <div className="content__lists">
            <List posts={posts} remove={removePost} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
