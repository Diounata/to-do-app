import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/modules/Settings/ChangedSettingMessage.module.scss';

import { useSettings } from '../../Contexts/SettingsContext';

export default function ChangedTaskMessage() {
    const { selectedFunction, changeHasSettingChanged } = useSettings();

    // -1 = null; 0 = delete done tasks; 1 = delete all tasks; 2 = dismark all tasks.
    const message = [
        'done tasks were deleted',
        'tasks were deleted',
        'tasks were dismarked',
    ];

    const [display, setDisplay] = useState('flex'); // Possible values: 'flex' | 'none'

    useEffect(() => {
        setTimeout(() => {
            setDisplay('none');
            changeHasSettingChanged(false);
        }, 3000);
    }, []);

    return (
        <div className={styles.container} style={{ display: display }}>
            <div>
                <Image
                    src='/icons/check-circle-icon.svg'
                    width={16}
                    height={16}
                    alt='Check'
                />

                Your {message[selectedFunction]} successfuly!
            </div>

            <div className={styles.progressBar}></div>
        </div>
    );
}
