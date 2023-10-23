import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div>
      <h1 className='text-center text-5xl'>This is Car sotre Client side</h1>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <FontAwesomeIcon className='text-8xl' icon={faBarsProgress}></FontAwesomeIcon>
    </div>
  )
}

export default App
