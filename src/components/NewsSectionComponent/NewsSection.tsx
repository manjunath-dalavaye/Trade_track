import React from 'react';
import { Card, List, Typography } from 'antd';
import { formatDistanceToNow } from 'date-fns'; // For formatting dates

const { Title } = Typography;

const newsArticles = [
  {
    id: '1',
    title: 'Breaking News: Major Update in Technology',
    description: 'A major update in technology has just been announced. Read more to find out how this will affect you.',
    date: new Date('2024-09-01T10:00:00Z'),
  },
  {
    id: '2',
    title: 'New Innovations in AI',
    description: 'Discover the latest innovations in artificial intelligence and what they mean for the future.',
    date: new Date('2024-08-30T09:30:00Z'),
  },
  {
    id: '3',
    title: 'Economic Trends to Watch',
    description: 'An overview of the economic trends that are expected to shape the market in the coming months.',
    date: new Date('2024-08-25T08:45:00Z'),
  },
];

const NewsSection = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>News</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={newsArticles}
        renderItem={item => (
          <List.Item>
            <Card
              title={item.title}
              extra={<span>{formatDistanceToNow(item.date, { addSuffix: true })}</span>}
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

export default NewsSection;
