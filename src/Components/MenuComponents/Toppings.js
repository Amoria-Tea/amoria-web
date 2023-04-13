function Toppings({ toppings }) {
  return (
    <ul class="grid grid-cols-1 gap-2 md:grid-cols-2">
      {toppings.map((topping) => {
        return (
          <li class="justify-self-center">
            <div>X</div>
            <div>{topping.description}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default Toppings;
