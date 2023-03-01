import { useState, useEffect } from 'react';

import CreateToDos from './CreateToDos';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal';

export const App = () => {
  const [toDos, setToDos] = useState(
    () => JSON.parse(window.localStorage.getItem('key')) || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (toDos.title === '' || toDos.description === '') {
      return;
    } else {
      window.localStorage.setItem('key', JSON.stringify(toDos));
    }
  }, [toDos]);

  const formSubmit = toDo => {
    const NewToDo = {
      ...toDo,
      id: Math.floor(Math.random() * 10000),
    };

    if (NewToDo.title === '' || NewToDo.description === '') {
      alert('Please, enter all fields.');
      return;
    } else {
      setToDos(prevToDo => [...prevToDo, NewToDo]);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteToDo = toDoId => {
    return setToDos(prevState =>
      prevState.filter(toDo => toDo.id !== toDoId)
    );
  }

  return (
    <>
      <CreateToDos formSubmit={formSubmit} />
      <h1>Task's To Do:</h1>
      <ToDoList openModal={openModal} toDos={toDos} deleteToDo={deleteToDo}/>
      {isModalOpen && <Modal closeModal={closeModal} toDos={toDos}></Modal>}
    </>
  );
};
