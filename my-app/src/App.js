import React from 'react';
import './App.css';
import Header from './component/Header/Header'; // Importing the Header component
import Shop from './component/Shop/Shop';
import Review from './component/Review/Review'; // Importing the Review component

function App() {
  return (
    <div className="App">
      {/* Rendering the Header component */}
      <Header />
      <Shop />
      <Review />
    </div>
  );
}

export default App;
