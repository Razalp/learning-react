import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [color, setColor] = useState('post');
  const [items, setItems] = useState([]);
  const [name, setName] =useState('');
  const prevName=useRef;
  useEffect(()=>{
    prevName.current=name
  },[name])
  

  useEffect(() => {
    // Use color in the URL and choose the appropriate HTTP method
    axios.get(`https://jsonplaceholder.typicode.com/${color}`)
      .then(response => {
        // Assuming response.data is an array of items
        setItems(response.data);
        console.log('GET request successful:', response.data);
      })
      .catch(error => {
        console.error('Error making GET request:', error);
      });
  }, [color]); // Add color as a dependency to re-run the effect when color changes

  return (
    <>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

    <div>my name is {name} and it used to be </div>
      <div>


        <h1>Color is equal to {color}</h1>
        <button onClick={() => setColor('posts')}>posts</button>
        <button onClick={() => setColor('comments')}>comments</button>
        <button onClick={() => setColor('likes')}>Likes</button>
      </div>
      <div>
        {/* Map over the items state, assuming it's an array */}
        {items.map(item => (
          <div key={item.id}>
              <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
