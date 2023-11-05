import Image from "next/image";
import styles from "./page.module.css";
import avatar from "../public/avatar.png";
import valentinbourreau from "../public/valentinbourreau.svg";
import github from "../public/social-networks/github.svg";
import dribbble from "../public/social-networks/dribbble.svg";
import behance from "../public/social-networks/behance.svg";
import Link from "next/link";
import { Button, HeadingComponent, HeadingTags } from "@editorials/ui/server";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="container">
				<div className={styles.cover}>
					<Image
						className={styles.avatar}
						src={avatar}
						alt="valentin bourreau picture"
						width={70}
						height={70}
						placeholder="blur"
					/>
					<Image
						className={styles.logo}
						src={valentinbourreau}
						alt="valentin bourreau logo"
						width={162}
						height={14}
						priority
					/>
					<HeadingComponent
						tag={HeadingTags.H1}
						className="mt-0 mb-2"
					>
						Front-end engineer
					</HeadingComponent>
					<p className="text-slate-600 mb-10">
						pationate by crafting static website or application.
						<br />
						Mainly work on <b>React 18</b> and <b>Next.js 13</b>. A
						Javacript lover.
					</p>
					<div className={styles.actions}>
						<Link href="https://www.linkedin.com/in/valentin-bourreau/">
							<Button className={styles.button}>
								Connect with me
							</Button>
						</Link>
						<div className={styles.socialNetwork}>
							<Link href="https://github.com/vahohenheim">
								<Image
									src={github}
									alt="github logo"
									width={20}
									height={20}
								/>
							</Link>
							<Link href="https://dribbble.com/valentinbourreau">
								<Image
									src={dribbble}
									alt="dribbble logo"
									width={20}
									height={20}
								/>
							</Link>
							<Link href="https://www.behance.net/valentinbourreau">
								<Image
									src={behance}
									alt="behance logo"
									width={20}
									height={20}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
