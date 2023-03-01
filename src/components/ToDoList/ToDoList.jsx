const ToDoList = ({ toDos, openModal, deleteToDo }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map(({ id, title, description }, index) => {
            return (
              <tr key={id} onClick={() => openModal()}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  {' '}
                  <input type="checkbox" />
                </td>
                <td>
                  <button type="button" onClick={() => deleteToDo(id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
