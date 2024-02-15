import React from 'react';

type WorkProps = {
    id: number
    item: {
        title: string
        technologies: string[]
        imgUrl: string
        url: string
    }
}

const Work = ({ id, item }: WorkProps) => {
    return (
        <div
            key={id}
            className='
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
            '
        >
            {/* IMG */}
            <a href={item.url} target='_blank'>
                <img src={item.imgUrl} alt={item.title}
                    className="
                        rounded-t-lg
                        border-b-2
                        border-primary
                    "
                />
            </a>
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
                >{item.title}</h6>
                <div
                    className="
                        flex
                        flex-row
                        gap-2
                        flex-wrap
                    "
                >
                    {item.technologies.map((tech, id) => (
                        <span key={id} className="button">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
                    