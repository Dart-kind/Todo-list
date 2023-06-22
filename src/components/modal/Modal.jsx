import React from 'react';

import crossBtn from '../../../public/assets/crossImg.png';
import ProgressBarHandle from '../Elements/ProgressBars/ProgressBarHandle/ProgressBarHandle';
import styles from './Modal.module.scss';
import MyInput from '../MyInput/MyInput';
import ButtonAddPost from '../Elements/Buttons/ButtonAddPost';

const Modal = ({ create, visible, setVisible }) => {
  const [post, setPost] = React.useState({ title: '', body: '' });
  const [state, setState] = React.useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...post,
      progress: state,
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popup__top}>
        <h3>Let's create you task</h3>
        <button onClick={() => setVisible(false)} className={styles.popup__btn}>
          <img className={styles.popup__img} src={crossBtn} />
        </button>
      </div>
      <div className={styles.popup__middle}>
        <form className={styles.popup__form}>
          <MyInput
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Название поста"
            className={styles.popup__input}
          />
          <p className={styles.popup__text}>Drag to select your current progress</p>
          <ProgressBarHandle onChange={setState} />

          <ButtonAddPost onClick={addNewPost}></ButtonAddPost>
        </form>
      </div>
    </div>
  );
};

export default Modal;
