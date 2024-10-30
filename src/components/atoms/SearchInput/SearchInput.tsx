import { FaSearch } from "react-icons/fa"
import styles from "./SerchInput.module.scss"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface IProps {
  type?: string;
}


export default function SearchInput({type}: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {  
    if (params.get("name")) {
      params.delete("name");
      router.replace(`?${params.toString()}`);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    params.set('name', event.currentTarget.value.toString());
    router.replace(`?${params.toString()}`);
  }

  return (
  <div className={styles.SearchInputContainer}>
    <FaSearch className={styles.SearchIcon} />
    <input className={styles.SearchInput} placeholder="Buscar" type={type} onChange={handleChange} required/>
  </div>
  )
}
