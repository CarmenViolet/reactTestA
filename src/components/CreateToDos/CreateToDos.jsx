import { useState } from 'react';

const CreateToDos = ({ formSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onChangeInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setDescription('');
    setTitle('');
  };

  const onSubmit = event => {
    event.preventDefault();

    if(title.value === "" || description.value === "") {
        alert("Please, enter all fields.")
        return;
    }

    formSubmit({ title, description });

    reset();
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">
          Title:
          <input
            id={Math.floor(Math.random() * 100)}
            value={title}
            name="title"
            type="text"
            onChange={onChangeInput}
            placeholder="Enter title"
          />
        </label>

        <label htmlFor="">
          Description:
          <input
            id={Math.floor(Math.random() * 100)}
            value={description}
            name="description"
            type="text"
            onChange={onChangeInput}
            placeholder="Enter description"
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateToDos;
