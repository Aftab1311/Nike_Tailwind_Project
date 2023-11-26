import Nav from "./Components/Nav"
import CustomerReviewNike from "./sections/CustomerReviewNike"
import FooterNike from "./sections/FooterNike"
import Hero from "./sections/Hero"
import PopularProduct from "./sections/PopularProduct"
import ProServices from "./sections/ProServices"
import SpecialOffer from "./sections/SpecialOffer"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"

const App =() => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero/>
    </section>
     <section className="padding">
     <PopularProduct/>
     </section>
     <section className="padding">
      <SuperQuality/>
     </section>
     <section className="padding">
     <ProServices/>
     </section>
     <section className="padding-x py-10">
     <SpecialOffer/>
     </section>
     <section className="bg-pale-blue padding">
      <CustomerReviewNike/>
     </section>
     <section className="padding-x sm:py-32 w-full">
      <Subscribe/>
     </section>
     <section className="bg-black padding-x padding-t pb-8 text-white">
     <FooterNike/>
     </section>
  </main>
)

export default App