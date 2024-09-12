// export const splitArrayIntoStrings = (arr) => {
//   const result = [];
//   let currentString = "";

//   arr.forEach((char) => {
//     if (char === ",") {
//       result.push(currentString.trim());
//       currentString = "";
//     } else {
//       currentString += char;
//     }
//   });

//   // Add the last string if there's no trailing comma
//   if (currentString) {
//     result.push(currentString.trim());
//   }

//   return result;
// };

export function formatFilmsAndPercentage(films, percentage) {
  const filmsArray = Array.isArray(films) ? films : [films];
  const percentageString = `<b>${percentage.toFixed(2)}%</b><br/>`;
  const filmsList =
    filmsArray.length > 1
      ? `Films: ${filmsArray
          .map((film) => `<br/>&nbsp;&nbsp;&nbsp;&nbsp;- ${film}`)
          .join("")}`
      : `Film: ${filmsArray[0]}`;

  return `${percentageString}${filmsList}`;
}
