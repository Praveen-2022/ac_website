import Banner from "@/components/Banner";
import GasfillingCharges from "@/components/GasfillingCharges";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* hero Section
      Safety Section
      Ous Services
      Our Products
      Services We Offer
      About Us
      Banner
      Footer */}
      <h1>Namrata Enterprises</h1>
      <Banner />
      <GasfillingCharges/>
      <Footer />
    </main>
  );
}
