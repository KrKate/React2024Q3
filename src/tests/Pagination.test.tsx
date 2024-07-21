// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { vi } from 'vitest';
// import Pagination from '../components/Pagination/Pagination';

// test('updates URL query parameter when page changes', () => {
//   const onPageChangeMock = vi.fn();
//   render(
//     <MemoryRouter initialEntries={['/page=1']}>
//       <Pagination
//         currentPage={1}
//         totalPages={5}
//         onPageChange={onPageChangeMock}
//       />
//     </MemoryRouter>
//   );
//   fireEvent.click(screen.getByText('2'));
//   expect(onPageChangeMock).toHaveBeenCalledWith(2);
//   window.history.pushState({}, '', '?page=2');
//   expect(window.location.search).toContain('page=2');
// });
