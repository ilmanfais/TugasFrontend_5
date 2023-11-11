import styles from "./Movies.module.css";

function Movies() {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Mobile Legends Hero</h2>
                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/564x/8d/5a/08/8d5a08b0c1f205381065d06eef183e36.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Phoveus</h3>
                        <p className={styles.movie__date}>Fighter</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/originals/eb/39/58/eb39588cb4649634570b796fedd2dfe4.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Ixia</h3>
                        <p className={styles.movie__date}>Marksman</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/564x/ac/df/26/acdf2658c74a6d16b01e3fe21485d266.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Roger</h3>
                        <p className={styles.movie__date}>Fighter/Marksman</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/564x/84/f1/49/84f149226ad6aae874743e0f5b98b1ec.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Benedetta</h3>
                        <p className={styles.movie__date}>Assasin</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/564x/31/12/fb/3112fb812b0c6ed5bcb369236d690a2b.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Novaria</h3>
                        <p className={styles.movie__date}>Mage</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/564x/6a/02/e9/6a02e92a68138c36d2bcab4877e425e5.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Aldous</h3>
                        <p className={styles.movie__date}>Fighter</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/564x/ed/67/d6/ed67d63d373d5abc2f3393c7519057ff.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Hanzo</h3>
                        <p className={styles.movie__date}>Assasin</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/564x/53/72/4c/53724cc81e93d6edf466a798dbde7a56.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>X-borg</h3>
                        <p className={styles.movie__date}>Fighter</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://i.pinimg.com/originals/dd/a5/fe/dda5fece0fccf04d90f82b24e750c1ed.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Terizla</h3>
                        <p className={styles.movie__date}>Fighter</p>
                    </div>
                    <div className={styles.movie}>
                        <img
                        className={styles.movie__image}
                        src="https://1.bp.blogspot.com/-Q0q6MqzOubc/X8oIh63QwkI/AAAAAAAADB4/oTkr4acr_4owF-EkwkW28WSLBonxNyTEQCLcBGAsYHQ/s0/50ad23f47ff0c87ed7f7d424ebdec2de.jpg"
                        alt=""
                    />
                        <h3 className={styles.movie__title}>Gatot Kaca</h3>
                        <p className={styles.movie__date}>Fighter/Tank</p>
                    </div>
                </div>
            </section>
        </div>
);
}
export default Movies;