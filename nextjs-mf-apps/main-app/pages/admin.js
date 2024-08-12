import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AdminHome = dynamic(() => import('shop_app/admin'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function index() {
  return (
    <main className="flex flex-col bg-white text-black">
      <Navbar />
      <AdminHome />
      <Footer />
    </main>
  );
}
