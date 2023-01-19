import { useState } from 'react'
import CallBackTutorials from './components/callBackT';
import ContextTutorial from './components/contextT';
import EffectTutorial from './components/effectT';
import Layouteffect from './components/layoutT';
import ReducerTutorial from './components/reducerT';
import RefTutorial from './components/refT';
import State from "./components/stateT";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <State />
      <hr/>
      <ReducerTutorial />
      <hr/>
      <EffectTutorial />
      <hr />
      <RefTutorial />
      <hr />
      <Layouteffect />
      <hr />
      <ContextTutorial />
      <hr />
      <CallBackTutorials />
    </div>
  )
}

export default App
