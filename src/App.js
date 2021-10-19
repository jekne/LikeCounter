import "./App.css";
import LikeCounter from "./component/LikeCounter";
import AwesomeAnimals from "./component/AwesomeAnimals";
import Animals from "./component/AwesomeAnimals";
import ArticleList from "./component/ArticleList";
import ArticleCard from "./component/ArticleCard";

function App() {
  return (
    <div className="App">
      <main>
        <ArticleList />
        {/* <Animals />
        here above there is the link of the animals */}
        {/* <LikeCounter /> */}
        {/* like counter appears all the buttons with the functions like or dislike */}
      </main>
    </div>
  );
}

export default App;
