import React from "react";
class CounterTwoStates extends React.Component {
  // 1. Инициализация состояния (современный синтаксис, не требует конструктора)
  state = {
    isOn: false,
    clickCount: 0,
  };
 
  // 2. Метод для переключения булевого значения
  handleToggle = () => {
    // Обновление, которое не зависит от предыдущего состояния
    // this.setState({
      //   isOn: !this.state.isOn,
      // });
      
      // Или, используя prevState для гарантии актуальности:
      this.setState(prevState => ({ isOn: !prevState.isOn }));
    };
    
  // 3. Метод для увеличения счетчика (зависит от prevState)
  handleCount = () => {
    this.setState(
      (prevState) => ({
        clickCount: prevState.clickCount + 1,
      }),
      () => {
        // Колбэк: выполняется после гарантированного обновления состояния
        if (this.state.clickCount >= 5) {
          console.log(
            `Congratulations! You have clicked ${this.state.clickCount} times.`
          );
        }
      }
    );
  };
 
  render() {
    const status = this.state.isOn ? "ON" : "OFF";
    const bgColor = this.state.isOn ? "#4CAF50" : "#f44336";
    const text = this.state.isOn ? "Turn off" : "Turn on";
 
    return (
      <div style={{ padding: "20px", border: "1px solid #ccc" }}>
        <h2 style={{ color: bgColor }}>Status: {status}</h2>
        <p>Clicks: **{this.state.clickCount}**</p>
 
        <button onClick={this.handleToggle} style={{ marginRight: "10px" }}>
          {text}
        </button>
 
        <button onClick={this.handleCount}>Add click</button>
      </div>
    );
  }
}

export default CounterTwoStates;

 