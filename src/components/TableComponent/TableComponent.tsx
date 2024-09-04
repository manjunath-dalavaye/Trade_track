import { Table } from 'antd';
import './Table.scss';  
import { useGetDataQuery } from '../../Services/Api';

const PortfolioTable = () => {
    const {data,isError,isLoading,isSuccess} = useGetDataQuery();
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text:string) => (
        <div className="coin-name">
          <img src={`path/to/${text.toLowerCase()}.svg`} alt={text} className="coin-icon" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Marketcap',
      dataIndex: 'marketcap',
      key: 'marketcap',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '7D',
      dataIndex: '7D',
      key: '7D',
      render: (text:string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
    },
    {
      title: '30D',
      dataIndex: '30D',
      key: '30D',
      render: (text:string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
    },
    {
      title: '1Y',
      dataIndex: '1Y',
      key: '1Y',
      render: (text:string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
    },
    {
      title: 'Today',
      dataIndex: 'today',
      key: 'today',
      render: (text:string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
    },
  ];

  

  return (
    
      <Table columns={columns} dataSource={data} pagination={false} className='table' />

  );
};

export default PortfolioTable;
