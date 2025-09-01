import React from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage); // пишет студент // вычислить количество страниц

  const onChangeCallback = (event: any, page: number) => {
    // пишет студент
    onChange?.(page, itemsCountForPage);

  };

  const onChangeSelect = (event: any) => {
    // пишет студент
    // console.log(+event.target.value, "select");
    const newCount = Number(event.target.value) || itemsCountForPage;
    const newLastPage = Math.max(1, Math.ceil(totalCount / newCount));
    const newPage = Math.min(page, newLastPage); // не вываливаемся за предел
    onChange?.(newPage, newCount);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        sx={
          {
            // стили для Pagination // пишет студент
          }
        }
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>показать</span>

      <SuperSelect
        id={id + "-pagination-select"}
        // value={itemsCountForPage}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChange={onChangeSelect}
      />

      <span className={s.text2}>строк в таблице</span>
    </div>
  );
};

export default SuperPagination;
