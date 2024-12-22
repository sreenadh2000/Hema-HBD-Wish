import './App.css';
import AskMe from './components/AskMe';
import HomePage from './components/HomePage';
import BottomPage from './components/BottomPage';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <AskMe />
      <VideoPlayer />
      <BottomPage />
    </div>
  );
}

export default App;
