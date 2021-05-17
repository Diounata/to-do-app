import styles from '../../styles/modules/Settings/Settings.module.scss';

import SettingsComponent from './SettingsComponent';
import CautionMessage from './CautionMessage';

import { useModal } from '../../Contexts/ModalContext';
import { useSettings } from '../../Contexts/SettingsContext';

export default function Settings() {
    const { isSettingsOpen } = useModal();
    const { isCautionMessageOn } = useSettings();

    return (
        <div className={ isSettingsOpen ? styles.settingsContainer : styles.modalClosed }>
            <div>
                {isCautionMessageOn ? <CautionMessage /> : <SettingsComponent />}    
            </div>
        </div>
    );
}
