import { Footer as FooterStatic } from "@organisms/Footer";
import styles from '@templates/styles/Footer.module.css';

export function Footer({...props}) {
  return (
    <footer {...props}>
      <div className={styles.static}>
        <div className="container">
          <FooterStatic />
        </div>
      </div>
    </footer>
  );
}