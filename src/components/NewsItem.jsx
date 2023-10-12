import React from "react";

function NewsItem(props) {
  const {
    author,
    description,
    publishedAt,
    url,
    urlToImage,
    title
  } = props.article;

  const defaultImgUrl = "https://www.livemint.com/lm-img/img/2023/05/20/600x338/2-0-148367908-SEBI-4C-0_1681022876782_1684585537713.jpg";
  const defaultTitle = "Brazilian state reels after its worst cyclone disaster - BBC";
  const defaultDesc = "A three-judge panel has blocked Alabama's new congressional map after lawmakers failed to create a second district where Black voters at least came close to comprising a majority, as suggested by the court.";

  const formattedDate = new Date(publishedAt).toLocaleDateString();

  const renderTitle =  () =>{
    if (!title) {
      return defaultTitle;
    }
    return title.length > 88 ? title.substring(0,88)+"..." : title
  }
  const renderDescription = () => {
    if (!description || description === "[Remove]") {
      return defaultDesc;
    }
    return description.length > 150 ? `${description.substring(0, 150)}...` : description;
  }

  return (
    <div className="card m-3 " style={{ maxWidth: "25rem" }}>
      <img src={urlToImage || defaultImgUrl} className="card-img-top" alt="..." style={{ height: "15rem" }} />
      <div className="card-body">
        <h5 className="card-title">{renderTitle()}</h5>
        <p className="card-text">{renderDescription()}</p>
        <p className="card-text"><small className="text-body-secondary">BY {author || "Unknown"} {formattedDate}</small></p>
        <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
