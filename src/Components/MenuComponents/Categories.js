import CategoryBox from "./CategoryBox";
import milkTeaImg from "../SiteImg/menu-images/milk-tea.png";
import fruitTeaImg from "../SiteImg/menu-images/fruit-tea.png";
import specialtyImg from "../SiteImg/menu-images/specialty.png";
import toppingsImg from "../SiteImg/menu-images/tapioca-pearls.png";

const categoriesArr = [
  {
    name: "Milk Tea",
    page: 2,
    image: milkTeaImg,
  },
  {
    name: "Fruit Tea",
    page: 3,
    image: fruitTeaImg,
  },
  {
    name: "Specialties",
    page: 4,
    image: specialtyImg,
  },
  { name: "Toppings", page: 5, image: toppingsImg },
];

function Categories({ setPage }) {
  return (
    <ul class="grid grid-cols-1 gap-20 md:grid-cols-2 p-10">
      {categoriesArr.map((category) => {
        return <CategoryBox category={category} setPage={setPage} />;
      })}
    </ul>
  );
}

export default Categories;
