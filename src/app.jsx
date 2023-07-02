import Button from './components/css-in-js/button/button';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Component driven design
      </h1>
      <br />
      <Button onClick={() => console.log('Button clicked!')}>Click me!</Button>
    </>
  )
}

export default App
