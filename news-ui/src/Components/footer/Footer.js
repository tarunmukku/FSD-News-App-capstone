import React from 'react'

function Footer() {
  return (
    <div className='container-fluid text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    &copy; {new Date().getFullYear()} Copyright:{' '}
    <a className='text-dark' href='@News Portal'>
      News Portal
    </a>
  </div>
  );
}

export default Footer