import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Char from './components/char';
import SectionCard from './components/section-card';
import SectionEditions from './components/section-edition';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <main>
        <Char/>
        <SectionCard/>
        <SectionEditions/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
