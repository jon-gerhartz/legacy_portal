import { ReactNode } from "react";
import projects_backup from "../assets/projects_backup.jpg";
import ProjectCard from "./projectCard";

interface Props {
  items: any[];
}

const CardGroup = ({ items }: Props) => {
  return (
    <>
      <div className="grid auto-rows-fr justify-center gap-12 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {items.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default CardGroup;
