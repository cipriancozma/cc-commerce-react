import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory";

const Homepage = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      image: require("../../assets/pictures/hats.jpg"),
    },
    {
      id: 2,
      title: "Jackets",
      image: require("../../assets/pictures/jackets.jpg"),
    },
    {
      id: 3,
      title: "Sneakers",
      image: require("../../assets/pictures/sneakers.jpg"),
    },
    {
      id: 4,
      title: "Women",
      image: require("../../assets/pictures/women.jpg"),
    },
    {
      id: 5,
      title: "Men",
      image: require("../../assets/pictures/men.jpg"),
    },
  ];

  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
};

export default Homepage;
