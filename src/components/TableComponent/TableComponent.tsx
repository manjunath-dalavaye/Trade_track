import { Table } from 'antd';
import './Table.scss';  
import { useGetDataQuery } from '../../Services/Api';


interface TableData {
    key: string;
    name: string;
    marketcap: string;
    balance: string;
    price: string;
    '7D': string;
    '30D': string;
    '1Y': string;
    today: string;
}

const PortfolioTable = () => {
    const { data, isError, isLoading, isSuccess } = useGetDataQuery();

  
    const tableData: TableData[] | undefined = data?.map((item, index) => ({
        key: String(index),  
        name: item.name,
        marketcap: item.marketcap,
        balance: item.balance,
        price: item.price,
        '7D': item['7D'],
        '30D': item['30D'],
        '1Y': item['1Y'],
        today: item.today,
    }));

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => (
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
            render: (text: string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
        },
        {
            title: '30D',
            dataIndex: '30D',
            key: '30D',
            render: (text: string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
        },
        {
            title: '1Y',
            dataIndex: '1Y',
            key: '1Y',
            render: (text: string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
        },
        {
            title: 'Today',
            dataIndex: 'today',
            key: 'today',
            render: (text: string) => <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>{text}</span>,
        },
    ];

    return (
        <div className="portfolio-table-container">
            <Table columns={columns} dataSource={tableData} pagination={false} />
        </div>
    );
};

export default PortfolioTable;
