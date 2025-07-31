'use client'; // This directive is important for client-side components in Next.js 13+

import { useState } from 'react'; // Import useState hook
import Styles from './page.module.css';
import Image from 'next/image';
import car_img from './img/game.ico';
import mario_img from './favicon.ico';
import bat_img from './img/Splash.bmp';
import col_img from './img/تنزيل (3).jpeg'; // Assuming these are game images, not just placeholders
import Gta_img from './img/تنزيل (4).jpeg';
import spider1_img from './img/تنزيل (6).jpeg';
import serch from './img/تنزيل (1).jpeg';
import gta4_img from'./img/تنزيل (8).jpeg'
import mortal_img from './img/تنزيل (9).jpeg';
import pes_img from './img/تنزيل (7).jpeg'
import crash_img from './img/تنزيل (10).jpeg'
import min_img from "./img/تنزيل (11).jpeg"
import pes2_img from"./img/تنزيل (12).jpeg"
import medal_img from "./img/تنزيل (13).jpeg"
import car2_img from "./img/تنزيل (14).jpeg"
import farm_img from "./img/تنزيل (15).jpeg"
// You might want to define your game data in a more structured way,
// perhaps as an array of objects. This makes filtering easier.
const allGames = [
       {
    id: 'callofdute moder warfer3',
    name: 'Callofdutemodernwarfer3',
    size: '8G.b',
    image: col_img,
    link:'https://up.downloadcomputergames.net/2022/06/call-of-duty-modern-warfare-3/Call-of-Duty-Modern-Warfare-3.zip',
  },
     {
    id: 'gta4',
    name: 'GTA4',
    size: '4G.b',
    image: gta4_img,
    link:'https://up.downloadcomputergames.net/2020/09/grand-theft-auto-iv/Grand-Theft-Auto-IV.zip',
  },
   {
    id: 'Happyfarm',
    name: 'Happyfarm',
    size: '95M.B',
    image:farm_img,
    link:'https://up.downloadcomputergames.net/2020/06/farm-frenzy-3/Farm-Frenzy-3.exe',
  },
  {
    id: 'NeedForspeedmostwanted2005',
    name: 'NeedForspeedmostwanted2005',
    size: '657M.B',
    image:car2_img,
    link:'https://up.downloadcomputergames.net/2021/04/need-for-speed/NFS-Most-Wanted-2005.exe',
  },
   {
    id: 'Medalofhonor Air born',
    name: 'MedalofhonorAirborn',
    size: '3.36g.b',
    image:medal_img,
    link:'https://up.downloadcomputergames.net/2022/02/medal-of-honor-airborne/Medal-of-Honor-Airborne.zip',
  },
  {
    id: 'pes2017',
    name: 'PES2017',
    size: '3.88g.b',
    image:pes2_img,
    link:'https://up.downloadcomputergames.net/2020/10/download-pes-2017/PES_2017.zip',
  },
  {
    id: 'Mincraft',
    name: 'Mincraft',
    size: '45M.B',
    image:min_img,
    link:'https://up.downloadcomputergames.net/2021/02/minecraft-for-pc/Minecraft-TLauncher.zip',
  },
  {
    id: 'Crash Bandicoot 4 N.Sane Trilogy',
    name: 'CrashBandicoot4N.SaneTrilogy',
    size: '3.15G.b',
    image:crash_img,
    link:'https://up.downloadcomputergames.net/2021/02/crash-bandicoot-for-pc/Crash-Bandicoot-N.Sane-Trilogy.zip',
  },
  {
    id: 'Mortal Kombat 9',
    name: 'MortalKombat9',
    size: '8.5G.b',
    image:mortal_img,
    link:'https://up.downloadcomputergames.net/2021/11/mortal-kombat-9/Mortal-Kombat-Komplete-Edition.zip',
  },
   {
    id: 'pes2021',
    name: 'PES2021',
    size: '15.7G.b',
    image: pes_img,
    link:'https://up.downloadcomputergames.net/2021/10/download-pes-2021-pc/eFootball-PES-2021.zip',
  },
  {
    id: 'needforspeed',
    name: 'Needforspeedmostwanted',
    size: '6G.b',
    image: car_img,
    link: 'https://up.downloadcomputergames.net/2021/04/need-for-speed/Need-for-Speed-Most-Wanted-2012.zip',
  },
  {
    id: 'marioforever',
    name: 'MarionForver',
    size: '30M.b',
    image: mario_img,
    link: 'https://up.downloadcomputergames.net/2020/08/super-mario/Super-Mario.zip',
  },
  {
    id: 'batman arkhama sylem ',
    name: 'BatmanArkhamAsylum', // Assuming this is the name for bat_img
    size: '5g.b', // You'll need to fill this in
    image: bat_img,
    link: 'https://up.downloadcomputergames.net/2020/11/batman-for-pc/Batman-Arkham-Asylum.zip',
  },
  // Add other games here based on your images (col_img, Gta_img, spider_img)
  // Example for GTA and Spider-Man:
  {
    id: 'gta5',
    name: 'Gta5',
    size: '30G.b',
    image: Gta_img,
    link: 'https://up.downloadcomputergames.net/2020/10/download-gta-5-for-pc/GTA-V.zip', // Replace with actual link
  },
  {
    id: 'the amazing spider man 2',
    name: 'TheAmazingspideman2',
    size: '7.33',
    image: spider1_img,
    link: 'https://up.downloadcomputergames.net/2021/12/the-amazing-spider-man-2/The-Amazing-Spider-Man-2.zip' // Replace with actual link
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
              <a href={game.link} key={game.id} download>
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
          <p>@2025 ba7to_Games</p>
        </div>
      </div>
    </>
  );
}