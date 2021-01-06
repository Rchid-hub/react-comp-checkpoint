import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
function App() {
  return (
    <div classname="container">
  <ProfilPhoto/>
  <br/>
  <FullName />
  <br/>
  <h4> I live in</h4>
  <Adress/>
    </div>
  );
}

export default App;
