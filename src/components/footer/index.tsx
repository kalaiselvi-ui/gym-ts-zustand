import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0 space-y-3">
          <img src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            ipsam porro molestiae fuga veniam beatae suscipit aspernatur saepe,
            vero eum. Totam hic officiis voluptatibus aliquam laborum harum est
            iusto esse.
          </p>
          <p>@ Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravita id et timesa</p>
          <p>Ullamcorper Vivamas </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">XYZ Near Bus Stop</p>
          <p>+91 99 23 123 244</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
