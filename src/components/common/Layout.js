import Navber from '../common/Navber/Navber'
import Footer from './Footer/Footer'
import Head from 'next/head';

export default function Layout({ children }) {
  return (
  <>
  <Head>
    <title>Techtonix</title>
    <meta charset="utf-8" />
    <meta name='description' content='Techtonixでは新規サービスの受託開発、既存サービスの追加開発や保守運用、自社サービスの企画開発を行っております。
                当社は少数精鋭のチームで、機動性の高いシステム開発事業に取り組んでいます。私たちの強みは、迅速かつ効率的なソフトウェア開発を実現することです。
                私たちの少数精鋭のチームは、熟練した開発者からなり、高い専門知識と経験を備えています。チーム全体で緊密に連携し、お客様のニーズに的確に応える柔軟性と迅速な対応が可能です。' />
    <meta name='viewport' content='width=device-width,initial-scale=1' />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet" />
  </Head>
      <Navber />
      <main>{children}</main>
      <Footer />
    </>
  );
}