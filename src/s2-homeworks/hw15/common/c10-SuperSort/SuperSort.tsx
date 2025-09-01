// import React from "react";



// const ArrowDown = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M7 10l5 5 5-5H7z" />
//   </svg>
// );

// const ArrowUp = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M7 14l5-5 5 5H7z" />
//   </svg>
// );

// const ArrowSort = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M3 6h18M3 12h12M3 18h6" />
//   </svg>
// );
// // добавить в проект иконки и импортировать
// const downIcon = "[\\/]";
// const upIcon = "[/\\]";
// const noneIcon = "[--]";

// export type SuperSortPropsType = {
//   id?: string;
//   sort: string;
//   value: string;
//   onChange: (newSort: string) => void;
// };

// // export const pureChange = (sort: string, down: string, up: string) => {
// //   // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
// //   return up; // исправить
// // };

// export const pureChange = (sort: string, down: string, up: string) => {
//   if (!sort) return down;
//   if (sort === down) return up;
//   if (sort === up) return "";
//   return down;
// };


// const SuperSort: React.FC<SuperSortPropsType> = ({
//   sort,
//   value,
//   onChange,
//   id = "hw15",
// }) => {
//   const up = "0" + value;
//   const down = "1" + value;

//   const onChangeCallback = () => {
//     onChange(pureChange(sort, down, up));
//   };

//   const icon = sort === down
//       ? downIcon
//       : sort === up
//           ? upIcon
//           : noneIcon
//   return (
//     <button id={id + "-sort-" + value} onClick={onChangeCallback}>
//       {/* сделать иконку */}
//       {/*<img*/}
//       {/*    id={id + '-icon-' + sort}*/}
//       {/*    src={icon}*/}
//       {/*/>*/}
//       {icon} {/*а это убрать*/}
//     </button>
//   );
// };

// export default SuperSort;
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";     // стрелка вверх
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // стрелка вниз
import SwapVertIcon from "@mui/icons-material/SwapVert";           // "две стрелки" (без сортировки)


// // добавить в проект иконки и импортировать
// const downIcon = "[\\/]";
// const upIcon = "[/\\]";
// const noneIcon = "[--]";

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

// Цикл сортировки: "" → вниз → вверх → ""
export const pureChange = (sort: string, down: string, up: string) => {
  if (!sort) return down;
  if (sort === down) return up;
  if (sort === up) return "";
  return down;
};


const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon =
    sort === down ? (
      <ArrowDownwardIcon fontSize="small" />
    ) : sort === up ? (
      <ArrowUpwardIcon fontSize="small" />
    ) : (
      <SwapVertIcon fontSize="small" />
    );
  return (
    <button
      id={id + "-sort-" + value}
      onClick={onChangeCallback}
      style={{
        cursor: "pointer",
        background: "transparent",
        border: "none",
        padding: 0,
      }}
    >
      {icon}
    </button>
  );
};

export default SuperSort;
