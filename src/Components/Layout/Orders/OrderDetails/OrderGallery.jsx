import React from 'react'

const OrderGallery = ({products}) => {
  return (
    <>
         <div className="flex flex-col p-4 border border-gray-300 rounded-lg">
        <h3 className="title">Products Orderded</h3>
        <ul className="text-lg flex flex-col gap-3 ">
          <li className=" text-xl border-b py-4 mb-5 font-semibold grid grid-cols-5 w-full place-items-center">
            <div>Images</div>
            <div>Product Id</div>
            <div>Product Name</div>
            <div>Price</div>
            <div>Quantity</div>
          </li>
          {products.map((product, index) => (
            <li
              key={index}
              className="grid  grid-cols-5 w-full max-h-xl overflow-scroll scrollbar-hidden place-items-center"
            >
              <img src={product.image} alt="" className="h-12" />
              <div>{product.productId}</div>
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default OrderGallery