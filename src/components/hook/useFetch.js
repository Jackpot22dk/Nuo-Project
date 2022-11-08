import { useEffect } from "react";
import { useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "content-type": "text/plain",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);

  return [data];
};

export default UseFetch;
