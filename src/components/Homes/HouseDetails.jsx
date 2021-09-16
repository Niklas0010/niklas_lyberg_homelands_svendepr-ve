import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { myCostumFetch } from "../../helpers/helpers";
import { Link } from "react-router-dom";
import Style from "./housedetails.module.scss";
import billedeLogo from "../../assets/images/billedeLogo.png"
import planLogo from "../../assets/images/planLogo.png"
import lokationLogo from "../../assets/images/lokationLogo.png"
import favoritLogo from "../../assets/images/favoritLogo.png"
import { Favorite } from "@material-ui/icons";

export const HomeDetails = () => {
  const [detailsData, setHomeDetails] = useState("");

  const { id } = useParams();

  const getDetails = async () => {
    const url = `https://api.mediehuset.net/homelands/homes/${id}`;
    const result = await myCostumFetch(url);
    setHomeDetails(result);
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <section className={Style.detailsSection}>
      <div className={Style.detailsContainer}>
        {detailsData.item ? (
          <>
            <div className={Style.imgContainer}>
              <img src={detailsData.item.images[0].filename.large} alt="" />
            </div>

            <div className={Style.topInfoContainer}>

              <div className={Style.leftInfoContainer}>
                <p>{detailsData.item.address}</p>
                <p>{detailsData.item.zipcode}</p>
                <p>{detailsData.item.type}</p>
                <p>{detailsData.item.num_rooms}</p>
              </div>

              <div className={Style.logoContainer}>
                <Link to="/login"><img src={billedeLogo} alt="" /></Link>
                <img src={planLogo} alt="" />
                <img src={lokationLogo} alt="" />
                <img src={favoritLogo} alt="" />
              </div>

              <div className={Style.rightInfoContainer}>
                <p>{detailsData.item.price}</p>
                <p>{detailsData.item.payout}</p>
                <p>{detailsData.item.cost}</p>
              </div>
            </div>

            

            <div className={Style.houses_details}>
              <div>
                <p>Sagsnr. {detailsData.item.id}</p>
                <p>Boligareal {detailsData.item.floor_space}</p>
                <p>Grundareal {detailsData.item.ground_space}</p>
                <p>Antal rum {detailsData.item.num_rooms}</p>
                <p>Antal plan {detailsData.item.num_floors}</p>
              </div>

              <div>
                <p>Kælder {detailsData.item.basement_space}</p>
                <p>Byggeår {detailsData.item.year_construction}</p>
                <p>Ombygget {detailsData.item.year_rebuilt}</p>
                <p>Energimærke {detailsData.item.energy_label_name}</p>
                <p>Liggetid</p>
              </div>

              <div>
                <p>Kontantpris {detailsData.item.price}</p>
                <p>Udbetaling {detailsData.item.payout}</p>
                <p>Brutto ex. ejerudfigt {detailsData.item.gross}</p>
                <p>Netto ex. ejerudfigt {detailsData.item.net}</p>
                <p>Ejerudgift {detailsData.item.cost}</p>
              </div>

            </div>
          </>
        ) : (
          <p>No houses found</p>
        )}
      </div>
    </section>
  );
};
