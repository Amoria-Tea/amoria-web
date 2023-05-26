import CategoryBox from "./CategoryBox";

function Categories({ products, setPage, setCurrProducts, setCurrName }) {
  return (
    <ul class="grid grid-cols-1 gap-24 md:grid-cols-2 p-10">
      {products.map((category) => {
        return (
          <CategoryBox
            setPage={setPage}
            category={category}
            key={category.name}
            setCurrProducts={setCurrProducts}
            setCurrName={setCurrName}
          />
        );
      })}
    </ul>
  );
}

export default Categories;
