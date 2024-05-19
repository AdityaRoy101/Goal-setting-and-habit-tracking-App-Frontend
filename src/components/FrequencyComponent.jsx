
import { Checkbox } from 'antd';
import { useState } from 'react';
import CustomGoalButton from './CustomGoalButton';
import { DatePicker, Space } from 'antd';
import SelectedFrequencyLogs from '../sections/SelectedFrequencyLogs';

const FrequencyComponent = ({ taskArray, sendTime }) => {


  return(
    <main className=' justify-center items-center flex flex-col'>
        <section className=' flex gap-4 flex-col'>
            <Space direction="vertical" size={12}>
                <DatePicker
                showTime
                onChange={(value, dateString) => {
                    // console.log('Selected Time: ', value);
                    // console.log('Formatted Selected Time: ', dateString);
                    sendTime(dateString)
                }}
                />
            </Space>
        </section>
    </main>
  );
}

export default FrequencyComponent;