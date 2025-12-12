import styles from './ModuleHeader.module.css';

function ModuleHeader(props) {
  return <header className={styles.header}>{props.title}</header>;
}
export default ModuleHeader;
