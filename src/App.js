import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#888' }}>
        Created by Ryan Aljaari
      </footer>
    </div>
  );
}

export default App;
