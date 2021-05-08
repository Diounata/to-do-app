import { createContext, ReactNode, useState } from 'react';

export const ModalContext = createContext({} as ModalContextProps);

interface ContextData {
    children: ReactNode;
}

interface ModalContextProps {
    isModalOpen: boolean;
    changeModalState(value: boolean): void;
    isTaskAdded: boolean;
    changeTaskMessage(value: boolean): void;
}

export function ModalContextProvider({ children }: ContextData) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTaskAdded, setIsTaskAdded] = useState(false);

    function changeModalState(value: boolean): void {
        setIsModalOpen(value);
    }

    function changeTaskMessage(value: boolean): void {
        setIsTaskAdded(value);
        console.log(isTaskAdded);
    }

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                changeModalState,
                isTaskAdded,
                changeTaskMessage,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}
