import currentDate from '../../utils/CreateDate';
import Image from 'next/image';
import styles from '../../styles/modules/Main/Header.module.scss';

import { useModal } from '../../Contexts/ModalContext';
import Gear from '../../Icons/Gear';

export default function Header() {
    const { changeModalState } = useModal();

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
                <span onClick={() => changeModalState(true, 's')}>
                    <Gear />
                </span>

                {date.weekday}
            </section>
        </header>
    );
}
