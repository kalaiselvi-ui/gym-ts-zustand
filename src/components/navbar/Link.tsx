import type { SelectedPage } from "@/shared/types";
import useSelectedPageStore from "@/stores/useSelectedPageStore";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  // selectedPage: SelectedPage;
  // setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page }: Props) => {
  const selectedPage = useSelectedPageStore((state) => state.selectedPage);
  const setSelectedPage = useSelectedPageStore(
    (state) => state.setSelectedPage
  );
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
