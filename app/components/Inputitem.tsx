import React from 'react';

interface InputItemProps {
  input: string;
  id: string;
  type: string;
  onChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  pattern?: string;
}


export const Inputitem: React.FC<InputItemProps> = ({ input, id, type, onChangeData, name, value, pattern }) => {
  return (
    <div className="flex  my-2 flex-col ">
      <label htmlFor={id} className='labl text-white'>{input}</label>
      <input
        className="lg:py-3 py-2 bg-white rounded-lg" 
        value={value}
        id={id}
        name={name}
        type={type}
        pattern={pattern}
        maxLength={type === "tel" ? 10 : 100}
        placeholder={input}
        onChange={onChangeData}
        required
      />
    </div>
  );
};
