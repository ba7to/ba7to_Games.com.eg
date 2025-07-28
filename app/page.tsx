import  Styles  from "./page.module.css"
import type { Metadata } from "next";
import Image from "next/image";
import car_img from "./img/game.ico"
import mario_img from "./favicon.ico"
import bat_img from "./img/Splash.bmp"
import col_img from "./img/تنزيل (3).jpeg"
import srch from "./img/تنزيل (1).jpeg"
export const metadata: Metadata = {
  title: "ba7to_Games",
  description: "",
};
function Home() {
    return(
    <>
    <div id="big_box" className={Styles["big_container"]}>
    <form className={Styles["search-bar-container"]}>
        <input type="search" className={Styles["search_bar"]} id="search_bar" placeholder="Games" list="Games"/>
        <datalist id="Games">
            <option>Call of dute modern warfare 3</option>
            <option>Need for speed most wanted 2012</option>
            <option>Marion Forver</option>
            <option>Batman Arkam asylum</option>
        </datalist>
         <button  className="Search_button"><Image height={40} width={40} alt="search_button" src={srch}/></button>
        <br/>
        <br/>
    </form>
            <a href="https://up.downloadcomputergames.net/2021/04/need-for-speed/Need-for-Speed-Most-Wanted-2012.zip"><div className={Styles["b1"]} id="first_game">
            <Image  className={Styles["g1"]}  alt="g1" src={car_img}/>
            <h1>Need for speed most wanted 2012<br/>Size:6G.b</h1>
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
            <h1>Call of dute modern warfer 3<br/>Size:8.29G.b</h1>
            </div></a>
        </div>
        <br/>
        </div>
    </>
    )
 }
export default Home