const axios = require("axios");

const baseURL = "https://api.quran.com/api/v4";

const getChapters = async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/chapters`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getChapterPages = async (req, res) => {
  const { chapterId } = req.params;
  try {
    const response = await axios.get(`${baseURL}/chapters/${chapterId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getVersesByPage = async (req, res) => {
  const { pageId } = req.params;
  try {
    const response = await axios.get(
      `${baseURL}/verses/by_page/${pageId}?words=true&translation_fields=resource_name,language_id&per_page=1&fields=text_uthmani,chapter_id,hizb_number,text_imlaei_simple&translations=131,85&reciter=7&word_translation_language=en&page=1&word_fields=verse_key,verse_id,page_number,location,text_uthmani,code_v1,qpc_uthmani_hafs&mushaf=2`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getChapters,
  getChapterPages,
  getVersesByPage,
};
