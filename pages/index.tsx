import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const listLeft: string[] = ["JS", "React", "TailWind", "HTML"];
const listRight: string[] = ["TS", "Next", "CSS", "Node"];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transfer List</title>
        <meta name="description" content="An ordinary transfer list" />
        <link rel="icon" href="/D.svg" />
      </Head>

      <main className={styles.main}>
        <h1>Transfer List</h1>
        <section>
          <ul>
            {listLeft.map((item, i) => (
              <li key={listLeft[i]}>{item}</li>
            ))}
          </ul>
          <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <ul>
            {listRight.map((item, i) => (
              <li key={listRight[i]}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.dangoer.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
          <span className={styles.logo}>
            <Image src="/D.svg" alt="D Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
