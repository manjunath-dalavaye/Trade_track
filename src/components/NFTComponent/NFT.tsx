import { Card, List, Typography } from 'antd';

const { Title } = Typography;


const nfts = [
  {
    id: '1',
    title: 'CryptoPunk #1234',
    description: 'A rare CryptoPunk with unique features and high value.',
    image: 'https://tse3.mm.bing.net/th?id=OIP.4nWDq4X9kwyOzY4wKTl9igHaEK&pid=Api&P=0&h=180', 
  }
];

const NftSection = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>NFTs</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={nfts}
        renderItem={item => (
          <List.Item>
            <Card
              cover={<img alt={item.title} src={item.image} style={{ height: '200px', objectFit: 'cover' }} />}
              title={item.title}
              style={{ width: '100%' }}
            >
              <p>{item.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default NftSection;
