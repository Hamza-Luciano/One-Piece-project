import SNavbar from './style';
import React from 'react';

function Navbar() {
  const [counter, setCounter] = React.useState(0);
  return (
    <SNavbar>
      <h2>One Piece NAVBAR</h2>;{/* Ajouter logo One Piece   */}
      {
        <div className='App'>
          <h1>Counter with Hook State</h1>
          <h1>{counter}</h1>
          <button onClick={() => setCounter(counter + 10 - 8 * 3)}>
            Allez essaye
          </button>
        </div>
      }
    </SNavbar>
  );
}

export default Navbar;
