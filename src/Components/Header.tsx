import styles from '../styles/modules/Main/Header.module.scss';
import Image from 'next/image';
import currentDate from '../utils/CreateDate';

export default function Header() {
    const date = currentDate(); // Get informations about the day, month, year and so on.

    return (
        <header className={styles.headerContainer}>
            <section>
                <article> {date.day} </article>

                <article>
                    <div> {date.month} </div>
                    <div> {date.year} </div>
                </article>
            </section>

            <section>
                <Image
                    src='/icons/gear.svg'
                    height={20}
                    width={20}
                    alt='Settings'
                    title='Settings'
                    className='svg-color'
                />

                {date.weekday}
            </section>
        </header>
    );
}
