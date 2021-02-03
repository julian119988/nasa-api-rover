import { useEffect, useState } from "react";
const KEY = process.env.REACT_APP_KEY;

export default function Home() {
  let [responseData, setResponseData] = useState("");

  useEffect(() => {
    fetchInfo();
    async function fetchInfo() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${KEY}`
      );
      const data = await res.json();
      setResponseData(data);
    }
  }, []);
  let { url, title } = responseData;

  return (
    <div>
      <h1>{title}</h1>
      <iframe
        src={url}
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
}
