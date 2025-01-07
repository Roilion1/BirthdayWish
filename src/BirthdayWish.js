import React, { useState } from "react";
import confetti from "canvas-confetti";

const BirthdayWish = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showWishes, setShowWishes] = useState(false);

  const handleOpenCard = () => {
    // Bắn pháo giấy
    fireConfetti();
    // Hiện pháo xong mới hiện giao diện
    setTimeout(() => {
      setIsCardOpen(true);
      setTimeout(() => setShowWishes(true), 2000); // Hiện lời chúc sau 2 giây
    }, 1500); // Thời gian pháo bắn
  };

  const fireConfetti = () => {
    const duration = 1.5 * 1000; // 1.5 giây
    const end = Date.now() + duration;

    const giftsArray = ["🎁", "🎉", "💝", "🌟"];

    const frame = () => {
      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        ticks: 80,
        origin: {
          x: Math.random(),
          y: 0, // Bắn từ trên xuống
        },
        colors: ["#ff69b4", "#ff1493", "#ff4500", "#ffd700", "#ff6347"],
        shapes: giftsArray.map(gift => ({
          type: "circle",
          text: gift, // Thêm ký tự quà tặng vào pháo bông
          fontSize: 20,
          fontFamily: "Arial, sans-serif",
        })),
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  const message =
    "Chúc mừng sinh nhật người tôi yêu! Mong mọi điều tốt đẹp nhất sẽ đến với em trong ngày đặc biệt này.";

  const poem = [
    "Như Quỳnh xinh đẹp, sáng ngời,",
    "Mãi yêu đời, nở nụ cười tươi.",
    "Chúc em luôn hạnh phúc, vẹn tròn,",
    "Mọi ước mơ bay cao vươn tầm."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 flex items-center justify-center relative overflow-hidden">
      {/* Hiệu ứng lung linh */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 blur-2xl opacity-30"></div>

      {!isCardOpen ? (
        // Thiệp mời sinh nhật
        <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md relative z-10">
          <h1 className="text-3xl font-bold text-pink-600">Mở Thiệp Sinh Nhật 🎉</h1>
          <p className="mt-4 text-gray-700">Nhấn vào trái tim bên dưới để mở thiệp sinh nhật nhé!</p>
          <button onClick={handleOpenCard} className="mt-6">
            <img
              src={require("../src/assets/images/large_1625157242741.jpg")}
              alt="Heart"
              className="w-20 h-20 animate-bounce mx-auto"
            />
          </button>
        </div>
      ) : (
        // Giao diện chính
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          {/* Hình ảnh cô ấy */}
          <div className="absolute top-10">
            <img
              src={require("../src/assets/images/Người tôi thích.jpg")}
              alt="Cô ấy"
              className="w-60 h-60 rounded-full border-8 border-pink-600 shadow-lg"
            />
          </div>

          {/* Thêm 4 khổ thơ */}
          {showWishes && (
            <>
              <div className="flex flex-col items-center text-center mt-40">
                {/* Bánh kem */}
                <div className="relative z-10 mt-20">
                  <img
                    src={require("../src/assets/images/Banh-kem-thien-nga.jpg")}
                    alt="Bánh kem"
                    className="w-50 h-40 rounded-full shadow-lg border-4 border-yellow-300 animate-pulse"
                  />
                </div>

                <p className="mt-8 text-2xl font-bold text-gray-800 bg-white/70 rounded-lg p-4 shadow-md">
                  {message}
                </p>

                {/* Thêm 4 khổ thơ */}
                <div className="mt-10 text-lg text-gray-700">
                  {poem.map((line, index) => (
                    <p key={index} className="my-2 font-semibold">{line}</p>
                  ))}
                </div>
                <h2>"Anh code chưa được giỏi và code này anh mới làm gấp rút trong buổi tối nó không được đẹp, mong rằng em sẽ thích nó" </h2>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BirthdayWish;
