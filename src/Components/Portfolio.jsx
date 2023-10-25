/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Peaches Discord Bot",
    description:
      "AI chat bot with auto-moderation for Discord, enhancing user interaction and server management. The bot was deployed on Heroku and featured user profiles using SQLite.",
    url: "https://github.com/nekumartins/Peaches",
  },
  {
    title: "Traffic Sign Detector",
    description:
      "Neural network using TensorFlow to classify road signs, improving road safety by automating the recognition of signs from images.",
    url: "https://github.com/nekumartins/AI-With-Python/tree/main/traffic",
  },
  {
    title: "NAFSH",
    description:
      "Collaboratively built a basic Unix command line interpreter in C, mimicking the functionality of a standard Unix shell. The project aimed to facilitate command execution in a Unix-like environment",
    url: "https://github.com/nekumartins/simple_shell",
  },
  {
    title: "Remote Nurse",
    description:
      "Designed a model for monitoring hypertension risk, empowering users to assess their health. A Flask-based front-end allowed users to input their data conveniently",
    url: "https://github.com/nekumartins/Remote-Nurse",
  },
  {
    title: "My Portfolio Website",
    description:
      "Created using the react.js library and the next.js framework, Site was deployed on Heroku and the domain is registered on GoDaddy. Includes my experience and my technical skills.",
    url: "https://www.chukwuneku.com",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
