import { useModal } from '../../Contexts/ModalContext';
import { useSettings } from '../../Contexts/SettingsContext';
import styles from '../../styles/modules/Settings/CautionMessage.module.scss';

export default function CautionMessage() {
    const {
        selectedFunction,
        changeCautionMessage,
        deleteDoneTasks,
        deleteAllTasks,
        dismarkAllTasks,
    } = useSettings();

    const { changeModalState } = useModal();

    // -1 = null; 0 = delete done tasks; 1 = delete all tasks; 2 = dismark all tasks.

    const message = [
        {
            text: 'delete all done tasks',
            action: deleteDoneTasks,
        },

        {
            text: 'delete all the tasks',
            action: deleteAllTasks,
        },

        {
            text: 'dismark all done tasks',
            action: dismarkAllTasks,
        },
    ];

    return (
        <div className={styles.cautionMessageContainer}>
            <h2>Caution!</h2>

            <p> Are you sure you want to {message[selectedFunction].text}? </p>

            <div>
                <button onClick={() => changeCautionMessage(false, -1)}>
                    No
                </button>

                <button
                    onClick={() => (
                        message[selectedFunction].action(),
                        changeCautionMessage(false, -1),
                        changeModalState(false, 's')
                    )}
                >
                    Yes
                </button>
            </div>
        </div>
    );
}
