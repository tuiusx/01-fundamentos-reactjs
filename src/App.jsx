import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tuiusx.png',
      name: "Ricardo Martins",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      { type: 'link', content: "jane.design/doctorcare" },     
    ],
    publishedAt: new Date('2023-01-027 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C5603AQHVkJMUX_dyvg/profile-displayphoto-shrink_200_200/0/1516574696814?e=1683158400&v=beta&t=vvHJpHrQ-Y_Tz-lBbRVmXNU37kVGy-QSLtf5iDc2lWQ',
      name: "Sarah",
      role: "Medica"
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      { type: 'link', content: "jane.design/doctorcare" },     
    ],
    publishedAt: new Date('2023-01-30 20:00:00'),
  },


];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

