import Body from "../components/body";
import CardGroup from "../components/projectCardGroup";
import Header from "../components/header";
import Navigation from "../components/navigation";
import { useEffect, useState } from "react";

function Projects() {
  const [devPipeline, setDevPipeline] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:7500/projects");
        const devPipeline = await response.json();
        setDevPipeline(devPipeline.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <Header>
        <h2 className="text-4xl text-neutral-content font-bold">
          Our Projects
        </h2>
      </Header>
      <Body>
        <div>
          <CardGroup items={devPipeline}></CardGroup>
        </div>
      </Body>
    </>
  );
}

export default Projects;
