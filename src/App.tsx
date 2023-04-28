import { useState } from 'react'
import style from './App.module.css'
import Nav from './components/Nav/nav'

import SnooPy from '/imgs/snoo-py.png'
import GBSW from '/imgs/symbol-white.png'
import Arrow from '/imgs/white-arrow.png'

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

      <div className={style.sub_title}>Members</div>
      <div className={style.contain_contain}>
        <div className={style.contain}>
          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src="https://avatars.githubusercontent.com/u/108207397?v=4" alt="" />
              <div className={style.card_info}>팀 리더</div>
            </div>
            <div className="">
              <div className={style.card_work}>Developer</div>
              <div className={style.card_name}>김정윤</div>
              <div className={style.card_nickname}>GUCCUDAS</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src="https://avatars.githubusercontent.com/u/51194584?v=4" alt="" />
              <div className={style.card_info}>변예현 따까리</div>
            </div>
            <div className="">
              <div className={style.card_work}>Developer</div>
              <div className={style.card_name}>손보석</div>
              <div className={style.card_nickname}>dya_only</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src="https://avatars.githubusercontent.com/u/83718994?v=4" alt="" />
              <div className={style.card_info}>의문의 임베디드 장인</div>
            </div>
            <div className="">
              <div className={style.card_work}>Secure & Embedded</div>
              <div className={style.card_name}>김동영</div>
              <div className={style.card_nickname}>kairos-hk</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src="https://avatars.githubusercontent.com/u/127202879?v=4" alt="" />
              <div className={style.card_info}>낙하산</div>
            </div>
            <div className="">
              <div className={style.card_work}>Developer</div>
              <div className={style.card_name}>변예현</div>
              <div className={style.card_nickname}>yehyun</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src="https://avatars.githubusercontent.com/u/126975038?v=4" alt="" />
              <div className={style.card_info}>dohe</div>
            </div>
            <div className="">
              <div className={style.card_work}>Designer</div>
              <div className={style.card_name}>김도희</div>
              <div className={style.card_nickname}>dohe</div>
            </div>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default App
