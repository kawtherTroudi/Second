import './App.css';
import picture from './Summer.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <h1 className="title red">Kawther Troudi</h1>
        <br />
        <img src={picture} style={{maxWidth: "700px",paddingLeft: "120px", paddingBottom: "40px"}}/>
        <br />
        <img src="/Fall.jpg" style={{maxWidth: "700px",paddingLeft: "1050px"}}/>
      </div>
      </header>
    </div>
  );
}

export default App;
