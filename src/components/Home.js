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
  let { url, title, explanation } = responseData;
  console.log(responseData);

  return (
    <div className="columna">
      <h1>{title}</h1>
      <div className="littePadding">
        <div className="fila">
          <iframe src={url} frameBorder="0" allowFullScreen={true}></iframe>
          <div className="pequenio">
            <p> {explanation} </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>All information is provided by NASA APOD API</p>
      </div>
    </div>
  );
}
