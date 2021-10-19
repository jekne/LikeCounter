import { useState } from "react";

export default function Animals() {
  // functions go here

  return (
    <div>
      {/* <ul>
        <li>Awesomeness level 1: Chicken</li>
        <li>Awesomeness level 2: Sloth</li>
        <li>Awesomeness level 3: Porcupine</li>
        <li>Awesomeness level 4: Killer whale</li>
        <li>Awesomeness level 5: Velociraptor</li>
      </ul> */}
      <div>
        {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
          (animal, index) => {
            return (
              <li key={index}>
                Awesomeness level {index + 1}: {animal}
              </li>
            );
          }
        )}
      </div>
    </div>
  );
}
