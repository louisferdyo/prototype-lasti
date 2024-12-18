import React from 'react';
import { Hero } from '../components/Hero'
import { Features } from '../components/Features';
import { Footer } from '@/components/Footer';

function Dashboard() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <Hero/>
      <Features/>
    </div>
    </>
  );
}

export default Dashboard;