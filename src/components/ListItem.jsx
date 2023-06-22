import React from 'react';
import listImg from '../../public/assets/listImg.png';
import Edit from './Edit';
import ProgressBar from './Elements/ProgressBars/ProgressBar/ProgressBar';
import ButtonEdit from './Elements/Buttons/ButtonEdit';
import ButtonDelete from './Elements/Buttons/ButtonDelete';

const ListItem = (props) => {
  const [note, setNote] = React.useState(props.post.title);
  const [editing, setEditing] = React.useState(false);
  console.log(note);

  const [value, setValue] = [
    {
      title: '',
    },
  ];

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveClick = () => {
    setEditing(false);
    setNote(note);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setNote(save.title);
  };

  const setUpdateData = () => {
    setEditing(true);
  };

  return (
    <div>
      {editing ? (
        <Edit
          note={note}
          onInputChange={handleInputChange}
          onSaveClick={handleSaveClick}
          onCancelClick={handleCancelClick}
          post={props.post}
        />
      ) : (
        <div className="content__list">
          <div className="content__img">
            <img src={listImg} alt="logo" />
          </div>

          <h3 className="content__text">{note}</h3>
          <ProgressBar value={props.post.progress} />
          <div className="content__btn">
            <ButtonEdit onClick={(e) => setNote({ ...props, title: e.target.value })} />
            <ButtonDelete onClick={() => props.remove(props.post)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
