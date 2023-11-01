import Body from "../components/body";
import Header from "../components/header";
import Navigation from "../components/navigation";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <>
      <Navigation />
      <Header>
        <h2 className="text-4xl text-neutral-content">
          <strong>{id}</strong>
        </h2>
      </Header>
      <Body>
        <p>Body text</p>
      </Body>
    </>
  );
};

export default ProjectDetails;
