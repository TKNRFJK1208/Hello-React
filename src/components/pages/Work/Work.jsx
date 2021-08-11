import { useEffect, useState} from "react";
import "./Work.scss";
import PortfolioList from '../../PortfolioList/PortfolioList';
import Icon from '../../Icon/Icon';
import Footer from '../../Footer/Footer';
import ReactDom from "react-dom";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import {
  featuredProjects,
  webApp,
  webSite
} from "../../../data";

export default function Work() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "webapp",
      title: "Web App",
    },
    {
      id: "website",
      title: "Website",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredProjects);
        break;
      case "webapp":
        setData(webApp);
        break;
      case "website":
        setData(webSite);
        break;
      default:
        setData(featuredProjects);
    }
  }, [selected]);

  const [show, setShow] = useState(false);

  const openDetail = (i) => {
    openProject(i)
  }

  function openProject (t) {
    const pId = t.target.id
    const project = data.find((d) => {
      return (d.id === parseInt(pId))
    });

    for (var i = 0; i <= data.length-1; i++) {
      if(data[i].id === parseInt(pId)) {
        setShow(true)
        ReactDom.render(
          <div className="container">
            <h2>{project.title}</h2>
            <section className="sec1">
              <div className="col-left">
                <h3>Overview</h3>
                <p>{project.p1}</p>
              </div>
              <div className="col-right">
                <img src={project.img1} alt={project.title} />
              </div>
            </section>
            <section className="sec2">
              <div className="col-right">
                <h3>Coding Process</h3>
                <p>{project.p2}</p>
              </div>
              <div class="col-left">
                <img src={project.img2} alt={project.title} />
              </div>
            </section>
            <section className="detail">
              <div className="col-left">
                <div className="title">
                  <p><b>title</b></p>
                  <p>{project.title}</p>
                </div>
                <div className="date">
                  <p><b>date</b></p>
                  <p>{project.date}</p>
                </div>
              </div>
              <div className="col-right">
                <div className="role">
                  <p><b>role</b></p>
                  <p>{project.role}</p>
                </div>
                <div className="skills">
                  <p><b>skills</b></p>
                  <p>{project.skills}</p>
                </div>
              </div>
            </section>
            <section className="sec3">
              <h3>Final Product Images</h3>
              <div className="img-sec">
                <img src={project.img3} alt={project.title} />
                <img src={project.img4} alt={project.title} />
              </div>
            </section>
            <div className='cta-sec'>
              <button className='btn' onClick={() => setShow(false)}>
                <ArrowBackIcon className="icon" />
                <span>BACK</span>
              </button>
              <a className='btn' href={project.url} target="_blank" rel="noreferrer">
                <OpenInNewIcon className="icon" />
                <span>VISIT</span>
              </a>
            </div>
          </div>,
          document.getElementById("portal")
        )
      } 
    };
  };

  return (
    <>
      <div id="portal"></div>
      <div className={show ? "portfolio active" : "portfolio"} id="portfolio">
        <h1>My Projects</h1>
        <div class="dropdown">
          <ul>
            {list.map((item) => (
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img
                onClick={openDetail}
                src={d.img1}
                alt="Project"
                id={d.id}
              /> 
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Icon />
      <Footer />
    </>
  );
}