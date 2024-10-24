import styles from "./IconButtonContainer.module.scss"
import btnstyle from "../../atoms/IconButton/IconButton.module.scss"
import IconButton from '@/components/atoms/IconButton/IconButton'
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa"
import { MdOutlineEdit } from "react-icons/md"

interface IProps {
  type: string
}

export default function IconButtonContainer({ type }:IProps) {
  return (
    <div className={styles.Container}>
      <IconButton className={`${type === 'Vacantes' ? btnstyle.BtPencilVacancies :  btnstyle.BtPencilCompanies }`}><MdOutlineEdit /></IconButton>
      <IconButton className={btnstyle.BtTrash}><FaRegTrashAlt /></IconButton>
    </div>
  )
}
