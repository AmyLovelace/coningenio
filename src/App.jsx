import Layout from './layout/Layout'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { LanguageProvider } from './context/LanguageProvider';

import AboutPage from './pages/about'
import HomePage from './pages/homepage'
import Services from './components/ServicesComp/ServicesComp';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/nosotros" element={<Layout><AboutPage /></Layout>} />
            <Route path="/servicios" element={<Layout><Services /></Layout>} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App
