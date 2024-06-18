import { useState } from 'react';

import { Header } from '../Header';
import { Button } from '../Button';
import { List } from '../List';
import { Disclaimer } from '../Disclaimer';
import { Theme } from '../../constants';
import { Counter } from '../Counter';
import './App.css';

export function App({disclaimerText, title, theme, goods}) {
  const [counter, setCounter] = useState(0)
  const [isCounterVisible, setIsCounterVisible] = useState(true)

  const toggleCounterVisibility = () => {
    setIsCounterVisible(!isCounterVisible)
  }

  // console.log(goods);

  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <div className='wrapper'>
          {/* <List goods={goods}/> */}
          <Disclaimer disclaimerText={disclaimerText} />
          {
            isCounterVisible && <Counter counter={counter} setCounter={setCounter} />
          }
          {/* <AnotherComponent goods={goods}/> */}
        </div>
        <Button onClick={toggleCounterVisibility} theme={theme}>I'm a {theme} button</Button>
      </main>
      <footer>Footer</footer>
    </div>
  );
}



// return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement(
  //     'header',
  //     { className: 'App-header' },
  //     React.createElement(
  //       'img',
  //       { className: 'App-logo', alt: "logo", src: logo },
  //     ),
  //     React.createElement(
  //       'p',
  //       null,
  //       "Edit",
  //       React.createElement(
  //         'code',
  //         null,
  //         "src/App.js"
  //       ),
  //       description,
  //     ),
  //     React.createElement(
  //       'a',
  //       { className: 'App-link', href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" },
  //       "Learn React"
  //     ),
  //   )
  // );
