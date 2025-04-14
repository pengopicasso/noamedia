
import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

// Lazy load components that are below the fold
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ClientsSection = lazy(() => import('@/components/ClientsSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading placeholder
const LoadingFallback = () => <div className="h-64 flex items-center justify-center bg-glow-dark">
  <div className="w-12 h-12 border-4 border-glow-cyan rounded-full border-t-transparent animate-spin"></div>
</div>;

const Index = () => {
  return (
    <div className="min-h-screen bg-glow-dark text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<LoadingFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ClientsSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
