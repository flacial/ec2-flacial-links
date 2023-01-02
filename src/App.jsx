import './App.css'

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className="text-3xl text-gray-600 font-bold">Cool links you <em className="text-orange-600">must</em> check</h1>
      <div>
        <ul>
          <li className='text-xl text-gray-600'><a className='hover:underline' href='https://github.com/flacial' target='_blank'>GitHub</a></li>
          <li className='text-xl text-gray-600'><a className='hover:underline' href='https://linkedin.com/in/flacial/' target='_blank'>Linkedin</a></li>
          <li className='text-xl text-gray-600'><a className='hover:underline' href='mailto: flacial@protonmail.com' target='_blank'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default App
