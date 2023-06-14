import React from 'react';
import listImg from '../../public/assets/listImg.png';
import Edit from './Edit';
import ProgressBar from './Elements/ProgressBars/ProgressBar/ProgressBar';
import ButtonEdit from './Elements/Buttons/ButtonEdit';
import ButtonDelete from './Elements/Buttons/ButtonDelete';

const List = (props) => {
  const [note, setNote] = React.useState(props.post.title);
  const [editing, setEditing] = React.useState(false);

  const handleInputChange = (e) => {
    setNote(e.target.value);
  };

  const handleSaveClick = () => {
    const propsArr = [props.post];
    let filter = [...propsArr].filter((task) => task.id !== props.post.id);
    let update = [...filter, note];
    console.log(update);
    setEditing(false);
    setNote(update);
  };
  const handleCancelClick = () => {
    if (props.post.title == note) {
      console.log(1);

      setNote(note);
    } else {
      console.log(2);
      let newNote = note;
      console.log(newNote);
      setNote(newNote);
    }
    setEditing(false);
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
            <ButtonEdit onClick={() => setEditing(true)} />

            <ButtonDelete onClick={() => props.remove(props.post)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
