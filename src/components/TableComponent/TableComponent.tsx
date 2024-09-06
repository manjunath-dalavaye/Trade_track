import { Table } from "antd";
import "./Table.scss";
import { useGetDataQuery } from "../../Services/Api";
import {
  Bitcoin,
  Monero,
  Somecoin,
  Cardano,
  ChianLink,
  Coin,
  Etherum,
} from "../../icons/Icons";
import { Spin } from "antd";
import TableSkeleton from "./TableSkeleton";
import { Footer } from "antd/es/layout/layout";

interface TableData {
  key: string;
  name: string;
  marketcap: string;
  balance: string;
  price: string;
  "7D": string;
  "30D": string;
  "1Y": string;
  today: string;
}

const PortfolioTable = () => {
  const { data, isError, isLoading, isSuccess } = useGetDataQuery();
  const iconMap: { [key: string]: JSX.Element } = {
    Bitcoin: <Bitcoin />,
    Monero: <Monero />,
    Somecoin: <Somecoin />,
    Cardano: <Cardano />,
    ChianLink: <ChianLink />,
    Coin: <Coin />,
    Ethereum: <Etherum />,
  };

  const tableData: TableData[] | undefined = data?.map((item, index) => ({
    key: String(index),
    name: item.name,
    marketcap: item.marketcap,
    balance: item.balance,
    price: item.price,
    "7D": item["7D"],
    "30D": item["30D"],
    "1Y": item["1Y"],
    today: item.today,
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => (
        <div className="IconWithText">
          {iconMap[text] || <Bitcoin />}
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Marketcap",
      dataIndex: "marketcap",
      key: "marketcap",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "7D",
      dataIndex: "7D",
      key: "7D",
      render: (text: string) => (
        <span style={{ color: text.startsWith("-") ? "red" : "green" }}>
          {text}
        </span>
      ),
    },
    {
      title: "30D",
      dataIndex: "30D",
      key: "30D",
      render: (text: string) => (
        <span style={{ color: text.startsWith("-") ? "red" : "green" }}>
          {text}
        </span>
      ),
    },
    {
      title: "1Y",
      dataIndex: "1Y",
      key: "1Y",
      render: (text: string) => (
        <span style={{ color: text.startsWith("-") ? "red" : "green" }}>
          {text}
        </span>
      ),
    },
    {
      title: "Today",
      dataIndex: "today",
      key: "today",
      render: (text: string) => (
        <span style={{ color: text.startsWith("-") ? "red" : "green" }}>
          {text}
        </span>
      ),
    },
  ];
  if (isLoading) {
    return <TableSkeleton />;
  } else if (isError) {
    return <div style={{
        width: '64.625rem',
        height: '30.875rem',
        flexShrink: 0,
        marginLeft: '3.54rem',
        borderRadius: '0.375rem',
        overflow: 'hidden',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
      }}><h3>Error While Fetching Data</h3></div>;
  } else {
    return (
      <div className="portfolio-table-container">
        <Table columns={columns} dataSource={tableData} pagination={false}  footer={() => 'Footer'} bordered={true}
        style={{paddingBottom :'10px'}}
        />
      </div>
    );
  }
};

export default PortfolioTable;
