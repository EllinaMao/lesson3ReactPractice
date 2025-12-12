/**Создайте классовый компонент OptimizedCounter, похожий на Counter. Добавьте кнопку "Обновить". Используйте метод жизненного цикла shouldComponentUpdate(nextProps, nextState). Сделайте так, чтобы компонент обновлялся только в том случае, если новое значение count четное. Нажатие на кнопку "Обновить" должно увеличивать count на 1. */

import Counter from "./Counter.jsx";

class OptimisedCounter extends Counter {
  constructor(props) {
    super(props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextState.count:', nextState.count);
    return nextState.count % 2 === 0;
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Обновить</button>
      </div>
    );
  }
}

export default OptimisedCounter;
