import Body from "../components/body";
import Navigation from "../components/navigation";
import { useEffect, useState } from "react";

function Home() {
  const [respData, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:7500/t");
        const respData = await response.json();
        setData(respData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Navigation />
      <Body>
        <div>respData</div>
      </Body>
    </>
  );
}

export default Home;
