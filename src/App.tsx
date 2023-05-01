import { useState, useEffect } from 'react'
import style from './App.module.css'

// import SnooPy from '/imgs/snoo-py.png'
// import Logo from '/imgs/snoo-py.png'
import GBSW from '/imgs/symbol-white.png'
import GBSW_ONLY from '/imgs/symbol-only.png'
import Arrow from '/imgs/white-arrow.png'
import BG from '/imgs/bg.jpg'
import Ptery from '/imgs/ptery.png'
import Goorm from '/imgs/goorm.jpg'
import CodeFair2022 from '/imgs/codefair_2022.jpg'
import GCD_BG from '/imgs/gcd.png'
import Suzume_BG from '/imgs/suzume.jpg'
import Dohe_BG from '/imgs/dohe_bg.jpg'

function App() {
  const [profileWindow, setProfileWindow] = useState('')
  const [scrollPos, setScrollPos] = useState(0)
  const updateScroll = () => {
    setScrollPos(window.scrollY || document.documentElement.scrollTop)
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
  })

  const getMain = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const getMembers = () => {
    window.scrollTo({
      top: 1100,
      behavior: 'smooth',
    })
  }
  const getProjects = () => {
    window.scrollTo({
      top: 2100,
      behavior: 'smooth',
    })
  }
  const getAwards = () => {
    window.scrollTo({
      top: 2700,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {profileWindow === '김정윤' ? (
        <div className={style.window_contain}>
          <div className={style.window_menu_contain}>
            <div className={style.window_menu}>
              <div onClick={() => setProfileWindow('')} className={style.window_close}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_y}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_g}></div>
            </div>
            <div className={style.window}>
              <img className={style.header_img} src={GCD_BG} alt='' />
              <div className={style.window_header}>
                <img className={style.header_profile} src='https://avatars.githubusercontent.com/u/108207397?v=4' alt='' />
                <div className=''>
                  <div className={style.window_name}>김정윤</div>
                  <a href='https://github.com/Leehomin11' target='_blank' className={style.window_github}>
                    @GUCCUDAS
                  </a>
                  <div className={style.window_about}>m2 air는 사랑입니다.</div>
                </div>
              </div>

              <div className={style.window_contents}>
                <div className={style.content_title}>역할</div>
                <div className=''>
                  <div className={style.window_part}>Backend Developer</div>
                  <div className={style.window_part}>Secure Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {profileWindow === '손보석' ? (
        <div className={style.window_contain}>
          <div className={style.window_menu_contain}>
            <div className={style.window_menu}>
              <div onClick={() => setProfileWindow('')} className={style.window_close}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_y}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_g}></div>
            </div>
            <div className={style.window}>
              <img className={style.header_img} src='https://static.solved.ac/profile_bg/hanbyeol_stars/hanbyeol_stars.jpg' alt='' />
              <div className={style.window_header}>
                <img className={style.header_profile} src='https://avatars.githubusercontent.com/u/51194584?v=4' alt='' />
                <div className=''>
                  <div className={style.window_name}>손보석</div>
                  <a href='https://github.com/dya-only' target='_blank' className={style.window_github}>
                    @dya_only
                  </a>
                  <div className={style.window_about}>풀스택 개발자를 목표로 공부중입니다 (m2 pro가 더 좋습니다)</div>
                </div>
              </div>

              <div className={style.window_contents}>
                <div className={style.content_title}>역할</div>
                <div className=''>
                  <div className={style.window_part}>FullStack Developer</div>
                  <div className={style.window_part}>Cloud Architect</div>
                  <div className={style.window_part}>Application Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {profileWindow === '김동영' ? (
        <div className={style.window_contain}>
          <div className={style.window_menu_contain}>
            <div className={style.window_menu}>
              <div onClick={() => setProfileWindow('')} className={style.window_close}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_y}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_g}></div>
            </div>
            <div className={style.window}>
              <img className={style.header_img} src={Suzume_BG} alt='' />
              <div className={style.window_header}>
                <img className={style.header_profile} src='https://avatars.githubusercontent.com/u/83718994?v=4' alt='' />
                <div className=''>
                  <div className={style.window_name}>김동영</div>
                  <a href='https://github.com/kairos-hk' target='_blank' className={style.window_github}>
                    @kairos-hk
                  </a>
                  <div className={style.window_about}>임베디드가 짱이다..</div>
                </div>
              </div>

              <div className={style.window_contents}>
                <div className={style.content_title}>역할</div>
                <div className=''>
                  <div className={style.window_part}>Frontend Developer</div>
                  <div className={style.window_part}>Data Analyst</div>
                  <div className={style.window_part}>Embedded Engineer</div>
                  <div className={style.window_part}>Secure Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {profileWindow === '변예현' ? (
        <div className={style.window_contain}>
          <div className={style.window_menu_contain}>
            <div className={style.window_menu}>
              <div onClick={() => setProfileWindow('')} className={style.window_close}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_y}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_g}></div>
            </div>
            <div className={style.window}>
              <img className={style.header_img} src='https://38.media.tumblr.com/f0a1cb458b0f80304686f7dac3ebc5e6/tumblr_n750sqHBFZ1s5h198o1_500.gif' alt='' />
              <div className={style.window_header}>
                <img className={style.header_profile} src='https://avatars.githubusercontent.com/u/127202879?v=4' alt='' />
                <div className=''>
                  <div className={style.window_name}>변예현</div>
                  <a href='https://github.com/yehyun207' target='_blank' className={style.window_github}>
                    @yehyun207
                  </a>
                  <div className={style.window_about}>밀양 변씨 원탑 개발자</div>
                </div>
              </div>

              <div className={style.window_contents}>
                <div className={style.content_title}>역할</div>
                <div className=''>
                  <div className={style.window_part}>Frontend Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {profileWindow === '김도희' ? (
        <div className={style.window_contain}>
          <div className={style.window_menu_contain}>
            <div className={style.window_menu}>
              <div onClick={() => setProfileWindow('')} className={style.window_close}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_y}></div>
              <div onClick={() => setProfileWindow('')} className={style.window_close_g}></div>
            </div>
            <div className={style.window}>
              <img className={style.header_img} src={Dohe_BG} alt='' />
              <div className={style.window_header}>
                <img className={style.header_profile} src='https://avatars.githubusercontent.com/u/126975038?v=4' alt='' />
                <div className=''>
                  <div className={style.window_name}>김도희</div>
                  <a href='https://github.com/dohe788' target='_blank' className={style.window_github}>
                    @dohe788
                  </a>
                  <div className={style.window_about}>제발 일반적으로 바꿔..</div>
                </div>
              </div>

              <div className={style.window_contents}>
                <div className={style.content_title}>역할</div>
                <div className=''>
                  <div className={style.window_part}>Web & App Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className={scrollPos < 100 ? style.top_nav : style.down_nav}>
        <div className={style.nav_title}>
          <span className={style.front}>SNOO</span>
          <span className={scrollPos < 100 ? style.back : style.down_back}>.PY</span>
        </div>

        <div className={style.menu}>
          <button onClick={getMain} className={scrollPos < 100 ? style.item : style.down_item}>
            메인
          </button>
          <button onClick={getMembers} className={scrollPos < 100 ? style.item : style.down_item}>
            멤버
          </button>
          <button onClick={getProjects} className={scrollPos < 100 ? style.item : style.down_item}>
            프로젝트
          </button>
          <button onClick={getAwards} className={scrollPos < 100 ? style.item : style.down_item}>
            수상내역
          </button>
        </div>
      </div>

      <img className={style.bg} src={BG} alt='' />
      <div className={style.header}>
        <div className={style.left}>
          <div className={style.title}>
            SNOO<span className={style.py}>.PY</span>
          </div>
          <div className={style.info}>
            쉬운 것, 어려운 것 가리지 않고 무엇이든 도전하는
            <br />
            <strong>경북소프트웨어고등학교</strong>의 청소년 개발 팀입니다.
          </div>
        </div>

        <div className={style.middle}>
          <img className={style.arrow} src={Arrow} alt='' />
          <img className={style.arrow2} src={Arrow} alt='' />
        </div>

        <div className={style.right}>
          <img className={style.symbol} src={GBSW} alt='' />
        </div>
      </div>

      <div className={style.sub_title}>Members</div>
      <div className={style.sub_info}>프로필 이미지를 클릭하면 상세 정보를 볼 수 있습니다.</div>
      <div className={style.contain_contain}>
        <div className={style.contain}>
          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src='https://avatars.githubusercontent.com/u/108207397?v=4' alt='' />
              <div onClick={() => setProfileWindow('김정윤')} className={style.card_info}>
                팀 리더
              </div>
            </div>
            <div className=''>
              <div className={style.card_work}>Developer</div>
              <div className={style.card_name}>김정윤</div>
              <div className={style.card_nickname}>GUCCUDAS</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src='https://avatars.githubusercontent.com/u/51194584?v=4' alt='' />
              <div onClick={() => setProfileWindow('손보석')} className={style.card_info}>
                변예현의 스승
              </div>
            </div>
            <div className=''>
              <div className={style.card_work}>Developer</div>
              <div className={style.card_name}>손보석</div>
              <div className={style.card_nickname}>dya_only</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src='https://avatars.githubusercontent.com/u/83718994?v=4' alt='' />
              <div onClick={() => setProfileWindow('김동영')} className={style.card_info}>
                의문의 임베디드 장인
              </div>
            </div>
            <div className=''>
              <div className={style.card_work}>Secure & Embedded</div>
              <div className={style.card_name}>김동영</div>
              <div className={style.card_nickname}>kairos-hk</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src='https://avatars.githubusercontent.com/u/127202879?v=4' alt='' />
              <div onClick={() => setProfileWindow('변예현')} className={style.card_info}>
                손보석의 제자
              </div>
            </div>
            <div className=''>
              <div className={style.card_work}>Developer</div>
              <div className={style.card_name}>변예현</div>
              <div className={style.card_nickname}>yehyun</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <img className={style.card_img} src='https://avatars.githubusercontent.com/u/126975038?v=4' alt='' />
              <div onClick={() => setProfileWindow('김도희')} className={style.card_info}>
                PS 쓰는 디자이너
              </div>
            </div>
            <div className=''>
              <div className={style.card_work}>Designer</div>
              <div className={style.card_name}>김도희</div>
              <div className={style.card_nickname}>dohe</div>
            </div>
          </div>

          <div className={style.card}>
            <div className={style.img_contain}>
              <div className={style.card_img_white} />
            </div>
            <div className=''>
              <div className={style.card_work}></div>
              <div className={style.card_name}></div>
              <div className={style.card_nickname}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.sub_title}>Projects</div>
      <div className={style.contain}>
        <div className={style.pj_card}>
          <img className={style.pj_img} src={Ptery} alt='' />
          <div className=''>
            <a href='https://github.com/00snoo-py/Ptery' target='_blank' className={style.pj_title}>
              Ptery
            </a>
            <div className={style.pj_info}>차세대 애니 추천 서비스입니다.</div>
            <div className={style.pj_tag}>#React #Typescript #Tailwindcss</div>
          </div>
        </div>

        <div className={style.pj_card}>
          <div className={style.more}>
            <div className={style.dot} />
            <div className={style.dot} />
            <div className={style.dot} />
          </div>
          <div className=''>
            <a href='https://github.com/00snoo-py' target='_blank' className={style.pj_title}>
              More
            </a>
            <div className={style.pj_info}>팀 깃허브에서 더 많은 정보를 알아보세요.</div>
            <div className={style.pj_tag}>#Github #Web</div>
          </div>
        </div>
      </div>

      <div className={style.sub_title}>Awards</div>
      <div className={style.aw_card}>
        <img className={style.aw_img} src={Goorm} alt='' />
        <div>
          <div className={style.aw_state}>Grand Prize</div>
          <div className={style.aw_title}>2023 구름 하이스쿨 알고리즘 챌린지</div>
          <div className={style.aw_member}>손보석</div>
        </div>
      </div>

      <div className={style.aw_card}>
        <img className={style.aw_img} src={CodeFair2022} alt='' />
        <div>
          <div className={style.aw_state}>Grand Prize</div>
          <div className={style.aw_title}>2022 한국 코드페어 해커톤 고등부</div>
          <div className={style.aw_member}>김동영</div>
        </div>
      </div>

      <div className={style.m}></div>

      <footer className={style.footer}>
        <div className={style.footer_front}>
          <div className={style.footer_snoo}>SNOO</div>
          <div className={style.footer_py}>.PY</div>
          <img className={style.footer_gbsw} src={GBSW_ONLY} alt='' />
        </div>
        <div className={style.footer_back}>ⓒ 2023. SNOO.PY all rights reserved</div>
      </footer>
    </>
  )
}

export default App
