

import FeaturedSection from './components/FeaturedSection'
import SideBarSection from './components/SideBarSection'


export default function Home() {

  const products = [
    {
      id: 1,
      product_name: "Sample Product 1",
      product_description: "This is a sample product description.",
      price: 19.99,
      quantity: 50,
      categoryId: 1,
      store_name: "Sample Store A",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      product_name: "Sample Product 2",
      product_description: "Another sample product description.",
      price: 24.99,
      quantity: 30,
      categoryId: 3,
      store_name: "Sample Store B",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      product_name: "Sample Product 3",
      product_description: "Yet another sample product description.",
      price: 15.99,
      quantity: 20,
      categoryId: 6,
      store_name: "Sample Store C",
      image_url: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main className=" bg-green-50 p-8 flex min-h-screen flex-col items-center justify-between">


      <div class="flex mb-5 w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white">
        <div class="feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px">
          <div class="p-3 flex gap-3 w-full items-center flex-row">
            <span class="flex items-center text-lg justify-center w-1/4 h-3/4 rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold" style={{backgroundColor:"#feeec8"}}>1</span>
            <div class="flex flex-col items-start w-3/4">
              <h3 class="w-full text-18px font-extrabold text-gray-900 mt-0 mb-2">Your Order</h3>
              <p class="w-full leading-6 text-14px">Add products to your cart, enter your details and confirm.</p>
            </div>
          </div>
          <div class="p-3 flex gap-3 w-full items-center flex-row">
            <span class="flex items-center justify-center w-1/4 h-3/4 rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold" style={{backgroundColor:"#ceeffe"}}>2</span>
            <div class="flex flex-col items-start w-3/4">
              <h3 class="w-full text-18px font-semibold text-gray-900 mt-0 mb-2">Picking your order</h3>
              <p class="w-full leading-6 text-14px">Your order is being picked and now will be forwarded for packaging.</p>
            </div>
          </div>
          <div class="p-3 flex gap-3 w-full items-center flex-row">
            <span class="flex items-center justify-center w-1/4 h-3/4 rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold" style={{backgroundColor:'#d4f8c4'}}>3</span>
            <div class="flex flex-col items-start w-3/4">
              <h3 class="w-full text-18px font-semibold text-gray-900 mt-0 mb-2">Packing Your Order</h3>
              <p class="w-full leading-6 text-14px">We are packing your order and will be out for delivery soon.</p>
            </div>
          </div>
          <div class="p-3 flex gap-3 w-full items-center flex-row">
            <span class="flex items-center justify-center w-1/4 h-3/4 rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold" style={{backgroundColor:'#d8dafe'}}>4</span>
            <div class="flex flex-col items-start w-3/4">
              <h3 class="w-full text-18px font-semibold text-gray-900 mt-0 mb-2">Deliver</h3>
              <p class="w-full leading-6 text-14px">Your order has been prepared and out for delivery. It will be delivered soon.</p>
            </div>
          </div>
        </div>
      </div>

      <SideBarSection />

      {/* <HeroSection /> */}
      
      <FeaturedSection />

    </main>
  )
}
