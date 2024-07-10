interface PaginationProps {
  pagination: {
    productsPerPage: number;
    totalProducts: number;
  };
}

function Pagination({ pagination }: PaginationProps): JSX.Element {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(pagination.totalProducts / pagination.productsPerPage);
    i += 1
  ) {
    pageNumbers.push(1);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li>
            <a href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
