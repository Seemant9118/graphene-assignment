import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Navbar from './components/navbars/Navbar';
import Hero from './components/hero/Hero';
import Product from './components/products/Product';
import GetInTouch from './components/getInTouch/GetInTouch';
import Footer from './components/footer/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        <Hero />
        <Product />
        <GetInTouch/>
        <Footer/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
