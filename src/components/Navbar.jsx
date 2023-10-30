import React from 'react'

const Navbar = () => {
  const nav = [
    {
      id: 1,
      title: 'Home',
      link: '/'
    },
    {
      id: 2,
      title: 'Games',
      link: '/Games'
    },
    {
      id: 3,
      title: 'Other',
      link: '/Other'
    }
  ];

  return (
    // Your JSX code here, using the 'nav' array if needed.
    <div>
      {/* Example usage: */}
      <ul>
        {nav.map(item => (
          <li key={item.id} className='inline ml-5 w-full '>
            <a href={item.link}>{item.title}</a>
          </li>
        )
          )
            } 
              )
      </ul>
    </div>
  );
};


export default Navbar