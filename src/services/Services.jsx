import React, {useState, useEffect} from 'react'

const Services = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])
  return (
    <div className=' w-screen h-full bg-slate-300'>
      <div className='flex justify-center py-5'>
        <h1 className='text-4xl text-slate-600 font-bold font-sans'>My Wish</h1>
      </div>
      <div className='container mx-auto grid grid-cols-2 xl:grid-cols-1 p-4 shadow-lg overflow-hidden gap-4'>
        {data.map(item => (
          <div key={item.id} className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden'>
            <img className='h-32 mx-auto' src={item.image} alt="product" />
            <div className="p-6">
            <h3 className='text-xl font-semibold text-gray-800'>{item.title}</h3>
                <p className="text-gray-600 mt-2">Short product description goes here.</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-500">${item.price}</span>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
