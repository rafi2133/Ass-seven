import React, { useContext } from 'react';
import { FriendContext } from '../../components/context/FriendContext';
import { Pie, PieChart, Cell, Legend, Tooltip } from 'recharts';

const Status = () => {
    const { contacted, texted, called } = useContext(FriendContext);

    // Prepare data for the pie chart
    const chartData = [
        { name: 'Voice Calls', value: called.length, color: '#37A163' },
        { name: 'Texts', value: texted.length, color: '#7E35E1' },
        { name: 'Video Calls', value: contacted.length, color: '#244D3F' }
    ];

    // Filter out zero values
    const filteredData = chartData.filter(item => item.value > 0);

    // Custom colors for each segment
    const COLORS = ['#37A163', '#7E35E1', '#244D3F'];

    return (
        <div className="w-10/12 mx-auto py-8">
            <h2 className="font-bold text-2xl mb-6 text-center">Friendship Analytics</h2>

            {filteredData.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">No interactions yet.</p>
                    <p className="text-sm text-gray-400 mt-2">Start interacting with your friends to see statistics!</p>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    {/* Pie Chart */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <PieChart width={600} height={400}>
                            <text
                                x={20}  
                                y={20}   
                                className="text-xs font-bold "
                            >
                                By Interaction Type
                            </text>
                            <Pie
                                data={filteredData}
                                innerRadius="60%"
                                outerRadius="80%"
                                cornerRadius="10%"
                                paddingAngle={5}
                                dataKey="value"
                                nameKey="name"
                                isAnimationActive={true}  // Just set to true directly
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                labelLine={true}
                            >
                                {filteredData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Status;