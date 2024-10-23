import { FaSearch } from "react-icons/fa"
import styles from "./SerchInput.module.scss"

export default function SearchInput() {
  return (
  <div className={styles.SearchInputContainer}>
    <FaSearch className={styles.SearchIcon} />
    <input type="search" className={styles.SearchInput} placeholder="Buscar"/>
  </div>
  )
}
