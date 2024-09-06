// import React from "react";
// import { Button, Card, Typography } from "antd";
// import "./CryptoCard.scss";

// const { Text } = Typography;

// const CryptoCard: React.FC = () => {
//   return (
//     <div className="crypto-card-container">
//       <Card className="crypto-card">
//         <Text className="crypto-card-title">Bought Shiba Inu</Text>
//         <div className="crypto-card-info">
//           <Text className="crypto-card-avg">Avg </Text>
//           <Text className="crypto-card-avg-value">$0.000037</Text>
//         </div>
//         <div className="crypto-card-body">
//           <Text className="crypto-card-date">Yesterday</Text>
//           <Text className="crypto-card-amount">
//             22,013,222 <span className="crypto-card-shib">shib</span>
//           </Text>
//         </div>
//       </Card>
//       <footer className="crypto-card-footer">
//         <Text type="secondary">
//           <Button type="text" className="show-all-btn">Show all</Button>
//         </Text>
//       </footer>
//     </div>
//   );
// };

// export default CryptoCard;


import React from "react";
import { Card, Typography } from "antd";
import "./CryptoCard.scss";

const { Text } = Typography;

const CryptoCard: React.FC = () => (
  <div className="crypto-card-wrapper">
    <Card className="crypto-card">
      <div className="crypto-card-content">
        <Text className="crypto-card-title">Bought Shiba Inu</Text>
        <Text className="crypto-card-avg">Avg </Text>
        <Text className="crypto-card-avg1"> $0.000037</Text>

        <div className="crypto-card-body">
          <Text className="crypto-card-date">Yesterday</Text>
          <Text className="crypto-card-amount">
            22,013,222 <span className="crypto-card-shib">shib</span>
          </Text>
        </div>
      </div>
    </Card>
  </div>
);

export default CryptoCard;
