import { BsExclamationTriangleFill } from 'react-icons/bs';
import { useSettings } from '../Contexts/SettingsContext';

export default function DangerIcon() {
    const { isDarkTheme } = useSettings();

    return <BsExclamationTriangleFill size={24} color={isDarkTheme ? '#f39c12' : '#d35400'} title='Danger' />;
}
