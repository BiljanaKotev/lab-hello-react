import './App.css';
import Button from './components/Button';
import TextContent from './components/TextContent';
import Navbar from './components/Navbar';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Navbar />
        <TextContent />
        <Button />
      </div>
      <Icons />
    </div>
  );
}

export default App;

