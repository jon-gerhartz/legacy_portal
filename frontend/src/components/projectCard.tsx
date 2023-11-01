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
  const src = decodeURIComponent(getFirstImageOrDefault(item, projects_backup));
  console.log(src);
  return (
    <a href={`/projects/${item.id}`}>
      <div className="h-100 border-2 border-gray-300">
        <div className="items-center">
          <img src={src} alt="img" className={imgClassName} />
        </div>
        <div className="p-4 hover:opacity-50">
          <h1 className="text-xl font-bold">{item["deal_name"]}</h1>
          <p className="text-md">{item.location}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
