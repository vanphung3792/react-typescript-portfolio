import { MapPinIcon, ClockIcon  } from "@heroicons/react/24/solid"
import skills from '../data/skills.json'
import experience from '../data/experience.json'

const About = () => {

  const iconStyle = `
    w-6
    h-6
  `
  return (
    <div
      id="about"
      className="
        min-h-screen
        w-[90%]
        mx-auto
        pt-[10%]
        pb-[20%]
        flex
        flex-col
        justify-center
        items-center
        text-center
        gap-y-12
        xl:pt-[5%]
        xl:pb-[10%]
        xl:w-[76%]
        xl:gap-y-16
      "
    >
      <div
        className="
          lg:w-[65%]
          xl:w-[55%]
        "
      >
        <h3>who I am</h3>
        <h2>- ABOUT ME -</h2>
        <div
          className="
            mt-4
            text-[95%]
          "
        >
          <p>I'm a web developer based in Ottawa, ON.</p>
          <p>I'm on the way making small stuff that I love for fun and learning in my free time.</p>
          <p>Always looking for new opportunities to learn and grow as a developer.</p>
        </div>
      </div>

      <div
        className="
          h-[1px]
          w-[20%]
          bg-dark
        "
      ></div>
      
      <div
        className="
          flex
          flex-col
          gap-y-12
        "
      >
        <div
          className="
            lg:w-[85%]
            lg:mx-auto
            xl:w-[65%]
          "
        >
          <h4>WHAT I'M DOING</h4>
          <p className="mt-4">
            Currently, I'm making a small app for my English learners to help them keep practicing and improve their English, and on my end, gaining more knowledge about web development and learning new technologies to improve my skills on Linkedin Learning and Youtube.
          </p>
          
        </div>
          <div>
            <h4>SKILLS & ABILITIES</h4>
            <ul
              className="
                mt-4
                lg:grid
                lg:grid-cols-3
                lg:gap-2
                lg:w-[75%]
                lg:mx-auto
              "
            >
              {skills.map((skill, id) => <li key={id} className="mt-1 text-dark">{skill}</li>)}
            </ul>
          </div>
      </div>

      {/* Experience */}
      <div>
        <h4>EXPERIENCE</h4>
        {experience.map((exp, id) => (
          <div
            key={id}
            className="
              border-2
              border-t-primary
              border-l-primary
              rounded-lg
              mt-8
              p-8
              w-[90%]
              mx-auto
              text-left
              shadow-lg
              xl:w-[85%]
            "
          >
            <h5
              className="
                font-semibold
                text-lg
                text-primary
                underline
                xl:text-xl
              "
            >{exp.title}</h5>
            <div
              className="
                flex
                items-center
                gap-x-4
                my-2
                text-sm
                xl:text-base
              "
            >
              <div
                className="
                  flex
                  gap-x-2
                  items-center
                  text-dark
                "
              >
                <MapPinIcon className="w-4 h-4" />
                <p>{exp.company}</p>
              </div>
              <div
                className="
                  flex
                  gap-x-2
                  items-center
                  text-dark
                "
              >
                <ClockIcon className="w-4 h-4" />
                <p>{exp.year}</p>
              </div>
            </div>
            <ul
              className="
                mt-4
                w-[90%]
                mx-auto
                list-disc
              "
            >
              {exp.description.map((desc, id) => (
                <li key={id}
                  className="
                    text-sm
                    mt-4
                    text-justify
                    xl:text-base
                  "
                >{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Background */}
      <div>
        <h4>EDUCATION</h4>
        <div
          className="
            bg-gradient-to-b from-primary/50 to-primary/10
            border-2 border-b-primary
            w-[350px]
            h-[200px]
            rounded-t-full
            mt-12
            flex
            flex-col
            justify-center
            items-center
            gap-y-2
            pt-16
            text-primary
            shadow-2xl
            xl:w-[500px]
            xl:h-[300px]
          "
        >
          <h5
            className="
              font-medium
              text-lg
              xl:text-2xl
            "
          >Interactive Media Design</h5>
          <div
            className="
              text-sm
              flex
              flex-col
              justify-center
              items-center
              gap-y-2
              xl:text-base
              xl:gap-y-4
              xl:mt-6
            "
          >
            <div
              className="
                flex
                gap-x-2
                items-center
              "
            >
              <ClockIcon className={iconStyle} />
              <span>2021 - 2023</span>
            </div>
            <div
              className="
                flex
                gap-x-2
                items-center
              "
            >
              <MapPinIcon className={iconStyle} />
              <span>Algonquin College</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About