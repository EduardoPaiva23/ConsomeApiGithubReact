import React from "react";

const RepoItem = ({ repo }) => (
  <a
    href={repo.html_url}
    key={repo.id}
    className="repoItemContainer"
    target="_blank"
  >
    <span>{repo.name}</span>
    <span>Estrelas: {repo.stargazers_count}</span>
    <span>Quantidade observadores {repo.watchers_count}</span>
    <span>Linguagem: {repo.language}</span>
  </a>
);

export default RepoItem;
