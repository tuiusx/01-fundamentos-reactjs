import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
              author="Ricador martins" 
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur perferendis possimus pariatur sequi recusandae? Corporis fugit aliquid pariatur veritatis, ea sed dolore rerum nisi consequuntur nostrum, a doloribus recusandae!" 
            />
            <Post 
              author="tiao" 
              content="biscoito" 
            />
        </main>
      </div>

    </div>
  )
}

