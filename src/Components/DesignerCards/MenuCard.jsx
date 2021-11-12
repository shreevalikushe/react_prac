import styles from "./MenuCard.module.css"

function MenuCard(props) {
    const { url, title, content, price } = props;
    return (
        <>
            <div className={styles.mainDiv}>
                <img className={styles.image} src={url} alt={title} />
                <h3>{title}</h3>
                <p>{content}</p>
                <h4>{price}</h4>
                <button className={styles.btn}>ORDER</button>
            </div>
        </>
    )
}

export default MenuCard