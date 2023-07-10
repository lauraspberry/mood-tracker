import { ResponsiveCalendar, CalendarDatum } from '@nivo/calendar';
import myData from './data.json';

const NivoCalendar: React.FC = () => {
    const data: CalendarDatum[] = myData;
    // [
    //   { day: '2023-01-01', value: 10 },
    //   { day: '2023-02-01', value: 20 },
    //   { day: '2023-03-01', value: 5 },
    //   // Add more data points as needed...
    // ];
  
    return (
      <div style={{ height: '400px' }}>
        <ResponsiveCalendar
          data={data}
          from="2023-01-01"
          to="2023-12-31"
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
        />
      </div>
    );
  };
  
  export default NivoCalendar;
  