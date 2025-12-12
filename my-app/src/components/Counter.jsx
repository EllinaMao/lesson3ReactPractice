import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialValue || 0 };
  }
  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Увеличить</button>
      </div>
    );
  }
}
export default Counter;

/**Используя компонент Counter из предыдущей задачи, добавьте кнопку с текстом "Увеличить". Реализуйте обработчик события onClick для кнопки, который увеличивает значение count в состоянии на 1 при каждом нажатии. */

