import EmployeeList from './components/EmployeeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import './css/App.scss';

function App() {
  return (
    <div className="container_fluid">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
