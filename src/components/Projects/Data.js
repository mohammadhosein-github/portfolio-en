import React from "react";
import jqueryLogo from "../../images/jq-logo.png";
import webpackLogo from "../../images/webpack-logo.png";
import ReduxLogo from "../../images/redux.png";
import pj1Pic from "../../images/pj1-img.png";
import pj2Pic from "../../images/pj2-img.png";
import pj3Pic from "../../images/pj3-img.png";
import pjPortfolio from "../../images/pj-portfolio.png";
import yummyMenu from "../../images/yummy-menu.png";
import BusinessBlog from "../../images/business-blog.png";
import BarBlog from "../../images/bar-blog.png";
import ShoppingPage from "../../images/shopping-page.png";
import MongoDB from "../../images/mongodb.png";
import Jest from "../../images/jest.png";
import Typescript from "../../images/typescript.png";
import Nodejs from "../../images/node.png";

export const skills = [
  { name: "HTML", icon: <i className="fab fa-html5"></i> },
  { name: "CSS", icon: <i className="fab fa-css3-alt"></i> },
  { name: "JavaScript", icon: <i className="fab fa-js-square"></i> },
  { name: "TypeScript", icon: <img src={Typescript} alt="typescript"></img> },
  { name: "React", icon: <i className="fab fa-react"></i> },
  { name: "Redux", icon: <img src={ReduxLogo} alt="redux"></img> },
  { name: "Node JS", icon: <img src={Nodejs} alt="node.js"></img> },
  { name: "MongoDB", icon: <img src={MongoDB} alt="mongodb"></img> },
  { name: "Jest", icon: <img src={Jest} alt="jest"></img> },
  { name: "Sass", icon: <i className="fab fa-sass"></i> },
  { name: "Bootstrap", icon: <i className="fab fa-bootstrap"></i> },
  { name: "Github", icon: <i className="fab fa-github"></i> },
  { name: "JQuery", icon: <img src={jqueryLogo} alt="jquery" /> },
  {
    name: "Webpack",
    icon: <img className="webpack" src={webpackLogo} alt="webpack"></img>,
  },
];

export const projects_data = [
  {
    name: "Yummy Menu",
    demo_link: "https://yummy-menu-app.herokuapp.com/",
    github_link: "https://github.com/mohammadhosein-github/yummy-menu",
    project_img: yummyMenu,
    technologies: [
      "html",
      "css",
      "javascript",
      "next js",
      "mongodb",
      "node js",
      "sass",
      "git",
    ],
  },
  {
    name: "Business webpage",
    demo_link: "https://mohammadhosein-github.github.io/Mini.Css_Animation/",
    github_link: "https://github.com/mohammadhosein-github/Mini.Css_Animation",
    project_img: BusinessBlog,
    technologies: [
      "html",
      "css",
      "javascript",
      "bootstrap",
      "sass",
      "jquery",
      "git",
    ],
  },
  {
    name: "Bar webpage",
    demo_link:
      "https://mohammadhosein-github.github.io/Advanced_Sass-Loading_Animation/",
    github_link:
      "https://github.com/mohammadhosein-github/Advanced_Sass-Loading_Animation",
    project_img: BarBlog,
    technologies: [
      "html",
      "css",
      "javascript",
      "bootstrap",
      "sass",
      "jquery",
      "git",
    ],
  },
  {
    name: "Project 3.0",
    demo_link: "https://mohammadhosein-github.github.io/project-3.0/",
    github_link: "https://github.com/mohammadhosein-github/project-3.0",
    project_img: pj3Pic,
    technologies: [
      "html",
      "css",
      "javascript",
      "bootstrap",
      "sass",
      "jquery",
      "git",
    ],
  },
  {
    name: "Shopping Page",
    demo_link: "https://ecstatic-perlman-61ec4a.netlify.com/",
    github_link: "https://github.com/mohammadhosein-github/product_page_react",
    project_img: ShoppingPage,
    technologies: [
      "html",
      "css",
      "javascript",
      "bootstrap",
      "sass",
      "react",
      "git",
    ],
  },
  {
    name: "Project 2.0",
    demo_link: "https://mohammadhosein-github.github.io/project-2.0",
    github_link: "https://github.com/mohammadhosein-github/project-2.0",
    project_img: pj2Pic,
    technologies: ["html", "css", "bootstrap", "sass", "git"],
  },
  {
    name: "Project 1.0",
    demo_link: "https://mohammadhosein-github.github.io/project-1.0",
    github_link: "https://github.com/mohammadhosein-github/project-1.0",
    project_img: pj1Pic,
    technologies: ["html", "css", "bootstrap", "git"],
  },
];
