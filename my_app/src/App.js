import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import logo from './logo.svg';

//let name= "harry";
function App() {
return(
  <>
<Navbar title="MyNewAPP" about="About Us"/>
<div class="container my-3">
<Textform heading="Enter text to test :"/>
<About/>
</div>

  </>
)
}

export default App;
