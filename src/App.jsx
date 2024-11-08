import React, { useState } from "react";

const App = () => {
  const [price, setPrice] = useState(10000);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [history, setHistory] = useState([]);

  const updatePrice = (amount) => {
    if (amount > price) {
      alert("ยอดเงินไม่เพียงพอสำหรับการถอน");
      return;
    }
    setPrice(price - amount);
    setHistory([...history, { amount, balance: price - amount }]);
  };

  const handleCustomWithdraw = () => {
    const amount = parseInt(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      alert("กรุณาใส่จำนวนเงินที่ถูกต้อง");
      return;
    }
    updatePrice(amount);
    setWithdrawAmount(0);
  };

  const handlePresetWithdraw = (amount) => {
    setWithdrawAmount(amount);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-prompt">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl p-4">
        {/* Withdraw Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">ระบบถอนเงิน</h2>
          <h3 className="text-lg font-semibold mb-4">
            ยอดเงินคงเหลือ: <span className="text-red-600">{price} บาท</span>
          </h3>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => handlePresetWithdraw(100)}
              className="bg-red-500 text-white py-2 rounded-lg"
            >
              ถอน 100 บาท
            </button>
            <button
              onClick={() => handlePresetWithdraw(500)}
              className="bg-red-500 text-white py-2 rounded-lg"
            >
              ถอน 500 บาท
            </button>
            <button
              onClick={() => handlePresetWithdraw(1000)}
              className="bg-red-700 text-white py-2 rounded-lg"
            >
              ถอน 1,000 บาท
            </button>
            <button
              onClick={() => handlePresetWithdraw(5000)}
              className="bg-red-700 text-white py-2 rounded-lg"
            >
              ถอน 5,000 บาท
            </button>
          </div>
          <h3 className="text-lg font-semibold mb-2">จำนวนเงินที่ต้องการถอน:</h3>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="ระบุจำนวนเงิน"
            className="border border-gray-300 rounded-lg w-full p-2 mb-4"
          />
          <button
            onClick={handleCustomWithdraw}
            className="bg-blue-500 text-white w-full py-2 rounded-lg"
          >
            ถอนเงิน
          </button>
        </div>

        {/* History Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">ประวัติการถอนเงิน</h2>
          <ul className="space-y-2">
            {history.map((item, index) => (
              <li
                key={index}
                className="flex justify-between p-2 border-b border-gray-200"
              >
                <span>ถอน: {item.amount} บาท</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
