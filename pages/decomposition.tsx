import * as React from 'react';
import TextareaComp from '../components/container/TextareaComp';

export const TextMessage = React.createContext("");

const DecompPage = () => {

  // テキストエリアから文字列を取得するための処理
  const [state, setState] = React.useState({
    input: "",
    message: ""
  });
  const [text, setText] = React.useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setState((prevState) => {
      return { ...prevState, input: event.target.value };
    });

  }

  const outputMsg = () => {
    setState((prevState) => {
      return { ...prevState, message: state.input };
    })
  }

  // BackendAPI との通信
  // まずは課題と同じことをやる。
  const getProps = async () => {
    const response = await fetch("http://localhost:3001/api/v2/articles", { method: "GET" });
    const json = await response.json();

    setText(JSON.stringify(json));
  }

  
  return (
    <>
      <div>
        <h2>入力フォーム</h2>
        <TextareaComp name="文章を記述してください" value={state.input} onChange={onChangeHandler} /> 
        <button onClick={outputMsg}>入力</button>
        <TextMessage.Provider value={state.input}>
          <p>{state.message}</p>
        </TextMessage.Provider>
      </div>
      <button type="button" onClick={getProps}> Api Button </button>
      <p>{text}</p>
    </>
  );
};

export default DecompPage;