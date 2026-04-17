'use client';
import { GiFiles } from "react-icons/gi";

import { useTimeline } from '@/context/TimelineContext';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = {
    Call: '#3B3B98',   
    Text: '#7C3AED',   
    Video: '#16A34A', 
};

const StatsPage = () => {
    const { entries } = useTimeline();

    
    const counts = entries.reduce((acc, entry) => {
        acc[entry.type] = (acc[entry.type] || 0) + 1;
        return acc;
    }, {});

    const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

    return (
        <div className=" px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Friendship Analytics</h1>

            <div className="card bg-base-100 shadow p-6">
                <p className="text-sm text-gray-500 mb-4">By Interaction Type</p>

                {data.length === 0 ? (
                    <div className="text-center text-gray-400 py-20">
                        <p className="text-4xl mb-3"><GiFiles /></p>
                        <p>No data yet. Log some interactions first.</p>
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}
                                outerRadius={120}
                                paddingAngle={4}
                                dataKey="value"
                            >
                                {data.map((entry) => (
                                    <Cell
                                        key={entry.name}
                                        fill={COLORS[entry.name] || '#888'}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend
                                iconType="circle"
                                iconSize={8}
                                formatter={(value) => (
                                    <span className="text-sm text-gray-600">{value}</span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default StatsPage;