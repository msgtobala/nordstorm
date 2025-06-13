import './App.css';
import SalesBanner from './components/SalesBanner';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import DesignInnovation from './components/DesignInnovation';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Sale', href: '/sale' },
    { label: 'Accessories', isActive: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SalesBanner />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      {/* Main content area */}
      <main>
        <DesignInnovation />
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;