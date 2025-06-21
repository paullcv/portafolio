// Import a reference to the image itself
import ICPCImage from "../assets/icpc.png"
import TecnicoImage from "../assets/diplomas/Tecnico-medio.jpeg"
import PilaImage from "../assets/diplomas/piladaw.png"
import HenryImage from "../assets/diplomas/henry.png"
import ISWpImage from "../assets/diplomas/analista/copa-isw-p.jpg"
import ISW1Image from "../assets/diplomas/analista/copa-isw1.jpg"
import ISW3Image from "../assets/diplomas/analista/copa-isw3.jpg"
import ISWJCpImage from "../assets/diplomas/analista/copa-jc-isw-p.jpg"
import ISWJC3Image from "../assets/diplomas/analista/copa-jc-isw3.jpg"
import GPIImage from "../assets/diplomas/analista/gpi.png"
import ScrumImage from "../assets/diplomas/analista/scrum.jpg"
import Scrum4Image from "../assets/diplomas/analista/scrum4.png"
import BDpImage from "../assets/diplomas/base_de_datos/copa-bd-p.jpg"
import BD3Image from "../assets/diplomas/base_de_datos/copa-bd3.jpg"
import AAIP1Image from "../assets/diplomas/Programador/aa-ip1.jpg"
import AAIP2Image from "../assets/diplomas/Programador/aa-ip2.jpg"
import CPPImage from "../assets/diplomas/Programador/copa-pascal-p.jpg"
import CP3Image from "../assets/diplomas/Programador/copa-pascal3.jpg"
import EDTImage from "../assets/diplomas/EDTeam/desarrollo-personal.png"
import PlatziImage from "../assets/diplomas/Platzi/Diplomas_del_Curso_de_Fundamentos_de_Python.png"
import SLImage from "../assets/diplomas/SoloLearn/SoloLearnJava.png"
import GGJImage from "../assets/ggj/ggj2024.jpg"

const TAGS = {
    ANALISTA: {
      name: "Analista",
    },
    PROGRAMADOR: {
      name: "Programador",
    },
    DATOS: {
      name: "Base de Datos",
    },
    TEST: {
      name: "Probador",
    },
  };
  
  export const DIPLOMAS = [
    {
      title: "Técnico Medio en Informaticas",
      image: TecnicoImage,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR, TAGS.DATOS, TAGS.TEST],
    }, 
    {
      title: "PILA DESARROLLO DE APLICACIONES WEB",
      link: "../assets/diplomas/piladaw.png",
      image: PilaImage,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR],
    },
    {
      title: "International Collegiate Programming Contest",
      link: "https://drive.google.com/drive/folders/1Km0DgKX6Krkujx1OHA9WP_y2J3KBWl1I?usp=drive_link",
      image: ICPCImage,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR],
    },
    {
      title: "Global Game Jam",
      link: "https://drive.google.com/drive/folders/14VyY4lOyA1LDzRS0w_0DoKWurif8oBXq?usp=drive_link",
      image: GGJImage,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR],
    },
    {
      title: "Admisión a Desarrollo Web en Henry",
      link: "../assets/diplomas/henry.png",
      image: HenryImage,
      tags: [TAGS.PROGRAMADOR],
    },
    //analista
    {
      title: "Participante Copa de ingeniería de Software",
      link: "../assets/diplomas/analista/copa-isw-p.jpg",
      image: ISWpImage,
      tags: [TAGS.ANALISTA],
    },
    {
      title: "Primer Lugar Copa de ingeniería de Software",
      link: "../assets/diplomas/analista/copa-isw1.jpg",
      image: ISW1Image,
      tags: [TAGS.ANALISTA],
    },
    {
      title: "Tercer Lugar Copa de ingeniería de Software",
      link: "../assets/diplomas/analista/copa-isw3.jpg",
      image: ISW3Image,
      tags: [TAGS.ANALISTA],
    },
    {
      title: "Participante Copa de ingeniería de Software",
      link: "../assets/diplomas/analista/copa-jc-isw-p.jpg",
      image: ISWJCpImage,
      tags: [TAGS.ANALISTA],
    },
    {
      title: "Tercer Lugar Copa de ingeniería de Software",
      link: "../assets/diplomas/analista/copa-jc-isw3.jpg",
      image: ISWJC3Image,
      tags: [TAGS.ANALISTA],
    },
    {
      title: "Fundamentos en Gestión de Proyectos",
      link: "../assets/diplomas/analista/gpi.png",
      image: GPIImage,
      tags: [TAGS.ANALISTA],
    },
    {
      title: "Scrum Foundation Professional Certification",
      link: "../assets/diplomas/analista/scrum.jpg",
      image: ScrumImage,
      tags: [TAGS.ANALISTA],
    },
    {
      title: "Scrum Fundamentals Certified",
      link: "../assets/diplomas/analista/scrum4.png",
      image: Scrum4Image,
      tags: [TAGS.ANALISTA],
    },
    //Base de datos
    {
      title: "Participante Copa de Base de Datos",
      link: "../assets/diplomas/base_de_datos/copa-bd-p.jpg",
      image: BDpImage,
      tags: [TAGS.ANALISTA, TAGS.DATOS],
    },
    {
      title: "Tercer Lugar Copa de Base de Datos",
      link: "../assets/diplomas/base_de_datos/copa-bd3.jpg",
      image: BD3Image,
      tags: [TAGS.ANALISTA, TAGS.DATOS],
    },
    //Programador
    {
      title: "Alumno Ayudante de IP1",
      link: "../assets/diplomas/Programador/aa-ip1.jpg",
      image: AAIP1Image,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR],
    },
    {
      title: "Alumno Ayudante de IP2",
      link: "../assets/diplomas/Programador/aa-ip2.jpg",
      image: AAIP2Image,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR],
    },
    {
      title: "Participante Copa Pascal de Programación",
      link: "../assets/diplomas/Programador/copa-pascal-p.jpg",
      image: CPPImage,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR],
    },
    {
      title: "Tercer Lugar Copa Pascal de Programación",
      link: "../assets/diplomas/Programador/copa-pascal3.jpg",
      image: CP3Image,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR],
    },
    //EDTeam
    {
      title: "CertificateS EDTeam",
      link: "https://drive.google.com/drive/folders/1qe4X6c1VwxzZ0mT_UWSpaDclaI68MEZ0?usp=drive_link",
      image: EDTImage,
      tags: [TAGS.ANALISTA, TAGS.PROGRAMADOR, TAGS.DATOS],
    },
    //Platzi
    {
      title: "CertificateS Platzi",
      link: "https://drive.google.com/drive/folders/1LQ4ANNlEG7KbMkGJLLlpSB_6X2TWR-UY?usp=drive_link",
      image: PlatziImage,
      tags: [TAGS.PROGRAMADOR],
    },
    //SoloLearn
    {
      title: "CertificateS SoloLearn",
      link: "https://drive.google.com/drive/folders/1EqG4MEDa1nJ-czQytEAqN5DPwpKeGSNt?usp=drive_link",
      image: SLImage,
      tags: [TAGS.DATOS, TAGS.PROGRAMADOR],
    },
  ];