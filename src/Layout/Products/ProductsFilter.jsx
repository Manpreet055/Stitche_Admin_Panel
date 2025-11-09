import {
  createTheme,
  MegaMenu,
  MegaMenuDropdown,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  ThemeProvider,
} from "flowbite-react";
import { Filter } from "lucide-react";

const ProductsFilter = () => {
  const customTheme = createTheme({
    base: "",
    color: {
      primary: "bg-white",
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <MegaMenu>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink>
            <MegaMenuDropdown
              toggle={
                <div className="flex items-center gap-2">
                  <Filter size={17} />
                  Filters
                </div>
              }
            >
              <div className=" flex gap-5 w-fit p-4">
                <ul className="gap-3 flex flex-col">
                  <li className="font-medium text-lg">Category</li>
                  <li>Accessories</li>
                  <li>Footwear</li>
                  <li>Kids</li>
                  <li>Men's Wear</li>
                  <li>Women's wear</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="font-medium text-lg">Top Brands</li>
                  <li>Nike</li>
                  <li>Adidas</li>
                  <li>Louis vuitton</li>
                  <li>Versace</li>
                  <li>Balenciaga</li>
                </ul>
              </div>
            </MegaMenuDropdown>
          </NavbarLink>
        </NavbarCollapse>
      </MegaMenu>
    </ThemeProvider>
  );
};

export default ProductsFilter;
