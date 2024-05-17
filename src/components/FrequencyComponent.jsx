
import { Checkbox } from 'antd';
import { useState } from 'react';
import CustomGoalButton from './CustomGoalButton';
// import { DatePicker, Select, Space, TimePicker } from 'antd';
import { DatePicker, Space } from 'antd';
import SelectedFrequencyLogs from '../sections/SelectedFrequencyLogs';

const arr = [];
const FrequencyComponent = () => {

    // const arr[];
    const [freqLength, setFreqLength] = useState(0);
    const [fullDate, setFullDate] = useState("");

    const setDate = () => {
        // setFullDate(text);
        arr.push(fullDate);
        setFreqLength(prev => prev+1);
    }

    // const [dates, setDates] = useState({
    //     su: false,
    //     mo: false,
    //     tu: false,
    //     we: false,
    //     th: false,
    //     fr: false,
    //     sa: false

    // })
    // const onChange = (e) => {
    //     console.log(`checked = ${e.target.checked}`);
    // };
    
    // const { Option } = Select;
    // const [type, setType] = useState('time');

    // const PickerWithType = ({ type, onChange }) => {
    //     if (type === 'time') return <TimePicker onChange={onChange} />;
    //     if (type === 'date') return <DatePicker onChange={onChange} />;
    //     return <DatePicker picker={type} onChange={onChange} />;
    // };

    // const { RangePicker } = DatePicker;

    // const onOk = (value) => {
        // setFullDate()
        // console.log('onOk: ', value);
    // };

  return(
    <main className=' justify-center items-center flex flex-col'>
        <section className=' flex gap-4 flex-col'>
            <Space direction="vertical" size={12}>
                <DatePicker
                showTime
                onChange={(value, dateString) => {
                    console.log('Selected Time: ', value);
                    console.log('Formatted Selected Time: ', dateString);
                    setFullDate(dateString)
                }}
                // onOk={onOk}
                />
            </Space>
            <CustomGoalButton text="Select" work={setDate} customStyle="text-[12px]" />
            {freqLength > 0
            ?
            <section>
                {console.log(arr)}
                <SelectedFrequencyLogs logsArray={arr}/>
            </section>
            :
            <></> }
        </section>
    </main>
  );
}

export default FrequencyComponent;