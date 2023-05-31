import React from 'react';
import listImg from '../../public/assets/listImg.png';
import ProgressBar from './Elements/ProgressBars/ProgressBar/ProgressBar';
import ButtonDelete from './Elements/Buttons/ButtonDelete';
import ButtonEdit from './Elements/Buttons/ButtonEdit';
const List = (props) => {
  const [handleUpdate, setHandleUpdate] = React.useState(-1);
  const handleEdit = (title) => {
    setHandleUpdate(title);
  };
  return (
    <div className="content__list">
      <div className="content__img">
        <img src={listImg} alt="logo" />
      </div>
      <h3 className="content__text">{props.post.title}</h3>
      <ProgressBar value={props.post.progress}/>
      <div className="content__btn">
        <ButtonEdit onClick={() => handleEdit(props.post.title)} />

        <ButtonDelete onClick={() => props.remove(props.post)} />
      </div>
    </div>
  );
};

export default List;
