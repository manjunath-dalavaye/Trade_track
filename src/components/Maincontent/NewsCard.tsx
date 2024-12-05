
import React from "react";
import { Button, Card, Typography } from "antd";
import "./NewsCard.scss";

const { Title, Text } = Typography;

const NewsCard: React.FC = () => {
  return (
    <>
      <Card
        className="news-card"
        cover={
          <img
            alt="News"
            src="https://s3-alpha-sig.figma.com/img/e812/f47b/6a8fa497eb6b0de0eaf572686e2a7025?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AR~v7YKqjIwGhXtR-jdWN5oOX8Lk2m602IoCO5iDg-fW5ZHF~JHdPzYdXiqVTkY6HCAe4JyOz4mDEvk3BEONK9KjhmSifsI6TeXG5OajqafOu1RxjjOpH4uVLKtCeOIoZM0Ug6GV6WzNrjf9N6XCITQ2TT1oHuZbuBUdqw7WHdIW6AD1W9XkPcMcQMGz~XPe2ZVnC4JXxJTGaY4kNB3PU3WF0JgD0vi5NfFD~oQ9BgG~BYvdWev5SbUTT4oBjw7l5TjJ1IKMTOTW3LRupxGa6aVypfPwcH1RaFgCP-N5GG7XjWW1ET9TCfWV5RQ02sqT~baf4-198Au3Uk0Y79XOEA__"
            className="main-image"
          />
        }
      >
        <Card.Meta
          description={
            <div className="content">
              <Title className="headline">This week in crypto</Title>
              <Text type="secondary" className="date">
                Dec 23, 2021
              </Text>
              <span className="summary">
                <div>Bitcoin is up 5%, Ethereum is up 12%,</div>
                <div className="name">
                  El Salvador buys the “dip” and more...
                </div>
              </span>
            </div>
          }
        />
      </Card>
      <div className="footer">
        <Text type="secondary" className="show-all-news">
          <Button type="text">Show all news</Button>
        </Text>
      </div>
    </>
  );
};

export default NewsCard;
