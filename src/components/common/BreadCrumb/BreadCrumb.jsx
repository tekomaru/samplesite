import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "./BreadCrumb.module.css";

export function BreadCrumb() {
  const router = useRouter();

  // pathを「/」で分解
  const paths = decodeURI(router.asPath).substring(1).split("/");

  // リンク先アドレスの取得
  const roots = [""];
  for (let i = 0; i < paths.length; i++)
    roots.push(roots[i] + "/" + paths[i]);

  return (
    <div className={styles.Breadcrumb_wrapper}>
      <div className={styles.Breadcrumb_breadcrumb}>
    <div className={styles.container}>
      {/* Homeのリンク */}
      <a href={"/"} />
        <a className={styles.link}>HOME</a>
      {paths.map((x, i) => (
        <>
          {/* サブページのリンク */}
          {">"}
          <a href={roots[i + 1]} key={i} />
            <a className={styles.link}>{x}</a>
        </>
      ))}
      </div>
    </div>
    </div>

  );
}
