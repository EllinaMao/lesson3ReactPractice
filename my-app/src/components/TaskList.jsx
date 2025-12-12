/**
 * Создайте классовый компонент TaskList. В его состоянии есть массив tasks: [{id: 1, text: 'Задача 1'}]. Добавьте поле ввода и кнопку "Добавить". Реализуйте обработчик для добавления новой задачи. Строго соблюдайте принцип неизменяемости состояния (immutability): при добавлении новой задачи создавайте новый массив, а не модифицируйте существующий массив tasks.
 */

import React from "react";

class TaskList extends React.Component {
  state = {
    tasks: [{ id: 1, text: "Задача 1" }],
    newTaskText: "",
  };

  //лябмду привязывать по this не надо, поэтому удобненько
  handleInputChanges = (e) => {
    this.setState({ newTaskText: e.target.value });
  };

  handleAddingTask = () => {
    const newTask = {
      id: this.state.tasks.length + 1,
      text: this.state.newTaskText,
    };

    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newTask),
      newTaskText: "",
    }));
  };

  render() {
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
        <input
          value={this.state.newTaskText}
          onChange={this.handleInputChanges}
        ></input>
        <button onClick={this.handleAddingTask}>Добавить</button>
      </div>
    );
  }
}
export default TaskList;
