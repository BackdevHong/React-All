import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

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
				<p className={utilStyles.fontWeight}>Vue, Vuex, Nodejs, PHP</p>
				<p>
					제 목표는 풀스택 개발자에요! ( 프론트언어만 배우고 있지만..
					백엔드도 착실히 할거라구욧! )
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
			<section className={utilStyles.headingMd}>
				<h2>프로젝트, 포트폴리오</h2>
				<ul className={utilStyles.nostyle}>
					<li>
						1. 알고리즘 정리 -
						<Link href="https://docs.google.com/document/d/1d4c1lsQ41Nx8p1jAWJIJ1_DX_C0t6YI5iYB4cbtMUyo/edit?usp=sharing">
							<a>링크</a>
						</Link>
					</li>
					<li>
						2. Vue로 만든 Todo 사이트 -
						<Link href="https://vuetodo.dothome.com">
							<a>링크(현재 서비스 종료)</a>
						</Link>
					</li>
					<li>
						3. 클린 코드 정리 -
						<Link href="https://www.notion.so/1-Clean-Code-9ff45d7137d84962a1af8fa76aad4470">
							<a>링크</a>
						</Link>
					</li>
				</ul>
			</section>
		</Layout>
	);
}
