import HTitle from "@/shared/HTitle";
import { SelectedPage, ClassesType } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./Class";
import useSelectedPageStore from "@/stores/useSelectedPageStore";

const classes: Array<ClassesType> = [
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolor a omnis vitae veniam optio, officiis enim ullam sequi necessitatibus aut. Nam perferendis hic, explicabo molestias quis dicta libero autem.",
    image: image1,
  },

  {
    name: "Yoga Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolor a omnis vitae veniam optio, officiis enim ullam sequi necessitatibus aut. Nam perferendis hic, explicabo molestias quis dicta libero autem.",
    image: image2,
  },

  {
    name: "Ab core Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolor a omnis vitae veniam optio, officiis enim ullam sequi necessitatibus aut. Nam perferendis hic, explicabo molestias quis dicta libero autem.",
    image: image3,
  },

  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolor a omnis vitae veniam optio, officiis enim ullam sequi necessitatibus aut. Nam perferendis hic, explicabo molestias quis dicta libero autem.",
    image: image4,
  },

  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolor a omnis vitae veniam optio, officiis enim ullam sequi necessitatibus aut. Nam perferendis hic, explicabo molestias quis dicta libero autem.",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolor a omnis vitae veniam optio, officiis enim ullam sequi necessitatibus aut. Nam perferendis hic, explicabo molestias quis dicta libero autem.",
    image: image6,
  },
];

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

const OurClasses = () => {
  const setSelectedPage = useSelectedPageStore(
    (state) => state.setSelectedPage
  );
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HTitle>Our Classes</HTitle>
            <p className="py-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur dolor a omnis vitae veniam optio, officiis enim ullam
              sequi necessitatibus aut. Nam perferendis hic, explicabo molestias
              quis dicta libero autem.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
