import { useState, Fragment } from 'react'
import style from './nav.module.css'
import Logo from '/imgs/snoo-py.png'

function Nav() {

  return (
    <div className={style.nav}>
      <div className={style.title}>
        <span className={style.front}>SNOO</span>
        <span className={style.back}>.PY</span>
      </div>

      <div className={style.menu}>
        <a className={style.item}>메인</a>
        <a className={style.item}>멤버</a>
        <a className={style.item}>프로젝트</a>
        <a className={style.item}>수상내역</a>
      </div>
    </div>
  )
}

export default Nav