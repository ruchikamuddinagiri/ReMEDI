import Link from 'next/link';

const Footer = () => (
    <footer style={{ textAlign: 'center', marginTop: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <p>&copy; {new Date().getFullYear()} Your Site Name. All rights reserved.</p>
      <p>
        <Link href="/about">
          About Us
        </Link> | 
        <Link href="/contact">
          Contact
        </Link>
      </p>
    </footer>
  );

  export default Footer;