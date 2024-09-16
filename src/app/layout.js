// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'FBT Functional Body Training',
  description: 'Achieve your fitness goals with us!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
