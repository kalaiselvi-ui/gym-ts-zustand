import HTitle from "@/shared/HTitle";
import { SelectedPage, type BenefitType } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import useSelectedPageStore from "@/stores/useSelectedPageStore";

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = () => {
  const setSelectedPage = useSelectedPageStore(
    (state) => state.setSelectedPage
  );
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HTitle>more than just gym</HTitle>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes get
            to your ultimate fitness goals with ease. We provide true care into
            each and every member.
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img src={BenefitsPageGraphic} className="mx-auto" alt="" />
          <div>
            <div className="relative">
              <div
                className="before:absolute before:-top-20 before:-left-20 before:z-[1]
              before:content-abstractwaves"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HTitle>
                    Millions of happy members getting {""}
                    <span className="text-primary-500">fit.</span>
                  </HTitle>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                cumque soluta numquam sit consequatur repudiandae fugit
                molestiae ratione? Facilis itaque temporibus error repellat
                accusantium cupiditate consequatur quibusdam in ipsum
                voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Quaerat tempore dolor dicta natus, quisquam, doloremque
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat tempore dolor dicta natus, quisquam, doloremque
                pariatur, unde rerum iste eos perferendis consequuntur
                voluptatem autem ipsam cum repellendus facilis id reiciendis.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-20 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
