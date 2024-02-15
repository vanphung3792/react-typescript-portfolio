import {
    HomeIcon,
    UserIcon,
    CodeBracketIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/solid';

const iconStyle = `
  h-10
  w-10
  text-light
  rounded-full
  p-1
  hover:text-primary
  hover:scale-110
  hover:bg-light
  transition
  duration-300
  ease-in-out
`;

const Navbar = () => {
    return (
        <nav
            className="
        h-16
        w-[60%]
        bg-primary/65
        rounded-full
        fixed
        bottom-0
        lg:bottom-2
        z-50
        flex
        justify-center
        items-center
        text-light
        mx-[20%]
        lg:w-[50%]
        lg:mx-[25%]
        xl:w-[35%]
        xl:mx-[32.5%]
      "
        >
            <div
                className="
          flex
          justify-around
          items-center
          w-[65%]
        "
            >
                <a href="#">
                    <HomeIcon className={iconStyle} />
                </a>
                <a href="#about">
                    <UserIcon className={iconStyle} />
                </a>
                <a href="#portfolio">
                    <CodeBracketIcon className={iconStyle} />
                </a>
                <a href="#contact">
                    <ChatBubbleOvalLeftEllipsisIcon className={iconStyle} />
                </a>
            </div>
        </nav>
    );
};
export default Navbar;
