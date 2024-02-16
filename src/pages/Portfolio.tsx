import Project from '../components/Project';
import projects from '../data/projects.json';

const Portfolio = () => {
    return (
        <div
            id="portfolio"
            className="
                flex
                flex-col
                items-center
                justify-center
                gap-y-4
                p-[10%]
                bg-light
                xl:pt-[5%]
                xl:pb-[10%]
            "
        >
            <h3>some works</h3>
            <h2>- MY PORTFOLIO - </h2>
            <div
                className="
                    flex
                    flex-col-reverse
                    items-center
                    justify-items-center
                    gap-y-12
                    py-8
                    md:grid
                    md:grid-cols-2    
                    md:gap-4
                    lg:gap-y-8
                    lg:gap-x-0
                    xl:grid-cols-3
                    xl:items-start
                    "
            >
                {[...projects].reverse().map((item, id) => (
                    <Project key={id} item={item} />
                ))}
            </div>
        </div>
    );
};
export default Portfolio;
