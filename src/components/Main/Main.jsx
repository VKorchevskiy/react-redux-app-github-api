import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRepos } from "../../actions/repos";
import { setCurrentPage } from "../../reducers/reposReduser";
import Repo from "../Repo/Repo";
import "./Main.css";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const perPage = useSelector((state) => state.repos.perPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const [searchValue, setSearchValue] = useState("");

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHandler() {
    dispatch(currentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  return (
    <div>
      <div className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className="search__input"
        />
        <button onClick={() => searchHandler()} className="search__button">
          Search
        </button>
      </div>
      {isFetching === false ? (
        repos.map((repo) => <Repo repo={repo} />)
      ) : (
        <div className="fetching"></div>
      )}

      <div className="pages">
        {pages.map((page, i) => (
          <span
            key={i}
            className={`page ${
              currentPage === page ? "page_active" : ""
            }`.trim()}
            onClick={() => {
              dispatch(setCurrentPage(page));
            }}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Main;
