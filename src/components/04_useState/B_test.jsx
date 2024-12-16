import React from 'react';

const getInitialState = (debugName) => {
  console.log('getInitialState', debugName);
  return 10;
};

const Base2 = () => {
  // Lazy initial state
  // FIXME: Bad

  // useState裡面的functionc會重複執行
  const [countBad, setCountBad] = React.useState(getInitialState('bad'));
  const [count, setCount] = React.useState(getInitialState('correct'));
  // [x]: Correct
  // const [count, setCount] = React.useState(() => {
  //   // 這裡的 function 只會被執行一次
  //   console.log('correct');
  //   return getInitialState('correct');
  // });

  return (
    <section data-name="Base_test">
      <div>count:{count}</div>
      <div>countBad:{countBad}</div>

      <button className="button" onClick={() => setCount(count + 1)}>
        increment count
      </button>
      <button className="button" onClick={() => setCountBad(countBad + 1)}>
        increment setCountBad
      </button>
      <p>{0}</p>
    </section>
  );
};

export default Base2;
