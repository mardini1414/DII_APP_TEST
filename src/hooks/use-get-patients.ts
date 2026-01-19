import { PATIENT_DATA, type PatientType } from "@/mock/patient-data";
import { escapeRegExp } from "@/utils/escape-regexp";
import { useEffect, useState, type ChangeEvent } from "react";
import { useDebounce } from "./use-debounce";

type Sort = "ASC" | "DESC";

const searchNameOrNIK = (patient: PatientType, search: string) => {
  const value = escapeRegExp(search);
  const regex = new RegExp(value, "i");
  const matchName = regex.test(patient.name);
  const matchNIK = regex.test(patient.nik);

  return matchName || matchNIK;
};

const sortingDate = (a: PatientType, b: PatientType, sortDate: Sort) => {
  return sortDate === "ASC"
    ? a.date.getTime() - b.date.getTime()
    : b.date.getTime() - a.date.getTime();
};

const sortingName = (a: PatientType, b: PatientType, sortName: Sort) => {
  return sortName === "ASC"
    ? a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    : b.name.localeCompare(a.name, undefined, { sensitivity: "base" });
};

export const useGetPatients = () => {
  const [data, setData] = useState(PATIENT_DATA);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [sortName, setSortName] = useState<Sort | "">();
  const [sortDate, setSortDate] = useState<Sort | "">();
  const [isLoading, setIsloading] = useState(true);
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(10);
  const debouncedSearch = useDebounce(search);

  const isEmpty = data.length === 0;
  const delay = 500;

  const filterData = () => {
    setIsloading(true);

    setData(() => {
      const newData = PATIENT_DATA.filter((patient) =>
        searchNameOrNIK(patient, search),
      )
        .sort((a, b) => {
          if (sortDate) return sortingDate(a, b, sortDate);
          return 0;
        })
        .sort((a, b) => {
          if (sortName) return sortingName(a, b, sortName);
          return 0;
        });

      setTotal(newData.length);

      return [...newData];
    });
  };

  const paginateData = () => {
    const start = page * perPage;
    const end = start + perPage;

    setData((prev) => prev.slice(start, end));
  };

  const handleSearchNameOrNIK = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSortName = (value: string) => {
    setSortDate("");
    setSortName(value as Sort);
  };

  const handleSortDate = (value: string) => {
    setSortName("");
    setSortDate(value as Sort);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  const handlePerPageChange = (value: number) => {
    setPerpage(value);
  };

  useEffect(() => {
    filterData();
    paginateData();

    const timer = setTimeout(() => {
      setIsloading(false);
    }, delay);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, sortName, sortDate, page, perPage]);

  return {
    data,
    isLoading,
    total,
    isEmpty,
    page,
    perPage,
    sortName,
    sortDate,
    handleSearchNameOrNIK,
    handleSortName,
    handleSortDate,
    handlePageChange,
    handlePerPageChange,
  };
};
