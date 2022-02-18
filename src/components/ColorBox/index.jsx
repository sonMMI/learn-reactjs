import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState('white');

  return (
    <div>
      {color}

      <button onClick={() => setColor('Black')}>Change to Black</button>
      <button onClick={() => setColor('White')}>Change to White</button>
    </div>
  );
}

export default ColorBox;
