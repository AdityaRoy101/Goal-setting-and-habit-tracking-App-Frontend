
import { DatePicker, Space } from 'antd';
import { useState } from 'react';
import moment from 'moment';

const DateRangePicker = ({ startDate, endDate }) => {

    const { RangePicker } = DatePicker;
    const handleChangeDebut = (range) => {
        const valueOfInput1 = range[0].format('YYYY-MM-DD');
        const valueOfInput2 = range[1].format('YYYY-MM-DD');
        
        startDate(valueOfInput1);
        endDate(valueOfInput2);
    }
    return(
        <section>
            <Space direction="vertical" size={12}>
                <RangePicker
                    onChange={handleChangeDebut} />
            </Space>
        </section>
    );
};
export default DateRangePicker;