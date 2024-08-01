import { AboutUs } from "../AboutUs/AboutUs";
import ProductList from "../CategoriesProducts/ProductsList/ProductsList";
import { HomeOrganick } from "../HomeOrganick/HomeOrganick";
import { Promotion } from "../Promotion/Promotion";
import productsData from "../CategoriesProducts/ProductsData/productsData.json";
import { ReviewsList } from "../Reviews/ReviewsList/ReviewsList";
import { OfferList } from "../Offer/OfferList/OfferList";
import NewAbout from "../ContentAbout/NewAbout/NewAbout";
import { ListCompany } from "../AboutCompany/ListCampany/ListCompany";

export function AllHomePage() {
  return (
    <>
      <HomeOrganick />
      <Promotion />
      <AboutUs />
      <ProductList items={productsData} />
      <ReviewsList />
      <OfferList />
      <ListCompany />
      <NewAbout />
    </>
  );
}
