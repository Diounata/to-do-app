import { createContext, useContext, ReactNode, useState } from 'react';

export const ModalContext = createContext({} as ModalContextProps);

interface ContextData {
    children: ReactNode;
}

interface ModalContextProps {
    isAddTaskOpen: boolean;
    isTaskAdded: boolean;

    isSettingsOpen: boolean;

    changeModalState(value: boolean, modal: string): void;
    changeTaskMessage(value: boolean): void;
}

export function ModalContextProvider({ children }: ContextData) {
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
    const [isTaskAdded, setIsTaskAdded] = useState(false);

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    function changeModalState(value: boolean, modal: string): void {
        // 't' = task modal; 's' = settings modal
        modal === 't' ? setIsAddTaskOpen(value) : setIsSettingsOpen(value);
    }

    function changeTaskMessage(value: boolean): void {
        setIsTaskAdded(value);
    }

    return (
        <ModalContext.Provider
            value={{
                isAddTaskOpen,
                isTaskAdded,
                isSettingsOpen,
                changeModalState,
                changeTaskMessage,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
