import Link from 'next/link';

const Header = () => {
    return (
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
        <img src="/logo.png" alt="ReMEDI Logo" style={{ height: '20px'}} />
        <div style={{ fontSize: '1.5rem' }}></div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li>
              <Link style={{ color: '#fff', textDecoration: 'none' }} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ color: '#fff', textDecoration: 'none' }}href="/text">
                Plain Text
              </Link>
            </li>
            <li>
              <Link style={{ color: '#fff', textDecoration: 'none' }} href="/document">
                Document or Webpage
              </Link>
            </li>
            <li>
              <Link style={{ color: '#fff', textDecoration: 'none' }} href="/pages">
                Reading Comprehension
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  