import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles/404.module.scss';

export default function NotFound() {
    const [timeLeft, setTimeLeft] = useState(3);
    
    const router = useRouter();

    useEffect(() => {
        if (timeLeft) {
            setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
        } else {
            router.push('/');
        }
    }, [timeLeft]);

    return (
        <div className={styles.container}>
            <span> 404 </span>

            This page could not be found. <br />
            You are going to be redirected in {timeLeft} seconds.
        </div>
    );
}
