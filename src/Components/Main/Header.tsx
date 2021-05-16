import currentDate from '../../utils/CreateDate';
import Image from 'next/image';
import styles from '../../styles/modules/Main/Header.module.scss';

import { useModal } from '../../Contexts/ModalContext';

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
                <Image
                    src='/icons/gear.svg'
                    height={20}
                    width={20}
                    alt='Settings'
                    title='Settings'
                    className='svg-color'
                    onClick={() => changeModalState(true, 's')}
                />

                {date.weekday}
            </section>
        </header>
    );
}
