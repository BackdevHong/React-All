import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>안녕하세요! 저는 홍인성이에요!</p>
				<p>
					저는 코딩에 &quot;초보&quot;라서.. 앞으로 잘 부탁드릴게요..
				</p>
				<p>아! 저는 지금 어떤 언어를 공부하고 있냐면..</p>
				<p className={utilStyles.fontWeight}>
					React, Vue, Scss, StyleComponent, NextJS
				</p>
				<p>
					아!
					<Link href="https://github.com/backdevHong">
						<a> 깃허브 </a>
					</Link>
					주소도 드릴게요..!
				</p>
				<p>다시한번.. 앞으로 잘 부탁드립니다..ㅎㅎ</p>
			</section>
		</Layout>
	);
}
