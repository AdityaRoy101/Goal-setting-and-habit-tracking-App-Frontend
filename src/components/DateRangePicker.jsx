
import { DatePicker, Space } from 'antd';

const DateRangePicker = () => {

    const { RangePicker } = DatePicker;
    return(
        <section>
            <Space direction="vertical" size={12}>
                <RangePicker />
            </Space>
        </section>
    );
};
export default DateRangePicker;