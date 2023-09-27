import React from 'react';
import './App.css';
import NarutoAnimation from './NarutoAnimation';

function App() {
  return (
    <div className="naruto-theme">
      <header>
        <h1>WHO IS THIS CHARACTER?</h1>
      </header>
      <main>
        <NarutoAnimation />
        <div className="naruto-quote">
          {}
          <p><b>"I know a 1000 justsu and people call me the copy ninja!"</b></p>
        </div>
      </main>
      <footer>
        <p>© 2023 Deep OP</p>
      </footer>
    </div>
  );
}

export default App;
