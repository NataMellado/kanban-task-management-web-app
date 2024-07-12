"use client";
import { useEffect, useState } from "react"; 

type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: SetValue<T>) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => { 
        try {
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } else {
                return initialValue;
            }
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: SetValue<T>) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        try {
            if (typeof window !== "undefined") {
                const item = window.localStorage.getItem(key);
                if (item) {
                    setStoredValue(JSON.parse(item));
                }
            }
        } catch (error) {
            console.error(error);
        }
    }, [key]);

    return [storedValue, setValue];
}

export default useLocalStorage;
