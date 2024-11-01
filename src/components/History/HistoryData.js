import React, { useState } from 'react';

function HistoryData() {
  const [expanded, setExpanded] = useState({});

  const islamicHistory = [
    {
      heading: 'Quran Majeed',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis enim aliquid necessitatibus culpa, nam, obcaecati ducimus ullam libero iure doloremque fuga cum ipsam, nihil est voluptates. Optio, quis, vitae iusto eius praesentium dicta, sed itaque dolore quas repellat necessitatibus. Libero, voluptas eius. Incidunt officia voluptatem vel a cupiditate saepe mollitia.`,
    },
    {
      heading: 'Hazarat Muhammad (PBUH)',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta pariatur hic corporis non quibusdam accusamus nam! Hic eveniet dolorum molestiae expedita amet recusandae magni, ipsum libero blanditiis mollitia ipsa assumenda quam, quidem officiis quis quibusdam officia dolor et, itaque eaque necessitatibus?`,
    },
    {
      heading: 'Fiq Jafaria',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magnam ullam impedit consectetur odit obcaecati debitis facilis, recusandae commodi? Numquam reiciendis eligendi minus aut, consequatur laborum animi impedit, autem alias sunt cupiditate. Delectus sapiente, eligendi vero eius veniam dignissimos optio fugiat, consequuntur inventore blanditiis, beatae quis iste molestias aliquam culpa!`,
    },
    {
      heading: 'Hazarat Ali (AS)',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta pariatur hic corporis non quibusdam accusamus nam! Hic eveniet dolorum molestiae expedita amet recusandae magni, ipsum libero blanditiis mollitia ipsa assumenda quam, quidem officiis quis quibusdam officia dolor et, itaque eaque necessitatibus?`,
    },
  ];

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getTextPreview = (text, expanded) => {
    const lines = text.split(' ');
    return expanded ? text : lines.slice(0, 30).join(' ') + '...';
  };

  return (
    <div className='bg-blueGray-800'>
      <h1 className='text-2xl font-bold text-white text-center my-4'>History</h1>
      {islamicHistory.map((item, index) => (
        <div
          key={index}
          className={`bg-yellow-500 w-1/2 rounded-lg ${index % 2 === 1 ? 'ml-auto' : ''} mb-4 p-2`}
        >
          <h1 className='text-xl font-semibold text-blueGray-800'>{item.heading}</h1>
          <p className='text-white'>
            {getTextPreview(item.description, expanded[index])}
          </p>
          <button
            className='text-blue-300 underline'
            onClick={() => toggleExpand(index)}
          >
            {expanded[index] ? 'Show Less' : 'Show More'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default HistoryData;
