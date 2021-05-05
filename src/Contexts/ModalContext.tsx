import { createContext, ReactNode, useState } from 'react';

export const ModalContext = createContext({} as ModalContextProps);

interface ContextData {
    children: ReactNode;
}

interface ModalContextProps {
    isModalOpen: boolean;
    changeModalState(): void;
}

export function ModalContextProvider({ children }: ContextData) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function changeModalState() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, changeModalState }}>
            {children}
        </ModalContext.Provider>
    );
}
