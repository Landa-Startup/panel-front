import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        {/* <Navbar>  */}
        <main>{children}</main> {/* Main Content */}
        <div className="bottom-0 w-full">{/* <ScrollUpButton /> */}</div>
        {/* </Navbar> */}
      </body>
    </html>
  );
}
