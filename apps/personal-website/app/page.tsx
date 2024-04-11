import styles from "./page.module.css";
import github from "../public/social-networks/github.svg";
import dribbble from "../public/social-networks/dribbble.svg";
import behance from "../public/social-networks/behance.svg";
import CoverComponent from "./_components/cover/cover.component";

export const metadata = {
	title: "Front-end engineer | valentin bourreau",
	description: "Valentin Bourreau personal website"
};

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="container">
				<CoverComponent
					title="Front-end engineer"
					description={
						<>
							Pationate by crafting static websites and web
							applications.
							<br />
							Mainly work on <b>React 18</b>, <b>Next.js 14</b>{" "}
							and <b>Angular 17</b>. A Javacript lover.
						</>
					}
					buttons={[
						{
							label: "Connect with me",
							link: "https://www.linkedin.com/in/valentin-bourreau/"
						}
					]}
					socialNetworks={[
						{
							src: github,
							alt: "github logo",
							link: "https://github.com/vahohenheim"
						},
						{
							src: dribbble,
							alt: "dribbble logo",
							link: "https://dribbble.com/valentinbourreau"
						},
						{
							src: behance,
							alt: "behance logo",
							link: "https://www.behance.net/valentinbourreau"
						}
					]}
				/>
			</div>
		</main>
	);
}
