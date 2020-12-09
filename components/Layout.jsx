/* eslint-disable react/react-in-jsx-scope */
import Navbar from './shared/Navbar';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div className="main-container container">
      {children}
    </div>
  </div>
)
export default Layout;