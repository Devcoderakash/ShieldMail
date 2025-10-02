
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
