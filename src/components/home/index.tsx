import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphics from "@/assets/HomePageGraphic.png";
import redBull from "@/assets/SponsorRedBull.png";
import Forbes from "@/assets/SponsorForbes.png";
import Fortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";
import useSelectedPageStore from "@/stores/useSelectedPageStore";

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

const Home = () => {
  const setSelectedPage = useSelectedPageStore(
    (state) => state.setSelectedPage
  );

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 md:h-full pt-[96px]">
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center h-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 md:basis-3/5 md:mt-32 mt-7">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[-1] before:-left-20 md:before:content-evolvetext ">
                <img className="" src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start max-w-[400px]">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-items-end">
          <img src={HomePageGraphics} alt="" />
        </div>
      </motion.div>

      {/*Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={redBull} alt="" />
              <img src={Forbes} alt="" />
              <img src={Fortune} alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
