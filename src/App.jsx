import Layout from './layout/Layout'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import AboutPage from './pages/about'
import HomePage from './pages/homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/nosotros" element={<Layout><AboutPage /></Layout>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
