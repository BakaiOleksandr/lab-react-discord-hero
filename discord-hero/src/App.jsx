import './App.css';
import ImageBack from './components/ImageBack';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Text from './components/Text';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Text />
      <ImageBack />
      <div className="btn-container">
        <div className="btn1">
          <Button btn={'Download for Mac'} />
        </div>
        <div className="btn1">
          <Button
            btn={'Open Discord in yor browser'}
            style={{backgroundColor: 'black', color: 'white'}}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
