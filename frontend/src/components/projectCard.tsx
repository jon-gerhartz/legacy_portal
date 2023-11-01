import projects_backup from "../assets/projects_backup.jpg";

interface Props {
  item: any;
}
const imgClassName = "h-80 object-cover hover:opacity-50";

function getFirstImageOrDefault(item: any, defaultVal: string) {
  if (item && item.rendering && item.rendering.length > 0) {
    return item.rendering[0].thumbnails.large.url;
  }
  return defaultVal;
}

const ProjectCard = ({ item }: Props) => {
  const src = getFirstImageOrDefault(item, projects_backup);
  const cardStyle = {
    backgroundImage: `url(${src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "400px", // Set your desired height
  };
  return (
    <a href={`/projects/${item.id}`}>
      <div className="h-100 border-2 border-gray-300">
        <div style={cardStyle} className="h-100"></div>
        <div className="p-4 hover:opacity-50">
          <h1 className="text-xl font-bold">{item["deal_name"]}</h1>
          <p className="text-md">{item.location}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
