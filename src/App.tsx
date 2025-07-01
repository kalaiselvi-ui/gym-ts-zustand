import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home";
import Benefits from "@/components/benefits";
import OurClasses from "./components/ourClasses";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import useSelectedPageStore from "./stores/useSelectedPageStore";

function App() {
  // const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  //   SelectedPage.Home
  // );
  const selectedPage = useSelectedPageStore((state) => state.selectedPage);
  const setSelectedPage = useSelectedPageStore(
    (state) => state.setSelectedPage
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelectedPage]);
  return (
    <>
      <div className="app">
        <Navbar isTopOfPage={isTopOfPage} />
        <div className="">
          {/* <Home setSelectedPage={setSelectedPage} />
          <Benefits setSelectedPage={setSelectedPage} />
          <OurClasses setSelectedPage={setSelectedPage} />
          <ContactUs setSelectedPage={setSelectedPage} /> */}
          <Home />
          <Benefits />
          <OurClasses />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
