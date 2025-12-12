import React from "react";
class CounterLesson extends React.Component {
  // 1. Конструктор
  constructor(props) {
    super(props); // Обязательный вызов конструктора родительского класса

    // 2. Инициализация состояния
    this.state = {
      count: 0,
      isToggled: false,
      message: "Initial state",
    };
  }

  handleClick = () => {
    this.setState(
      (prevState) => (
        {
          count: prevState.count + 1,
          message: "Status changed",
        }),
        () => {
          console.log("Conponent updated:", this.state);
        }
      )
  };

  render() {
    // Чтение состояния
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CounterLesson;
