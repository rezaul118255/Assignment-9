import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const assignmentMark = [
    {
        assignmentNo: 'Assignment01',
        mark: 48,

    },
    {
        assignmentNo: 'Assignment02',
        mark: 54,

    },
    {
        assignmentNo: 'Assignment03',
        mark: 58,

    },
    {
        assignmentNo: 'Assignment04',
        mark: 60,

    },
    {
        assignmentNo: 'Assignment05',
        mark: 50,

    },
    {
        assignmentNo: 'Assignment06',
        mark: 40,

    },
    {
        assignmentNo: 'Assign07',
        mark: 60,

    },
    {
        assignmentNo: 'Assignment08',
        mark: 48,

    }
]

const Statistics = () => {
    return (
        <div>
            <AreaChart
                width={900}
                height={400}
                data={assignmentMark}
                margin={{
                    top: 30,
                    right: 30,
                    left: 30,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="assignmentNo" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>

        </div>
    );
};

export default Statistics;