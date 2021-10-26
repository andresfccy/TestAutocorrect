import React, {useState} from 'react';

const correctionsList = {
  'wierd': 'weird',
  'wolrd': 'world',
  'reaily': 'really'
};

const AutocorrectTextarea = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSpace = (e) => {
    if(e.keyCode === 32) {
      const inputWordsList = text.split(' ');
      setText(inputWordsList.map((o)=>{
        return correctionsList[o] || o;
      }).join(' '));
    }
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