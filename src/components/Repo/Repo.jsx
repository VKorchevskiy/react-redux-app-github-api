import React from "react";
import "./Repo.css";

const Repo = ({ repo }) => {
  return (
    <article className="repo">
      <header className="repo__header">
        <h2 className="repo__header-name">{repo.name}</h2>
        <p className="repo__header-stars">{repo.stargazers_count}</p>
      </header>
      <p className="repo__last-commit">{repo.updated_at}</p>
      <a href={repo.html_url} className="repo__link">Ссылка на репозиторий: {repo.html_url}</a>
    </article>
  );
};

export default Repo;
