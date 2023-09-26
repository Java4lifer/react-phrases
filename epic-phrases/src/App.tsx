import { useState } from 'react'
import './App.css'
import Logo from "./assets/ultradie.jpg"

function App() {

  const [ text, settext ] = useState("")
  const [ catselected, setcatselected] = useState(0)
  const allphrase = [
    {id: 1,
    name: "Motivacional",
    phras: ["If you die, I'll kill you.",
    "People die when they are killed.",
    "Thy end is now.",
    "It's the laws of nature. Or should I say... Rules of nature.",
    "Kids are cruel, and I'm very in touch with my inner child.",
    "Made from spiders, by spiders, for spiders.",
    "Despite everything, it's still you.",
    "But nobody came..."]}
  ]

  function makethphrase() {
    const numberth = Math.floor(Math.random() * allphrase[catselected].phras.length)
    settext(`"${allphrase [catselected].phras[numberth]}"`)
    //console.log(numberth)
  }

  function catEsc(index: number) {
    //console.log("Clicked tem position:", index)
    setcatselected(index)
  }

  return (
    <>
      <div className='container'>
        <img src={Logo} className='logo'/>

        <h1 className='title'>Categories</h1>
        <section className='cat-ae'>
          {allphrase.map( (item, index) => (
            <button className='cat-but' key={item.id}
            style={{borderWidth: item.name === allphrase[catselected].name? 2: 0,
              borderColor: "blue"}}
              onClick={() => catEsc(index)}
            >
              {item.name}
            </button>
          ))}
          </section>
        <button className='gen-phrase' onClick={() => makethphrase}>Generate da phrase</button>

        {text !== '' && <p className='phrase'>{text}</p>}
      </div>
    </>
  )
}

export default App
