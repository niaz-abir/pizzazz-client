import ContactUs from "@/components/ContactUs";
import Counting from "@/components/Counting";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial/Testimonial";
import Banner from "@/components/banner";
import BannerFinal from "@/components/bannerFinal";
import Footer from "@/components/footer";
import LatestProduct from "@/components/latestProduct";

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <BannerFinal></BannerFinal>

      <Menu></Menu>
      <Service></Service>

      <LatestProduct></LatestProduct>
      <Counting></Counting>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}
