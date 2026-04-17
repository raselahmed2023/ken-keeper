'use client';

import { useTimeline } from '@/context/TimelineContext';
import { useState } from 'react';
import { MdAddIcCall } from 'react-icons/md';
import { FcSms } from 'react-icons/fc';
import { FaVideo } from 'react-icons/fa6';
import { BsMailboxFlag } from "react-icons/bs";

const TimelinePage = () => {
    const { entries } = useTimeline();
    const [filter, setFilter] = useState('All');

    const filters = ['All', 'Call', 'Text', 'Video'];

    const filtered = filter === 'All'
        ? entries
        : entries.filter((e) => e.type === filter);

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const getIcon = (type) => {
        if (type === 'Call') return <MdAddIcCall size={18} />;
        if (type === 'Text') return <FcSms size={18} />;
        if (type === 'Video') return <FaVideo size={16} />;
    };

    const getIconBg = (type) => {
        if (type === 'Call') return 'bg-blue-100 text-blue-600';
        if (type === 'Text') return 'bg-green-100 text-green-600';
        if (type === 'Video') return 'bg-purple-100 text-purple-600';
    };

    return (
        <div className=" px-6 py-10">

            <h1 className="text-2xl font-bold mb-6">Timeline</h1>

           
            <select
                className="select select-bordered select-sm mb-8 w-48"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                {filters.map((f) => (
                    <option key={f}>{f}</option>
                ))}
            </select>

            
            {filtered.length === 0 ? (
                <div className="text-center text-gray-400 py-20">
                    <p className="text-4xl mb-4"><BsMailboxFlag /></p>
                    <p>No interactions yet.</p>
                    <p className="text-sm mt-1">Go to a friend and tap Call, Text, or Video.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-2">
                    {filtered.map((entry) => (
                        <div
                            key={entry.id}
                            className="flex items-center gap-4 bg-base-100 border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                        >
                            {/* Icon */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getIconBg(entry.type)}`}>
                                {getIcon(entry.type)}
                            </div>

                            {/* Text */}
                            <div>
                                <p className="text-sm">
                                    <span className="font-semibold">{entry.type}</span>
                                    <span className="text-gray-400"> with {entry.friendName}</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                    {formatDate(entry.date)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimelinePage;