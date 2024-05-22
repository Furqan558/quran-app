import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import "../styles/arabic.css";
import "../styles/quranpage.css";

const QuranPage = () => {
  const { surahId } = useParams();
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await api.get(`/quran/chapters/${surahId}`);
        const { chapter } = response.data;
        const firstPage = chapter.pages[0];
        const lastPage = chapter.pages[chapter.pages.length - 1];
        const fullRange = Array.from(
          { length: lastPage - firstPage + 1 },
          (_, i) => firstPage + i
        );
        setPages(fullRange);
        setCurrentPage(fullRange[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pages:", error);
        setLoading(false);
      }
    };

    fetchPages();
  }, [surahId]);

  useEffect(() => {
    const fetchVerses = async () => {
      if (currentPage !== null) {
        setLoading(true);
        try {
          const response = await api.get(`/quran/pages/${currentPage}/verses`);
          setVerses(response.data.verses);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching verses:", error);
          setLoading(false);
        }
      }
    };

    fetchVerses();
  }, [currentPage]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="quran-page-container">
      <div className="sidebar">
        <input type="text" placeholder="Search" className="search-input" />
        <ul className="surah-list">
          {pages.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`surah-item ${
                currentPage === pageNumber ? "active" : ""
              }`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              <span>{pageNumber}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="quran-content">
        <h2 className="surah-title">Surah {surahId}</h2>
        <div className="verse-container">
          {verses.map((verse) => (
            <div key={verse.id} className="verse">
              <div className="arabic-text">{verse.text_uthmani}</div>
              <div className="translation">{verse.translations[0].text}</div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {pages.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              disabled={currentPage === pageNumber}
              className={`page-button ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranPage;
