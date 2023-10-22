import React from 'react';
import Footer from '@/components/home/Footer';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import ScrollUpButton from '@/components/common/ScrollUpButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* <Navbar>  */}
          <main>{children}</main> {/* Main Content */}
          <div className="bottom-0 w-full">
            {/* <Footer /> */}
            {/* <ScrollUpButton /> */}
          </div>
        {/* </Navbar> */}
      </body>
    </html>
  );
}
