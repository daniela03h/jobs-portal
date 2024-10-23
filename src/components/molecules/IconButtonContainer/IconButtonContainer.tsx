import styles from "./IconButtonContainer.module.scss"
import IconButton from '@/components/atoms/IconButton/IconButton'
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa"
import { MdOutlineEdit } from "react-icons/md"

export default function IconButtonContainer() {
  return (
    <div className={styles.Container}>
      <IconButton><MdOutlineEdit /></IconButton>
      <IconButton><FaRegTrashAlt /></IconButton>
    </div>
  )
}
