import NextJS from "/src/components/icons/NextJS.astro"
import Tailwind from "/src/components/icons/Tailwind.astro"
import Laravel from "/src/components/icons/Laravel.astro"
import Mysql from "/src/components/icons/Mysql.astro"
import Sqlite from "/src/components/icons/Sqlite.astro"
import Postgres from "/src/components/icons/Postgres.astro"
import Bootstrap from "/src/components/icons/Bootstrap.astro"
import Php from "/src/components/icons/Php.astro"
import Python from "/src/components/icons/Python.astro"
import Django from "/src/components/icons/Django.astro"
import Vue from "@/components/icons/Vue.astro"
import Vuetify from "@/components/icons/Vuetify.astro"
import Mongo from "@/components/icons/Mongo.astro"
import Figma from "@/components/icons/Figma.astro"
 
export const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: NextJS,
    },
    VUE: {
      name: "Vue.js",
      class: "bg-black text-[#41B883]",
      icon: Vue,
    },
    VUETI: {
      name: "Vuetify",
      class: "bg-[#003159] text-[#7BC6FF]",
      icon: Vuetify,
    },
    FIGMA: {
      name: "Figma",
      class: "bg-black text-white",
      icon: Figma,
    },
    MONGO: {
      name: "MongoDB",
      class: "bg-black text-white",
      icon: Mongo,
    },
    MYSQL: {
      name: "MySql",
      class: "bg-black text-white",
      icon: Mysql,
    },
    SQLITE: {
      name: "SQLite",
      class: "bg-white text-black",
      icon: Sqlite,
    },
    POSTGRES: {
      name: "PostgreSql",
      class: "bg-black text-white",
      icon: Postgres,
    },
    BOOTSTRAP: {
      name: "Bootstrap",
      class: "bg-black text-white",
      icon: Bootstrap,
    },
    DJANGO: {
      name: "Django",
      class: "bg-black text-white",
      icon: Django,
    },
    PYTHON: {
      name: "Python",
      class: "bg-[#003159] text-white",
      icon: Python,
    },
    TAILWIND: {
      name: "Tailwind",
      class: "bg-[#003159] text-white",
      icon: Tailwind,
    },
    LARAVEL: {
      name: "Laravel",
      class: "bg-black text-[#FF2D20]",
      icon: Laravel,
    },
    PHP: {
      name: "PHP",
      class: "bg-[#003159] text-white",
      icon: Php,
    },
  }