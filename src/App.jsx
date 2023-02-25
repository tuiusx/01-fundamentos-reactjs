import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {

  return (
    <>
      <Header />
      <Post 
        author="Ricador martins" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consectetur perferendis possimus pariatur sequi recusandae? Corporis fugit aliquid pariatur veritatis, ea sed dolore rerum nisi consequuntur nostrum, a doloribus recusandae!" 
      />
      <Post 
        author="tiao" 
        content="biscoito" 
      />

    </>
  )
}

