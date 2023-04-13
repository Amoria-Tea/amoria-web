function Drinks1({ drinks }) {
  return (
    <ul class="grid grid-cols-1 gap-2 md:grid-cols-2">
      {drinks.map((drink) => {
        return (
          <li class="justify-self-center">
            <div>X</div>
            <div>{drink.description}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default Drinks1;
