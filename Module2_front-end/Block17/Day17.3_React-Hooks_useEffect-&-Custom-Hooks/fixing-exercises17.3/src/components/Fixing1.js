import React, { useEffect, useState } from 'react';

function Fixing1() {
  const [number, setNumber] = useState(1);
  const [buzz, setBuzz] = useState(false);
  useEffect(() => {
    let intervalHit;
    const intervalNumber = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 100)
      setNumber(randomNum);
      if (randomNum % 3 === 0 || randomNum % 5 === 0) {
        setBuzz(true)
        setTimeout(() => {
          setBuzz(false);
        }, 4000)
      }
    }, 5000);
    return () => {
      clearInterval(intervalNumber);
      clearInterval(intervalHit);
    }
  });

  return (
    <section>
      <h1>{number}</h1>
      {buzz && (
        <p>Hit!</p>
      )}
    </section>
  )
}

export default Fixing1;
