import React, { useState } from "react";
import "./index.css";

function App() {
  const [current, setCurrent] = useState(0);
  const Images = [
    "https://cdn.yeniakit.com.tr/images/news/625/istanbulda-72lik-deprem-olacak-kandilli-rasathanesi-muduru-tarih-verip-uyardi-h1646230923-f1a830.png",
    "http://turkiye24.net/wp-content/uploads/2023/02/Turkiye-deprem-felaketine-agliyor.jpeg",
    "https://im.haberturk.com/2019/01/22/ver1548173698/2299681_810x458.jpg",
    "https://www.marketingturkiye.com.tr/wp-content/uploads/2023/02/deprem.jpeg",
    "https://static.euronews.com/articles/stories/07/37/81/00/1000x563_cmsv2_98254fc2-3b44-57f6-95d8-79a03edbdd87-7378100.jpg",
    "https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2023/06/turkiyedeki_depremler_gronlandda_da_hissedildi_1675684762_2637.jpg",
    "https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2023/02/07/1102051-1463249538.jpg?itok=7voXSyzf",
    "https://cdn1.ntv.com.tr/gorsel/D-ezre4P00KcD3iuMSnl0Q.jpg?width=1000&mode=crop&scale=both",
    "https://cdn1.ntv.com.tr/gorsel/ZCNQwyrP1Em8YzZOOcc9Jw.jpg?width=1000&mode=crop&scale=both",
    "https://i.haberglobal.com.tr/storage/files/images/2023/02/11/ep8-hRl6.jpg",
  ];

  const nextSlide = () => {
    setCurrent(current === Images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? Images.length - 1 : current - 1);
  };

  return (
    <div>
      <h2> Turkey Earthquake </h2>

      <div className="slider">
        <button className="left-arrow" onClick={prevSlide}>
          ⬅
        </button>
        <button className="right-arrow" onClick={nextSlide}>
          ⮕
        </button>
      </div>
      {Images.map(
        (image, index) =>
          current === index && (
            <div key={image} className="slide">
              <img src={image} alt="images" className="image" />
            </div>
          )
      )}
    </div>
  );
}

export default App;
