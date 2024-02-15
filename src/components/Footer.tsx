const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            className="
          h-36
          w-full
          bg-primary/80
          flex
          justify-center
          pt-8
          text-light
          font-medium
        "
        >
            <p>&copy; Ann Phung, {year}. All right reserved. </p>
        </footer>
    );
};
export default Footer;
