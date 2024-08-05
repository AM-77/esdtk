import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="flex bg-white w-full h-14 shrink-0 border-b">Top Bar</div>

      <div className="flex h-full overflow-hidden">
        <div className="flex w-14 shrink-0 h-full border-r bg-red-100"></div>
        <div className="flex w-full h-full bg-green-100">
          <div>
            <h1 className="bg-gray-500 text-center text-white">
              Hi Tailwind has been integrated.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
