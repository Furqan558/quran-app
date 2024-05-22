import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import "../styles/arabic.css";
import "../styles/surahList.css";

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await api.get("/quran/chapters");
        setSurahs(response.data.chapters);
      } catch (error) {
        console.error("Error fetching surahs:", error);
      }
    };

    fetchSurahs();
  }, []);

  return (
    <>
      <div className="header">
        <h2>Let's begin the journey towards Enlightenment</h2>
        <div className="search-sort">
          <input
            type="text"
            placeholder="What do you want to read or listen?"
          />
          {/* <button>Search</button> */}
          <div className="quick-links">
            <span>Quick Links: </span>
            <button>AL-MULK</button>
            <button>AL-KAHF</button>
            <button>AR-RAHMAN</button>

            <span style={{ marginLeft: "10px" }}>Sort By: </span>
            <select
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                padding: "5px 7px",
                textTransform: "uppercase",
                borderRadius: "5px",
              }}
            >
              <option>Ascending Order</option>
              <option>Descending Order</option>
            </select>
          </div>
        </div>
      </div>
      <div className="surah-list">
        <ul className="surah-cards">
          {surahs.map((surah) => (
            <li key={surah.id} className="surah-card">
              <Link to={`/surah/${surah.id}`}>
                <div className="surah-details row">
                  <div className="col">
                    <span className="surah-number">{surah.id}</span>
                  </div>
                  <div className="col">
                    <div className="surah-name">{surah.name_simple}</div>
                    <span className="surah-info">
                      <span className="surah-origin">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.33337 4.16114L7.00759 7.15556M2.33337 4.16114L7.00759 1.16666L11.6667 4.16114M2.33337 4.16114V5.93211M7.00759 12.8333L2.33337 9.88399V5.93211M7.00759 12.8333L11.6667 9.88399V5.93211M7.00759 12.8333V8.90399M7.00759 7.15556L11.6667 4.16114M7.00759 7.15556V8.90399M11.6667 4.16114V5.93211M11.6667 5.93211L7.00759 8.90399M7.00759 8.90399L2.33337 5.93211"
                            stroke="#828282"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.6709 6.00937V4.16196L7.02473 7.01558L2.19568 4.39982V6.00937L7.02473 8.88136L11.6709 6.00937Z"
                            fill="#828282"
                          />
                        </svg>
                        {surah.revelation_place}
                      </span>
                      <span className="surah-verses">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 11.0835C6.2019 10.6227 5.29657 10.3801 4.375 10.3801C3.45343 10.3801 2.5481 10.6227 1.75 11.0835V3.50012C2.5481 3.03934 3.45343 2.79675 4.375 2.79675C5.29657 2.79675 6.2019 3.03934 7 3.50012M7 11.0835C7.7981 10.6227 8.70343 10.3801 9.625 10.3801C10.5466 10.3801 11.4519 10.6227 12.25 11.0835V3.50012C11.4519 3.03934 10.5466 2.79675 9.625 2.79675C8.70343 2.79675 7.7981 3.03934 7 3.50012M7 11.0835V3.50012"
                            stroke="#828282"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        {surah.verses_count} Verses
                      </span>
                    </span>
                  </div>
                  <div className="col">
                    <span className="surah-translation arabic-text">
                      {surah.name_arabic}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SurahList;
