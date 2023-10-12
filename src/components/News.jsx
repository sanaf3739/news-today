import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  // Default values
  const category = props.category;
  const country = "in";
  const pageSize = 6;
  const API_KEY = "da00b4c4c5c8400785932394275d8a18";
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&/sources&category=${category}&apikey=${API_KEY}&pageSize=${pageSize}`;

  // function to fetch the News data
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(`${url}&page=${page}`);
      setTotalResults(response.data.totalResults);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(`There is an error in API call ${error}`);
    }
    setLoading(false);
  }
  useEffect(() => {
    setPage(1);
    fetchData();
  }, [category]);
  // console.log(articles);
  const fetchMoreData = async () => {
    setPage(page + 1);
    try {
      const response = await axios.get(`${url}&page=${page + 1}`);
      setTotalResults(response.data.totalResults);
      setArticles(articles.concat(response.data.articles));
    } catch (error) {
      console.log(`There is an error in API call ${error}`);
    }
  };
  // console.log(totalResults);
  return (
    <>
      <h2
        className="text-center text-uppercase"
        style={{ marginTop: "5rem", marginBottom: "2rem" }}
      >
        NewsToday- Top {category} headlines
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<h4 className="text-center">Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {loading && (
          <div className="d-flex justify-content-center ">
            <Spinner />
          </div>
        )}
        <div className="container d-flex flex-wrap justify-content-center">
          {articles.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;
