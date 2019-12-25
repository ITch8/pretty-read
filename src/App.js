import React from 'react';
import {GlobalStyled} from './style.js';
import {GlobalFontStyled} from './static/iconfont/iconfont.js';
import {Provider} from 'react-redux';
import store from './store';
import Header from "./public/header"

function App() {
  return (
    <div>
		<GlobalStyled/>
		<GlobalFontStyled/>
		<Provider store={store}>
			<Header/>
		</Provider>
    </div>
  );
}

export default App;
