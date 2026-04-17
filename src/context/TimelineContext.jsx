'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [entries, setEntries] = useState([]);

  
    useEffect(() => {
        const saved = localStorage.getItem('timeline');
        if (saved) {
            setEntries(JSON.parse(saved));
        }
    }, []);

    const addEntry = (type, friendName) => {
        const newEntry = {
            id: Date.now(),
            type,
            friendName,
            date: new Date().toISOString(),
        };

        setEntries((prev) => {
            const updated = [newEntry, ...prev];
            localStorage.setItem('timeline', JSON.stringify(updated)); // save
            return updated;
        });
    };

    return (
        <TimelineContext.Provider value={{ entries, addEntry }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);