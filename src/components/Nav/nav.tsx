import { useState, Fragment, useEffect } from 'react'
import style from './nav.module.css'
import Logo from '/imgs/snoo-py.png'

function Nav() {
  const [scrollPos, setScrollPos] = useState('')
  const updateScroll = () => {
    setScrollPos(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll)
  })

  return (
    <div className={ scrollPos < 100 ? style.top_nav : style.down_nav }>
      <div className={style.title}>
        <span className={style.front}>SNOO</span>
        <span className={ scrollPos < 100 ? style.back : style.down_back }>.PY</span>
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