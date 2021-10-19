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

  //   const [resetLikes, set_reset] = useState(initial_numLikes);

  //   console.log("what are these?", resetLikes, set_reset);

  const reset = () => {
    set_numLikes(initial_numLikes);
  };

  const [liked, set_Liked] = useState(false);

  const toggleLiked = () => {
    set_Liked(!false);
  };

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
      <button onClick={increment}>Liked button</button>
      <button onClick={reset}>Reset Button</button>
      {/* <button onClick={() => set_numLikes(numLikes + 1)}>Liked button</button> */}
      {/* <button onClick={toggleLiked}>liked</button> */}
      <button onClick={toggleLiked}>
        {liked ? "You've liked this" : "Like This"}
      </button>
    </div>
  );
}
