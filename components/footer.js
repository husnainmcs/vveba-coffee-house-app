
'use client';
import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-4 bg-gray-100 text-sm text-gray-600">
      <p className="copyright">
        &copy; All Rights Reserved. {year}. Made by VvebaNextGen
      </p>
    </footer>
  );
}
