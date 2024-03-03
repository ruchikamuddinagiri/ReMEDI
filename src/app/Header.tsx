import Link from 'next/link';

const Header = () => {
    return (
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
        <div style={{ fontSize: '1.5rem' }}>MyWebsite</div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li>
              <Link style={{ color: '#fff', textDecoration: 'none' }} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: '#fff', textDecoration: 'none' }}href="/about">
                About
              </Link>
            </li>
            <li>
              <Link style={{ color: '#fff', textDecoration: 'none' }} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  