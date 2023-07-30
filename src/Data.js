import imgHTML from "./assets/skills/html.png";
import imgCSS from "./assets/skills/css.png";
import imgJS from "./assets/skills/js.png";
import imgReact from "./assets/skills/react.png";
import imgNextjs from "./assets/skills/nextjs.png";
import imglaravel from "./assets/skills/laravel.png";
import imgJquery from "./assets/skills/jquery.png";
import imgTailwind from "./assets/skills/tailwindcss.png";
import imgBootstrap from "./assets/skills/bootstrap.png";
import imgMui from "./assets/skills/mui.png";
import imgNodejs from "./assets/skills/nodejs.png";
import imgPhp from "./assets/skills/php.png";
import imgMysql from "./assets/skills/mysql.png";
import imgMongodb from "./assets/skills/mongodb.png";
import imgPostman from "./assets/skills/postman.png";
import imgGithub from "./assets/skills/github.png";
import imgUipath from "./assets/skills/uipath.png";
import imgOffice from "./assets/skills/office.png";
import imgPhotoshop from "./assets/skills/photoshop.png";
const Skills = {
  frontend: {
    basic: [
      {
        name: "html",
        img: imgHTML,
      },
      {
        name: "css",
        img: imgCSS,
      },
      {
        name: "javascript",
        img: imgJS,
      },
    ],
    framework: [
      {
        name: "react",
        img: imgReact,
      },
      {
        name: "nextjs",
        img: imgNextjs,
      },
      {
        name: "laravel",
        img: imglaravel,
      },
      {
        name: "jquery",
        img: imgJquery,
      },
      {
        name: "tailwind css",
        img: imgTailwind
      },
      {
        name: "bootstrap",
        img: imgBootstrap
      },
      {
        name: "MaterialUI",
        img: imgMui
      }
    ],
  },
  backend: {
    lang: [
      {
        name: "nodejs",
        img: imgNodejs
      },
      {
        name: "php",
        img: imgPhp
      }
    ],
    database: [
      {
        name: "mysql",
        img: imgMysql
      },
      {
        name: "mongodb",
        img: imgMongodb
      },
    ],
  },
  other: {
    app: [
      {
        name: "postman",
        img: imgPostman
      },
      {
        name: "github",
        img: imgGithub
      },
      {
        name: "uipath",
        img: imgUipath
      },
      {
        name: "ms office",
        img: imgOffice
      },
      {
        name: "photoshop",
        img: imgPhotoshop
      },

    ],
  },
};

export default Skills;
