import styles from "./ButtonLoader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function ButtonLoader(size) {
  return <FontAwesomeIcon icon={faGear} className={styles.gear} style={{ fontSize: `${size}px` }} />;
}
