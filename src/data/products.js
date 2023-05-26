import milkTeaImg from "../Components/SiteImg/menu-images/milk-tea.png";
import houseOfMilkTeaImg from "../Components/SiteImg/menu-images/house-of-milk-tea.png";
import blueJasmineImg from "../Components/SiteImg/menu-images/blue-jasmine.png";
import matchaCoffeeImg from "../Components/SiteImg/menu-images/matcha-coffee.png";
import strawberryMatchaLatteImg from "../Components/SiteImg/menu-images/strawberry-matcha-latte.png";
import pomPomImg from "../Components/SiteImg/menu-images/pom-pom.png";
import sunBlossomImg from "../Components/SiteImg/menu-images/sun-blossom.png";
import fruitTeaImg from "../Components/SiteImg/menu-images/fruit-tea.png";
import mangoPomeloSagoImg from "../Components/SiteImg/menu-images/mango-pomelo-sago.png";
import ubeHalayaImg from "../Components/SiteImg/menu-images/ube-halaya.png";
import onyxBerryImg from "../Components/SiteImg/menu-images/onyx-berry.png";
import tapiocaPearlsImg from "../Components/SiteImg/menu-images/tapioca-pearls.png";
import lycheeJellyImg from "../Components/SiteImg/menu-images/lychee-jelly.png";
import seaSaltFoamImg from "../Components/SiteImg/menu-images/sea-salt-foam.png";
import milkImg from "../Components/SiteImg/menu-images/milk.png";

const products = [
  {
    name: "Milk Tea",
    image: milkTeaImg,
    items: [
      {
        name: "House of Milk Tea",
        description: "House blend black tea.",
        special: "Choice of dairy.",
        image: houseOfMilkTeaImg,
      },
      {
        name: "Blue Jasmine",
        description: "Butterfly pea flower tea, jasmine tea.",
        special: "Choice of dairy.",
        image: blueJasmineImg,
      },
      {
        name: "Matcha Coffee",
        description:
          "Ceremonial grade matcha, speciality grade coffee espresso shot.",
        special: "Choice of dairy.",
        image: matchaCoffeeImg,
      },
      {
        name: "Strawberry Matcha Latte",
        description: "Homemade strawberry puree, ceremonial grade matcha.",
        special: "Choice of dairy.",
        image: strawberryMatchaLatteImg,
      },
    ],
  },
  {
    name: "Fruit Tea",
    image: fruitTeaImg,
    items: [
      {
        name: "Pom Pom",
        description: "Pomelo chunks, pomegranate juice, jasmine tea.",
        special: "*Seasonal*",
        image: pomPomImg,
      },
      {
        name: "Sun Blossom",
        description: "Fresh orange, peach, seltzer, rock oolong tea.",
        image: sunBlossomImg,
      },
      {
        name: "Fruit Tea",
        description:
          "Homemade lychee puree, apple and orange slices, pineapple chunks, chia seeds, and jasmine tea.",
        image: fruitTeaImg,
      },
      {
        name: "Mango Pomelo Sago",
        description:
          "Mangoes, pomelo chunks, sago, coconut cream, jasmine tea.",
        special: "Choice of dairy.",
        image: mangoPomeloSagoImg,
      },
    ],
  },
  {
    name: "Specialties",
    image: ubeHalayaImg,
    items: [
      {
        name: "Ube Halaya",
        description: "Homemade ube puree.",
        special: "Choice of dairy.",
        image: ubeHalayaImg,
      },
      {
        name: "Onyx Berry",
        description:
          "Blueberry, pineapple, coconut cream, splash of rose water.",
        special: "Choice of dairy.",
        image: onyxBerryImg,
      },
    ],
  },
  {
    name: "Toppings",
    image: tapiocaPearlsImg,
    items: [
      {
        name: "Tapioca Pearls",
        image: tapiocaPearlsImg,
      },
      {
        name: "Lychee Jelly",
        image: lycheeJellyImg,
      },
      {
        name: "Sea Salt Foam",
        image: seaSaltFoamImg,
      },
      {
        name: "Milk",
        special: "Dairy Milk, Oatly Oat Milk, Califa Almond Milk",
        image: milkImg,
      },
    ],
  },
];

export default products;
