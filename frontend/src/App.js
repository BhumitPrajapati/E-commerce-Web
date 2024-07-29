// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductList from './pages/product/getproduct';
// // import ProductDetails from './pages/ProductDetails';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/products" element={<ProductList />} />
//           {/* <Route path="/" element={<CategoryList />} /> */}
//           {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };
// export default App;

// -------------------------------------------------
// src/App.js
// import React, { useEffect, useState } from 'react';
// import { getProducts } from './services/api';

// function App() {
//   const [product_name, setMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getProducts();
//         console.log(data[0].product_name);
//         setMessage(data[0].product_name);
//       } catch (error) {
//         console.error('Error fetching data', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{product_name}</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
