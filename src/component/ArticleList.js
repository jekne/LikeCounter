// src/components/ArticleList.js
import { useState } from "react";
import ArticleCard from "./ArticleCard";

// export default function ArticleList() {
//   const [articles, set_articles] = useState([
//     {
//       id: 1,
//       title: "What is React all about?",
//       body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
//     },
//     {
//       id: 2,
//       title: "A lovely kid",
//       body: "In fact, a kid is also the name of a baby goat!",
//     },
//     {
//       id: 3,
//       title: "On placeholder image URLs",
//       body: "So yeah, you won't be able to look these images up. They're placeholders",
//     },
//   ]);

//   const clearNotifications = () => {
//     set_articles([]);
//   };
//   return (
//     <div>
//       <p>Here's a lovely list of articles, for your reading pleasure:</p>
//       {/* TODO */}
//       <button onClick={clearNotifications}> Clear Notifications</button>
//       {articles.map((article) => (
//         <ArticleCard
//           key={article.id}
//           title={article.title}
//           content={article.body}
//         />
//       ))}
//     </div>
//   );
// }

// // the part above it is before to use the async
import axios from "axios";
import { useEffect } from "react";
export default function ArticleList() {
  //   const [articles, set_articles] = useState([
  const [articles, set_articles] = useState([]);
  //     {
  //       id: 1,
  //       title: "What is React all about?",
  //       body: "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
  //     },
  //     {
  //       id: 2,
  //       title: "A lovely kid",
  //       body: "In fact, a kid is also the name of a baby goat!",
  //     },
  //     {
  //       id: 3,
  //       title: "On placeholder image URLs",
  //       body: "So yeah, you won't be able to look these images up. They're placeholders",
  //     },
  //   ]);

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      console.log("Got back:", res.data);
      set_articles(res.data);
      //this set_articles above brings the data to the page, if you change the limit on the internet link, reduces
    }
    doSomeDataFetching();
  }, []);

  const clearNotifications = () => {
    set_articles([]);
  };

  //   const hello = async () => {
  //     console.log("Hi from fat arrow anonymous function expression!");
  //   };
  //   async function doSomeDataFetching() {
  //     console.log("I'm gonna fetch some data!");

  //     // Getting back data from the net, through the wire, air, and the ocean:
  //     const res = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //     );

  //     console.log("Got back:", res);
  //   }

  return (
    <div>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {/* TODO */}
      <button onClick={clearNotifications}> Clear Notifications</button>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          content={article.body}
        />
      ))}
    </div>
  );
}
