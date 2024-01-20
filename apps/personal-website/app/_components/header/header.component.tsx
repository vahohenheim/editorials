import Image from "next/image";
import valentinbourreau from "../../../public/valentinbourreau.svg";
import styles from "./header.module.css";

export const HeaderComponent = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.logo}>
					{/* <Image src={valentinbourreau} alt="valentin bourreau logo" width={162} height={14} priority /> */}
				</div>
			</div>
		</header>
	);
};
