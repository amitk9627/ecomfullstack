import {Routes,Route} from 'react-router-dom'
import DashBoard from './Admin/DashBoard'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<DashBoard />} />

      </Routes>
    
    </div>
  );
}

export default App;
