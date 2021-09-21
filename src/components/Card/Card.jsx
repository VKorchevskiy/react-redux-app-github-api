import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContributors, getCurrentRepo } from "../../actions/repos";
import "./Card.css";

const Card = (props) => {

  const { userName, repoName } = useParams();

  const [repo, setRepo] = useState({owner: {}});
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    getCurrentRepo(userName, repoName, setRepo);
    getContributors(userName, repoName, setContributors);
  }, [])

  return (
    <div>
      <button onClick={() => props.history.goBack()} className="button_back">
        Back
      </button>
      <div className="card">
        <img src={`${repo.owner.avatar_url}`} alt="" />
        <div className="name">{repo.name}</div>
        <div className="stars">{repo.stargazers_count}</div>
      </div>
      {contributors.map((contributor, i) => <div key={contributor.id}>{i+1}. {contributor.login}</div> )}
    </div>
  );
};

export default Card;
