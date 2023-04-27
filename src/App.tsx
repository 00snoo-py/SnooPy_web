import { useState } from 'react'
import style from './App.module.css'
import Nav from './components/Nav/nav'

import SnooPy from '/imgs/snoo-py.png'
import GBSW from '/imgs/symbol-only.png'
import Arrow from '/imgs/arrow.png'

function App() {

  return (
    <>
      <Nav />

      <div className={style.header}>
        <div className={style.left}>
          <div className={style.title}>SNOO<span className={style.py}>.PY</span></div>
          <div className={style.info}>쉬운 것, 어려운 것 가리지 않고 무엇이든 도전하는<br/><strong>경북소프트웨어고등학교</strong>의 청소년 개발 팀입니다.</div>
        </div>

        <div className={style.middle}>
          <img className={style.arrow} src={Arrow} alt="" />
          <img className={style.arrow2} src={Arrow} alt="" />
        </div>
        
        <div className={style.right}>
          <img className={style.symbol} src={GBSW} alt="" />
        </div>
      </div>

      {/* <div className={style.members}>
        <div className={style.sub_title}>Members</div>

        <div className={styls.card_contain}>
          <div className={style.card}>
            <img className={style.card_img} src="" alt="" />
            <div className={style.card_name}>김정윤</div>
          </div>
          <div className={style.card}>
            <img className={style.card_img} src="" alt="" />
            <div className={style.card_name}>손보석</div>
          </div>
          <div className={style.card}>
            <img className={style.card_img} src="" alt="" />
            <div className={style.card_name}>김동영</div>
          </div>
          <div className={style.card}>
            <img className={style.card_img} src="" alt="" />
            <div className={style.card_name}>변예현</div>
          </div>
          <div className={style.card}>
            <img className={style.card_img} src="" alt="" />
            <div className={style.card_name}>김도희</div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  )
}

export default App
