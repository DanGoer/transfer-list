import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const listLeft: { name: string; marked: boolean }[] = [
  { name: "JS", marked: false },
  { name: "React", marked: false },
  { name: "Tailwind", marked: false },
  { name: "HTML", marked: false },
];

const listRight: { name: string; marked: boolean }[] = [
  { name: "TS", marked: false },
  { name: "Next", marked: false },
  { name: "CSS", marked: false },
  { name: "SQL", marked: false },
];

export default function Home() {
  const [listOnLeft, setListOnLeft] = useState(listLeft);
  const [listOnRight, setListOnRight] = useState(listRight);

  const markedToTheRight: () => void = () => {
    const array = listOnRight;
    const newArray = listOnLeft;
    newArray.forEach((i, index) => {
      if (i.marked === true) {
        array.push(i);
        newArray.splice(index, 1);
      }
    });

    setListOnRight([...array]);
    setListOnLeft([...newArray]);

    console.log(JSON.stringify(array));
  };

  const allToTheright: () => void = () => {};
  const markedToTheLeft: () => void = () => {};
  const allToTheLeft: () => void = () => {};

  const callMarkedLeft: (i: any) => void = (i) => {
    const newList = listOnLeft;
    newList[i].marked = !newList[i].marked;
    setListOnLeft([...newList]);
  };

  const callMarkedRight: (i: any) => void = (i) => {
    const newList = listOnRight;
    newList[i].marked = !newList[i].marked;
    setListOnRight([...newList]);
  };

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
            {listOnLeft.map((item, i) => (
              <li key={i}>
                <p>{item.name}</p>
                {item.marked ? (
                  <button onClick={() => callMarkedLeft(i)}>x</button>
                ) : (
                  <button onClick={() => callMarkedLeft(i)}>o</button>
                )}
              </li>
            ))}
          </ul>
          <div>
            <button onClick={() => markedToTheRight()}>oneToTheRight</button>
            <button>allToTheright</button>
            <button>oneToTheLeft</button>
            <button>allToTheLeft</button>
          </div>
          <ul>
            {listOnRight.map((item, i) => (
              <li key={i}>
                <p>{item.name}</p>
                {item.marked ? (
                  <button onClick={() => callMarkedRight(i)}>x</button>
                ) : (
                  <button onClick={() => callMarkedRight(i)}>o</button>
                )}
              </li>
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
