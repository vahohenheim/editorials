import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../../public/logo.svg";
import classNames from "classnames";
import { Button } from "@editorials/ui/server";
import Link from "next/link";

export const HeaderComponent = () => {
	return (
		<header
			className={classNames(
				"container flex gap-5 items-end py-5 px-5 md:pt-16 bg-white/45",
				styles.header
			)}
		>
			<div
				className={classNames(
					"shrink basis-16 w-16 h-16 b-5",
					styles.logo
				)}
			>
				<Link className={classNames("block w-full h-full")} href="/">
					<Image src={logo} alt="logo valentin bourreau" />
				</Link>
			</div>
			<div className="flex gap-5 justify-between w-full">
				<nav className={styles.nav}>
					<Link href="/about">
						<Button variant="ghost">About</Button>
					</Link>
					<Link href="/work">
						<Button variant="ghost">Work</Button>
					</Link>
					<Link href="/resume">
						<Button variant="ghost">Resume</Button>
					</Link>
				</nav>
			</div>
		</header>
	);
};
