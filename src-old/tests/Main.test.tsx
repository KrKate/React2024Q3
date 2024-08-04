// import { Provider } from 'react-redux';
// import { RouterProvider } from 'react-router-dom';
// import { vi } from 'vitest';
// import { render } from '@testing-library/react';
// import router from '../router';
// import store from '../redux/store';

// vi.mock('@reduxjs/toolkit/query/react', async (importOriginal) => {
//   const actual =
//     (await importOriginal()) as typeof import('@reduxjs/toolkit/query/react');

//   return {
//     ...actual,
//     fetchBaseQuery: vi.fn(() => async () => ({
//       data: { products: [], total: 0 },
//       error: null,
//     })),
//   };
// });

// global.fetch = vi.fn(() =>
//   Promise.resolve(
//     new Response(JSON.stringify({ products: [], total: 0 }), {
//       status: 200,
//       statusText: 'OK',
//       headers: { 'Content-Type': 'application/json' },
//     })
//   )
// );

// describe('Main', () => {
//   it('renders without crashing', () => {
//     const { container } = render(
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     );

//     expect(container).toBeInTheDocument();
//   });
// });
