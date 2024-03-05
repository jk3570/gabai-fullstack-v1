import Joko from "../../img/developers/Joko.jpg";
import Lei from "../../img/developers/lei.png";
import Kadu from "../../img/developers/kadu.png";
import Leonard from "../../img/developers/leonard.png";
import Marot from "../../img/developers/marot.jpg";
import Nikol from "../../img/developers/nikol.jpg";
import Even from "../../img/developers/even.png";

const Developers = () => {
  const img = "w-[10rem] h-[10rem]";
  const center = "flex flex-col justify-center items-center";
  const rounded = "rounded-full border-2 border-gray-500";
  return (
    <>
      <div className="py-10">
        <center>
          <h1 className="font-bold">Meet the Developers</h1>
        </center>
        <br />
        <div>
          <div className={center}>
            <div className={img}>
              <img src={Joko} alt="" className={rounded} />
            </div>
            <h1 className="font-bold text-azure text-xl">Joko Gadingan</h1>
            <p>Project Manager / Backend Developer</p>
          </div>
          <br />
          <div className="grid grid-cols-3 max-md:grid-cols-2 gap-5">
            <div className={center}>
              <div className={img}>
                <img src={Lei} alt="" className={rounded} />
              </div>
              <h1 className="font-bold text-azure text-xl">
                Louise Angelo Ocopio
              </h1>
              <p>Lead Frontend Developer</p>
            </div>
            <div className={center}>
              <div className={img}>
                <img src={Kadu} alt="" className={rounded} />
              </div>
              <h1 className="font-bold text-azure text-xl">Evehn Kadusale</h1>
              <p>Lead AI Developer</p>
            </div>
            <div className={center}>
              <div className={img}>
                <img src={Even} alt="" className={rounded} />
              </div>
              <h1 className="font-bold text-azure text-xl">
                Evenezer Francis Basan
              </h1>
              <p>Frontend Developer/AI Prompt Engineer</p>
            </div>
            <div className={center}>
              <div className={img}>
                <img src={Nikol} alt="" className={rounded} />
              </div>
              <h1 className="font-bold text-azure text-xl">
                Nicole Del Carmen
              </h1>
              <p>Frontend Developer/AI Prompt Engineer</p>
            </div>
            <div className={center}>
              <div className={img}>
                <img src={Marot} alt="" className={rounded} />
              </div>
              <h1 className="font-bold text-azure text-xl">
                Mary Rose Crisostomo
              </h1>
              <p>Frontend Developer/AI Prompt Engineer</p>
            </div>
            <div className={center}>
              <div className={img}>
                <img src={Leonard} alt="" className={rounded} />
              </div>
              <h1 className="font-bold text-azure text-xl">
                John Leonard Leano
              </h1>
              <p>UI/UX Designer/AI Prompt Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Developers;
