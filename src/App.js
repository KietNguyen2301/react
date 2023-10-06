
import './App.css';
import React ,{Component} from 'react';
import Menu from './component/Menucomponent';
import { DISHES } from './shared/dishes';
import Main from './component/MainComponent';


class App extends Component {
  

  render() {
    return (
      <div className="App">
                <Main />
      </div>
    );
  }
}

export default App;
