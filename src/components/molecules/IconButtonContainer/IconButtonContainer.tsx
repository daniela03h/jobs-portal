import styles from "./IconButtonContainer.module.scss"
import btnstyle from "../../atoms/IconButton/IconButton.module.scss"
import IconButton from '@/components/atoms/IconButton/IconButton'
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa"
import { MdOutlineEdit } from "react-icons/md"

export default function IconButtonContainer() {
  return (
    <div className={styles.Container}>
      <IconButton className={btnstyle.BtPencil}><MdOutlineEdit /></IconButton>
      <IconButton className={btnstyle.BtTrash}><FaRegTrashAlt /></IconButton>
    </div>
  )
}
