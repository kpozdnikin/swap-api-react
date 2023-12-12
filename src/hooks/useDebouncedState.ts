import { useState, useEffect } from 'react';

export const useDebounceState = (initialValue: string, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(initialValue);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [initialValue, delay]);

    return debouncedValue;
};
