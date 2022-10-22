import './App.css';
import Axios from 'axios';

function App() {
  const getNews = () => {
  Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=89e2dce848fd4869a89559ed0006d828")
  .then((response) => {
    console.log(response)

  })
  }
  return (
    <>
    <div>
      <button onClick ={getNews}> Get App </button>
    </div>
    </>
  );
}

export default App;