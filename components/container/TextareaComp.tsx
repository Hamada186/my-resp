import React, { FC } from 'react';

interface Props {
  name: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComp: FC<Props> = props  => {
  const { value, onChange, name } = props;
  return (
    <>
      <input type="text" name={name} value={value} onChange={event => onChange(event)} />
    </>
  );
};

export default TextareaComp;