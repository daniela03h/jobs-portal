"use client"

import IconButton from "@/components/atoms/IconButton/IconButton";
import styles from "./Pagination.module.scss";
import btnstyle from "../../atoms/IconButton/IconButton.module.scss"
import Text from "@/components/atoms/Text/Text";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ICompanyResponse } from "@/models/companies.model";
import { useRouter, useSearchParams } from "next/navigation";
import { IVacancyResponse } from "@/models/vacancies.model";

interface IProps {
  data: IVacancyResponse | ICompanyResponse
}

export default function Pagination({ data }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const currentPage = data.pageable.pageNumber + 1;

  return (
    <div className={styles.Pagination}>
      <IconButton className={btnstyle.BtArrow} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <IoChevronBack />
      </IconButton>
      <Text>Pagina </Text>
      <Text>{currentPage}</Text>
      <Text> de </Text>
      <Text>{data.totalPages}</Text>
      <IconButton
        className={btnstyle.BtArrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === data.totalPages}>
        <IoChevronForward />
      </IconButton>
    </div>
  );
}
