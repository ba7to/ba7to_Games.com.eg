import  Styles  from "./page.module.css"
import type { Metadata } from "next";
import Image from "next/image";
import car_img from "./img/game.ico"
import mario_img from "./favicon.ico"
import bat_img from "./img/Splash.bmp"
import col_img from "./img/تنزيل (3).jpeg"
import Gta_img from "./img/تنزيل (4).jpeg"
import spider_img from "./img/تنزيل (5).jpeg"
import serch from "./img/تنزيل (1).jpeg"
export const metadata: Metadata = {
  title: "ba7to_Games_git",
  description: "It,s website to download pc games",
};
function Home() {
    return(
    <>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8865069421209568"></script>
    <div id="big_box" className={Styles["big_container"]}>
            <div className={Styles["search-container"]}>
                <input type="text" className={Styles["search-input"]} placeholder="Search Games"/>
                <button className={Styles["search-button"]}><Image className={Styles["search"]} src={serch} alt="searck_Logo"/></button>
            </div>
            <h1 className={Styles["head1"]}>PC_Games:</h1>
            <div id="pc_games">
            <a href="https://up.downloadcomputergames.net/2021/04/need-for-speed/Need-for-Speed-Most-Wanted-2012.zip"><div className={Styles["b1"]} id="first_game">
            <Image  className={Styles["g1"]}  alt="g1" src={car_img}/>
            <h1>Need for speed most wanted<br/>Size:6G.b</h1>
            </div></a>
            <a href="https://up.downloadcomputergames.net/2020/08/super-mario/Super-Mario.zip"><div className={Styles["b2"]} id="second_game">
            <Image  className={Styles["g2"]}  alt="g2" src={mario_img}/>
            <h1>Marion Forver<br/>Size:30M.b</h1>
            </div></a>
            <div>
        <a href="https://up.downloadcomputergames.net/2020/11/batman-for-pc/Batman-Arkham-Asylum.zip"><div className={Styles["b3"]} id="third_game">
            <Image  className={Styles["g3"]}  alt="g3" src={bat_img}/>
            <h1>Batman Arkam asylum<br/>Size:7.33G.b</h1>
            </div></a>
        <a href="https://up.downloadcomputergames.net/2022/06/call-of-duty-modern-warfare-3/Call-of-Duty-Modern-Warfare-3.zip"><div className={Styles["b4"]} id="Fourth_game">
            <Image  className={Styles["g4"]}  alt="g4" src={col_img}/>
            <h1>Call of dute modern warfer3<br/>Size:8.29G.b</h1>
            </div></a>
            <a href="https://up.downloadcomputergames.net/2020/10/download-gta-5-for-pc/GTA-V.zip"><div className={Styles["b5"]} id="fifth_game">
            <Image  className={Styles["g5"]}  alt="g5" src={Gta_img}/>
            <h1>Gta-V<br/>Size:30G.b</h1>
            </div></a>
            <a href="https://uptogames.net/download/#https://s2.uptogames.net/do.php?down=Marvels-SpiderMan-Remastered.rar"><div className={Styles["b6"]} id="sixth_game">
            <Image  className={Styles["g6"]}  alt="g6" src={spider_img}/>
            <h1>Spider man Remasterd<br/>Size:40G.b</h1>
            </div></a>
            </div>
        </div>
        </div>
    </>
    )
 }

export default Home
