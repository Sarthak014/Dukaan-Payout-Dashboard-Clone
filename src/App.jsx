import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Page from './components/page';
import Sidebar from './components/sidebar';
import { SidebarProvider } from './utilities/sidebarContext';

function App() {

  return (
    <div className='flex relative'>
      <SidebarProvider>
        <Sidebar />
        <div className="w-full relative">
          <Header />
          <Page />
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  )
}

export default App;
