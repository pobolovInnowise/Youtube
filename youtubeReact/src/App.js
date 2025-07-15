
import './App.css';
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
        <Header newVideosNumber={3}/>
      <Content/>
      <Sidebar/>
        <Footer/>
    </div>

  );
}

export default App;
