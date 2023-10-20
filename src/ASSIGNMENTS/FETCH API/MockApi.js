

// import React, { useState, useEffect } from 'react';

// const MockApi = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setError(null);
//         setLoading(true);
        
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const jsonData = await response.json();
//         setData((prevData) => [...prevData, ...jsonData]);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

//   const handleLoadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const renderList = () => {
//     return data.map((item) => <li key={item.id}>{item.title}</li>); 
//   };

//   return (
//     <div className='contain'>
//       <ul>{renderList()}</ul>
//       {loading && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       <button className='b2' onClick={handleLoadMore}>HAVE SOME LOADING</button>
//     </div>
//   );
// };

// export default MockApi;
