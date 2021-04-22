import styles from "./styles.module.css";

export default function Avatar({ alt, src, text, whitText }) {
  return (
    <div>
      <img alt={alt} src={src} title={alt} className={styles.avatar} />
      {whitText && <strong>{text || alt}</strong>}
    </div>
  );
}
