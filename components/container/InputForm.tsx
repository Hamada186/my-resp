import React, { FC, useState } from 'react';
import TextareaComp from './TextareaComp';


//不要ファイル
//inputとoutputは分けたほうが見栄えがいいと思います。
const InputForm = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  // フォームの入力について
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInput(event.target.value);
  };

  // 適当に出力
  //セットしたメッセージをapiてきなやつでPOSTしてみる。
  const outputMsg = () => {
    setMessage(input);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted : ' + event.state.value);
    event.preventDefault();
  }

  return (
    <>
      <h2>入力フォーム</h2>
      <TextareaComp name="お問い合わせ内容" value={input} onChange={onChangeHandler} />
      <button onClick={outputMsg}>button</button>
      <p> {message} </p>
    </>
  );
}

export default InputForm;