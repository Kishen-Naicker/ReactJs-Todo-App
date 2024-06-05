import './App.css';
import TodoWrapper from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <div className='field'>
        <img src='favicon.ico' alt='logo'/>
        <h1>ReactJs Todo App</h1>
        <p>Designed & Developed by Kishen</p>
      </div>
      <TodoWrapper/>
    </div>
  );
}

export default App;
