import React, { FC, useState } from 'react';
import TextareaComp from './TextareaComp';

const InputForm: FC = () => {
  const [state, setState] = useState({
    input: "",
    output: ""
  });
  const [message, setMessage] = useState("");

  // フォームの入力について
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setState((prevState) => {
      return{...prevState, input: event.target.value };
    });
  }
  
  // 適当に出力
  const outputMsg = () => {
    setMessage(state.input);
  };

  return(
  <>
    <h2>入力フォーム</h2>
    <div>
      <TextareaComp name="お問い合わせ内容" value={state.input} onChange={onChangeHandler}/>
    </div>
    <button onClick = {outputMsg}>入力</button>
    <p> {message} </p>
  </>
  );
}

export default InputForm;