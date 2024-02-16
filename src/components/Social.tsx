import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Social = () => {
    const iconStyle =
        'w-6 h-6 hover:scale-125 cursor-pointer transition duration-500 ease-in-out';
    return (
        <div
            className="
            fixed
            text-primary
            bottom-0
            left-0
            z-50
            flex
            flex-col
            gap-4
            justify-center
            items-center
            mx-24
            my-8
        "
        >
            <a href="https://www.linkedin.com/in/vanphungdev/" target="_blank">
                <FaLinkedin className={iconStyle} />
            </a>
            <a href="https://github.com/vanphung3792" target="_blank">
                <FaGithub className={iconStyle} />
            </a>
        </div>
    );
};
export default Social;
