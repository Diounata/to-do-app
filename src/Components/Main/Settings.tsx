import Image from 'next/image';
import styles from '../../styles/modules/main/Settings.module.scss';

import { useModal } from '../../Contexts/ModalContext';
import { useSettings } from '../../Contexts/SettingsContext';

export default function Settings() {
    const { isSettingsOpen, changeModalState } = useModal();
    const {
        changeConfig,
        isDarkTheme,
        isOrderlyTasks,
        deleteDoneTasks,
        deleteAllTasks,
        dismarkAllTasks,
    } = useSettings();

    return (
        <div
            className={
                isSettingsOpen ? styles.settingsContainer : styles.modalClosed
            }
        >
            <div>
                <header>
                    <h1>Settings</h1>
                </header>

                <main>
                    <h2>General</h2>

                    <article className={isDarkTheme ? styles.selected : ''}>
                        <span>Dark theme</span>

                        <button onClick={() => changeConfig(!isDarkTheme, 't')}>
                            <span></span>
                        </button>
                    </article>

                    <article className={isOrderlyTasks ? styles.selected : ''}>
                        <span>Enable orderly task list by a number</span>

                        <button
                            onClick={() => changeConfig(!isOrderlyTasks, 'o')}
                        >
                            <span></span>
                        </button>
                    </article>

                    <h2>Functions</h2>

                    <article>
                        <span>Delete done tasks</span>

                        <button onClick={deleteDoneTasks}>
                            <span></span>
                        </button>
                    </article>

                    <article>
                        <span>Delete all the tasks</span>

                        <button onClick={deleteAllTasks}>
                            <span></span>
                        </button>
                    </article>

                    <article>
                        <span>Dismark all done tasks</span>

                        <button onClick={dismarkAllTasks}>
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
            </div>
        </div>
    );
}