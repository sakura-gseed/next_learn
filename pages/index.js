import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Card from "../components/Card";
import imgSrc from "../public/test01.jpg";
import { useState, useEffect } from "react";
import { db } from "../src/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const postsCollectionRef = collection(db, "posts");
  //   getDocs(postsCollectionRef).then((querySnapshot) => {
  //     setPosts(querySnapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);
  // console.log(posts);

  return (
    <div className={styles.container}>
      <Layout title="ホームのページです">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {/* {posts.map((post, index) => {
              return (
                <Card
                  key={index}
                  date={post.date}
                  src={post.imageUrl}
                  title={post.title}
                  text={post.text}
                  url={post.url}
                />
              );
            })} */}
            <Card
              date="2022/2/12"
              src={imgSrc}
              title="今日の授業"
              text="今日の授業はたくさんコンポーネントを作ります。とても大変です。ですが頑張ります。"
              url="https://"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
