import { useState, useCallback, useEffect } from "react";
import { client } from "./BlogData";

const Mydata = () => {
  const [data, setData] = useState([]);
  const bringData = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "blog",
      });
      const responseData = response.items;
      if (responseData) {
        setData(responseData);
        console.log(responseData);
      } else {
        data([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      bringData();
    };
  });
  return { data };
};

export default Mydata;
