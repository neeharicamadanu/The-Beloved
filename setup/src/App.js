import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [chapter, setChapter] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>Bible Concepts and Revelation in Christ</h3>
        <section className='info'>
          {chapter.map((verse) => {
            return <SingleQuestion key={verse.id} {...verse}></SingleQuestion>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
