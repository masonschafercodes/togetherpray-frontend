import React from 'react';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentAlt, faKey, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faCommentAlt, faKey, faUser);

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
