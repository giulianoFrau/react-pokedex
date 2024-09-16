import { Menubar } from "primereact/menubar";

const AppMenu = () => {
  const items = [
    { label: "Tutti i pokemon", icon: "pi pi-list", url: "/" },
    { label: "Il mio pokedex", icon: "pi pi-users", url: "/pokedex" },
    { label: "About", icon: "pi pi-user", url: "/about" },
  ];

  return <Menubar model={items} className=" shadow-md p-4 border-gray-100" />;
};

export default AppMenu;
