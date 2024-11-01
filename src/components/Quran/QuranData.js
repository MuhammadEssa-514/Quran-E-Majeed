// src/components/Quran.js
import React, { useEffect, useState } from 'react';

const Quran = () => {
  const [quranData, setQuranData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuranData = async () => {
      setLoading(true); // Start loading state
      try {
        console.log('Fetching Quran data...');
        const response = await fetch('https://quranapi.pages.dev/api/surah.json'); // Use HTTPS

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Quran data fetched successfully:', data); // Log the fetched data
        setQuranData(data.data); // Set the data
      } catch (error) {
        console.error('Error fetching Quran data:', error.message); // Log error
        setError(error.message); // Set error state
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    fetchQuranData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading message
  if (error) return <div>Error: {error}</div>; // Error message

  return (
    <div>
      <h1>The Holy Quran</h1>
      {quranData && quranData.surahs.slice(0, 15).map((surah) => ( // Display first 15 Surahs
        <div key={surah.number}>
          <h2>{surah.name} (Surah {surah.number})</h2>
          <p>{surah.englishNameTranslation}</p>
          <ul>
            {surah.ayahs.map((ayah) => ( // Loop through Ayahs
              <li key={ayah.number}>
                <span>Ayah {ayah.number}: </span>
                {ayah.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quran;
