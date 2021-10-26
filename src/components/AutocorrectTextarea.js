import React, {useState} from 'react';

const AutocorrectTextarea = ({corrections}) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    if(e.target.value[e.target.value.length-1] === ' ')
      validateText(e.target.value);
    else
      setText(e.target.value);
  }

  const handleSpace = (e) => {
    if (e.keyCode === 32) {
      validateText(e.target.value);
    }
  }

  const validateText = (tempText) => {
    const inputWordsList = tempText.split(' ');
    setText(inputWordsList.map((o) => {
      return corrections[o] || o;
    }).join(' '));
  }

  return (
    <div className="text-center">
      <textarea 
        data-testid="textarea" 
        rows={10} 
        cols={80} 
        className="card"
        value={text}
        onChange={handleChange}
        onKeyDown={handleSpace} />
    </div>
  );
};

export default AutocorrectTextarea;