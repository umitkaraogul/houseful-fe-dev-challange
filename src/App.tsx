import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyListPage from '@/pages/PropertyListPage';
import PropertyDetailsPage from '@/pages/PropertyDetailsPage';
import Navbar from '@/components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/properties/:id' element={<PropertyDetailsPage />} />
      <Route path='/' element={<PropertyListPage />} />
    </Routes>
  </Router>
);

export default App;
