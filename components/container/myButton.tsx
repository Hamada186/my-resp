//不要ファイル
import * as React from 'react';

const MyButton = (props) => {
  const {input, onChange} = props;
  
  return(
    <>
      <button onChange={input => onChange(input)}>入力</button>
    </>
  )
}

export default MyButton;