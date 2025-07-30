'use client'; // This directive is important for client-side components in Next.js 13+

import { useState } from 'react'; // Import useState hook
import Styles from './page.module.css';
import Image from 'next/image';
import car_img from './img/game.ico';
import mario_img from './favicon.ico';
import bat_img from './img/Splash.bmp';
import col_img from './img/تنزيل (3).jpeg'; // Assuming these are game images, not just placeholders
import Gta_img from './img/تنزيل (4).jpeg';
import spider_img from './img/تنزيل (5).jpeg';
import serch from './img/تنزيل (1).jpeg';
// You might want to define your game data in a more structured way,
// perhaps as an array of objects. This makes filtering easier.
const allGames = [
     {
    id: 'callofdute moder warfer3',
    name: 'Call of dute modern warfer 3',
    size: '8G.b',
    image: col_img,
    link: '',
  },
  {
    id: 'needforspeed',
    name: 'Need for speed most wanted',
    size: '6G.b',
    image: car_img,
    link: 'https://up.downloadcomputergames.net/2021/04/need-for-speed/Need-for-Speed-Most-Wanted-2012.zip',
  },
  {
    id: 'marioforever',
    name: 'Marion Forver',
    size: '30M.b',
    image: mario_img,
    link: 'https://up.downloadcomputergames.net/2020/08/super-mario/Super-Mario.zip',
  },
  {
    id: 'batman arkhama sylem ',
    name: 'Batman Arkham Asylum', // Assuming this is the name for bat_img
    size: 'Size:5g.b', // You'll need to fill this in
    image: bat_img,
    link: 'https://up.downloadcomputergames.net/2020/11/batman-for-pc/Batman-Arkham-Asylum.zip',
  },
  // Add other games here based on your images (col_img, Gta_img, spider_img)
  // Example for GTA and Spider-Man:
  {
    id: 'Grand Theft Auto V',
    name: 'Grand Theft Auto V',
    size: 'Size:30G.b',
    image: Gta_img,
    link: '#', // Replace with actual link
  },
  {
    id: 'Spider-Man Remastered',
    name: 'Spider-Man Remastered',
    size: 'Size:40',
    image: spider_img,
    link: '#', // Replace with actual link
  },
  // Add other games corresponding to col_img if applicable
];


export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter games based on the search term
  const filteredGames = allGames.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Google AdSense script - keep this outside the main component render if possible for better performance or manage it with Next.js Script component */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8865069421209568"
        crossOrigin="anonymous" // Added crossOrigin for better practice
      ></script>

      <div id="big_box" className={Styles['big_container']}>
        <div className={Styles['search-container']}>
          <input
            type="text"
            className={Styles['search-input']}
            placeholder="Search Games"
            value={searchTerm} // Controlled component: input value tied to state
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
          />
          {/* The search button can still be there, but the filtering happens on input change */}
          <button className={Styles['search-button']}>
            <Image className={Styles['search']} src={serch} alt="Search Logo" />
          </button>
        </div>

        <h1 className={Styles['head1']}>PC_Games:</h1>

        <div id="pc_games">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <a href={game.link} key={game.id}>
                <div className={Styles['b1']} id={game.id}>
                  {/* You might want dynamic class names if your styles vary per game type */}
                  <Image className={Styles['g1']} alt={game.name} src={game.image} />
                  <h1>
                    {game.name}
                    <br />
                    Size:{game.size}
                  </h1>
                </div>
              </a>
            ))
          ) : (
            <p>No games found matching your search.</p>
          )}
        </div>
      </div>
    </>
  );
}