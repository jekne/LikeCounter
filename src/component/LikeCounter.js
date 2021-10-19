// src/components/LikeCounter.js
import { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  console.log("what are these?", numLikes, set_numLikes);
  const increment = () => {
    console.log("Yes! cliked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };
  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <button onClick={increment}>Liked button</button>
    </div>
  );
}
