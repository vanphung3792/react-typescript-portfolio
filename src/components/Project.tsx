type ProjectProps = {
    item: {
        title: string;
        description: string;
        technologies: string[];
        imgUrl: string;
        url: string;
        ghUrl: string;
    };
};

const Project = ({ item }: ProjectProps) => {
    console.log(item.imgUrl);
    return (
        <div
            className="
                flex
                flex-col
                bg-primary
                rounded-lg
                shadow
                border-4
                border-primary
                w-[85%]
                h-[100%]
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-105
                md:w-[95%]
                lg:w-[85%]
                xl:w-[90%]
            "
        >
            {/* IMG */}
            <img
                src={
                    item.imgUrl === ''
                        ? './images/portfolio/workInProgress.jpg'
                        : item.imgUrl
                }
                alt={item.title}
                className="
                    rounded-t-lg
                    border-b-2
                    border-primary
                "
            />

            {/* Details */}
            <div
                className="
                    bg-light
                    p-4
                    flex
                    flex-col
                    gap-y-4
                    rounded-b-lg
                    grow
                "
            >
                <h6
                    className="
                        uppercase
                        text-dark
                        font-medium
                    "
                >
                    {item.title}
                </h6>

                {/* Github */}
                <div
                    className="
                        flex
                        flex-row
                        gap-2
                    "
                >
                    {item.url === '' ? (
                        ''
                    ) : (
                        <a
                            href={item.url}
                            target="blank"
                            className="btn-secondary link-btn"
                        >
                            Live
                        </a>
                    )}
                    {item.ghUrl === '' ? (
                        ''
                    ) : (
                        <a
                            href={item.ghUrl}
                            target="blank"
                            className="btn-secondary link-btn"
                        >
                            Github
                        </a>
                    )}
                </div>

                {/* Description */}
                <p className="text-sm font-light">{item.description}</p>

                {/* Technologies */}
                <div
                    className="
                        flex
                        flex-row
                        gap-2
                        flex-wrap
                    "
                >
                    {item.technologies.map((tech, id) => (
                        <span key={id} className="button">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
