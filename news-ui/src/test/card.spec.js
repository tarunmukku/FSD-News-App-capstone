
import Card from '../Components/card/Card';
import React from 'react';
import { render, screen } from '@testing-library/react';
// please add your test cases here

const news =       {
    "source": {
      "id": null,
      "name": "NDTV News"
    },
    "author": "Edited by NDTV News Desk",
    "title": "Queen Elizabeth II Updates:Queen Elizabeth II, Britain's Longest Reigning Monarch, Dies At 96 - NDTV",
    "description": "Apprehensions grew today over Queen Elizabeth II's well-being after Buckingham Palace said her doctors were \"concerned\" for her health and advisedthat she remain under supervision.",
    "url": "https://www.ndtv.com/world-news/queen-elizabeth-live-updates-latest-news-development-queen-elizabeths-doctors-concerned-over-health-3327662",
    "urlToImage": "https://c.ndtvimg.com/2022-09/bskmo8c_queen-elizabeth-_625x300_08_September_22.jpg",
    "publishedAt": "2022-09-08T18:38:10Z",
    "content": "Queen Elizabeth II: Queen Elizabeth II has been affected by persistent health problems. (File)\r\nNew Delhi: Queen Elizabeth II, Britain's longest serving monarch, has died at 96. She reigned for 70 ye… [+9330 chars]"
  }

it('Verify the dashboard DOM', () => {
   render(<Card news={news}/>);
   expect(screen.getByRole('button', { name: /Read later/i })).toBeInTheDocument();
  });