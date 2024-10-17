import mongodbImg from "../img/mongodb.jpg";
import reactjsImg from "../img/logo512.png";
import expressImg from "../img/expressjs.png";
import tailwindImg from "../img/tailwind.svg";
import goImg from "../img/go.svg";
import postgreImg from "../img/postgre.png";
import nextjsImg from "../img/nextjs.png";
import mysqlImg from "../img/mysql.png";
import javascriptImg from "../img/javascript.png";
import typescriptImg from "../img/typescript.png";
import bulmaImg from "../img/bulma.png";
import bootstrapImg from "../img/bootstrap.png";

export type TechItem = {
  url: string;
  img: string;
};

export type TechList = {
  [key: string]: TechItem;
};

export const techList: TechList = {
  express: {
    url: "https://expressjs.com/",
    img: expressImg,
  },
  reactjs: {
    url: "https://react.dev/",
    img: reactjsImg,
  },
  mongodb: {
    url: "https://www.mongodb.com/",
    img: mongodbImg,
  },
  tailwind: {
    url: "https://tailwindcss.com/",
    img: tailwindImg,
  },
  go: {
    url: "https://go.dev/",
    img: goImg,
  },
  postgresql: {
    url: "https://www.postgresql.org/",
    img: postgreImg,
  },
  mysql: {
    url: "https://www.mysql.com/",
    img: mysqlImg,
  },
  nextjs: {
    url: "https://nextjs.org/",
    img: nextjsImg,
  },
  javascript: {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: javascriptImg,
  },
  typescript: {
    url: "https://www.typescriptlang.org/",
    img: typescriptImg,
  },
  bootstrap: {
    url: "https://getbootstrap.com/",
    img: bootstrapImg,
  },
  bulma: {
    url: "https://bulma.io/",
    img: bulmaImg,
  },
};
