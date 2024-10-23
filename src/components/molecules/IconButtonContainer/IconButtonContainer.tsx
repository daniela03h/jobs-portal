import styles from "./IconButtonContainer.module.scss"
import style from "../../atoms/IconButton/IconButton.module.scss"
import IconButton from '@/components/atoms/IconButton/IconButton'
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa"
import { MdOutlineEdit } from "react-icons/md"

export default function IconButtonContainer() {
  return (
    <div className={styles.Container}>
      <IconButton className={style.BtPencil}><MdOutlineEdit /></IconButton>
      <IconButton className={style.BtTrash}><FaRegTrashAlt /></IconButton>
    </div>
  )
}
