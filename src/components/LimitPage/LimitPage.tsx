type LimitPageProps = {
  handleLimitChange: (limit: number) => void;
};

function LimitPage({ handleLimitChange }: LimitPageProps) {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleLimitChange(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label htmlFor="limit">
        Items per page:
        <select id="limit" onChange={handleSelectChange}>
          <option value="5">5</option>
          <option selected value="10">
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </label>
    </div>
  );
}

export default LimitPage;
