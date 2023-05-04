import Directory from "./components/directory/directory";

const App = () => {
  const categories = [
    {
      id: 0,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 1,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 3,
      title: "Women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 4,
      title: "Men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return <Directory categories={categories} />;
};
export default App;
