import Image from 'next/image';
import styles from '../../styles/modules/Settings/Settings.module.scss';

import { useModal } from '../../Contexts/ModalContext';
import { useSettings } from '../../Contexts/SettingsContext';

export default function SettingsComponent() {
    const { changeModalState } = useModal();
    const {
        changeConfig,
        changeCautionMessage,
        isDarkTheme,
        isOrderlyTasks,
        isInvertedTasks,
    } = useSettings();

    return (
        <>
            <header>
                <h1>Settings</h1>
            </header>

            <main>
                <h2>General</h2>

                <article className={isDarkTheme ? styles.selected : ''}>
                    <span>Dark theme</span>

                    <div>
                        <button onClick={() => changeConfig(!isDarkTheme, 't')}>
                            <span></span>
                        </button>
                    </div>
                </article>

                <article className={isInvertedTasks ? styles.selected : ''}>
                    <span>Invert order tasks</span>

                    <div>
                        <button
                            onClick={() => changeConfig(!isInvertedTasks, 'i')}
                        >
                            <span></span>
                        </button>
                    </div>
                </article>

                <article className={isOrderlyTasks ? styles.selected : ''}>
                    <span>Enable orderly task list by a number</span>

                    <div>
                        <button
                            onClick={() => changeConfig(!isOrderlyTasks, 'o')}
                        >
                            <span></span>
                        </button>
                    </div>
                </article>

                <h2>Functions</h2>

                <article>
                    <span>Delete done tasks</span>

                    <button onClick={() => changeCautionMessage(true, 0)}>
                        <span></span>
                    </button>
                </article>

                <article>
                    <span>Delete all the tasks</span>

                    <button onClick={() => changeCautionMessage(true, 1)}>
                        <span></span>
                    </button>
                </article>

                <article>
                    <span>Dismark all done tasks</span>

                    <button onClick={() => changeCautionMessage(true, 2)}>
                        <span></span>
                    </button>
                </article>
            </main>

            <div
                className={styles.closeModal}
                onClick={() => changeModalState(false, 's')}
            >
                Close
            </div>

            <footer>
                Made with
                <Image
                    src='/icons/heart-icon.svg'
                    width={16}
                    height={16}
                    alt='Heart'
                />
                by Diou
            </footer>
        </>
    );
}
