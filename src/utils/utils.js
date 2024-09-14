export function formatFilmsAndPercentage(films, percentage) {
  const filmsArray = Array.isArray(films) ? films : [films];
  const percentageString = `<b>${percentage.toFixed(2)}%</b><br/>`;
  const filmsList =
    filmsArray.length > 1
      ? `Films: ${filmsArray
          .map((film) => `<br/>&nbsp;&nbsp;&nbsp;&nbsp;- ${film}`)
          .join("")}`
      : filmsArray.length === 1
      ? `Film: ${filmsArray[0]}`
      : "Films: None";

  return `${percentageString}${filmsList}`;
}
