import { Component } from 'react';

class Counter extends Component {
  /*
  // constructor를 사용한 메서드
  constructor(props) {
    super(props);
    // state의 초깃값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
 */

  // 또는 이렇게 쓸 수 있음
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            /* 
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 }); 
            */

            // 아래는 같은 형식
            this.setState((prevState) => {
              return { number: prevState.number + 1 };
            });
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
