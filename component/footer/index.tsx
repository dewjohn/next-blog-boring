import React from 'react'
import style from './index.module.scss'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>Copyright © 2022 - Present <a href="https://github.com/dewjohn">@john</a> All rights reserved.</div>
      <div>Powered By <a href="https://github.com/dewjohn/next-blog-boring">@next-blog-boring</a></div>
    </footer>
  )
}
