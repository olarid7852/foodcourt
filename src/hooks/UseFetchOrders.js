import axios from "axios";
import { useEffect, useState } from "react";


const token = process.env.REACT_APP_API_TOKEN;
const base_url = process.env.REACT_APP_API_BASE_URL;

const useFetchOrders = (user_id) => {

  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const headers = {
    Authorization: `Bearer ${token}`
  };
  useEffect(() => {
    const loadData = async (pageNo) => {
      const url = `user/one/orders/${pageNo}`
      try {
        const response = await axios.post(base_url + url, {
          user_id
        }, { headers });
        setData(response.data.data);
        setLoaded(true);
        return response.data.data;
      } catch (err) {
        setError(err.message);
        setLoaded(true);
        return [];
      }
    };
    const load = async (pageNo, allData) => {
      const pageData = await loadData(pageNo);
      allData[pageNo] = pageData;
      if (pageData.length) {
        load(pageNo + 1, allData);
      };
      setData(allData);
    }
    load(1, {});
  }, [user_id]);
  return { data, error, loaded };
};

export default useFetchOrders;