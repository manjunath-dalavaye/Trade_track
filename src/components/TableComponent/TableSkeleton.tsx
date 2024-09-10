import { Table, Skeleton } from "antd";
import "antd/dist/reset.css";

const TableSkeleton = () => {
  const numRows = 8;
  const numCols = 8;

  const columns = Array.from({ length: numCols }, (_, index) => ({
    title: <Skeleton.Input style={{ width: 100 }} active />,
    dataIndex: `col${index + 1}`,
    key: index,
  }));

  const data = Array.from({ length: numRows }, (_, index) => ({
    key: index,
    ...Object.fromEntries(
      Array.from({ length: numCols }, (_, colIndex) => [
        `col${colIndex + 1}`,
        <Skeleton.Input style={{ width: 100 }} active />,
      ])
    ),
  }));

  return (
    <div
      style={{
        width: "64.625rem",
        height: "30.875rem",
        flexShrink: 0,
        marginLeft: "3.54rem",
        borderRadius: "0.375rem",
        overflow: "hidden",
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="key"
        loading={{ spinning: true, indicator: <Skeleton.Button active /> }}
      />
    </div>
  );
};

export default TableSkeleton;
