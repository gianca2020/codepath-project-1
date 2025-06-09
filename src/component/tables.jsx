import React from "react";
import Poster from "./poster";
//i shouldve called this card but oh well
const Tables = () => {
    return(
    <div className="tables-grid">
        <Poster 
          title="Alexandre Pantoja" 
          image="https://ufc.com/images/styles/inline/s3/2025-01/5/PANTOJA_ALEXANDRE_BELT_12-07.png?itok=bTsTyR7B" 
          description="Flyweight Champ" 
          link="https://www.ufc.com/athlete/alexandre-pantoja"
        />
        <Poster 
          title="Merab Dvalishvili" 
          image="https://ufc.com/images/styles/inline/s3/2025-06/DVALISHVILI_MERAB_BELT_06-07.png?itok=Q618Xr6J" 
          description="Bantamweight Champ" 
          link="https://www.ufc.com/athlete/merab-dvalishvili"
        />
        <Poster 
          title="Alexander Volkanovski" 
          image="https://ufc.com/images/styles/inline/s3/2024-02/VOLKANOVSKI_ALEXANDER_BELT_02-17.png?itok=JL7vKt3v" 
          description="the goat" 
          link="https://www.ufc.com/athlete/alexander-volkanovski"
        />
        <Poster
          title="Islam Makhachev"
          image="https://ufc.com/images/styles/inline/s3/2025-01/7/MAKHACHEV_ISLAM_BELT_01-18.png?itok=S-aY39p8"
          description="vacated UFC Lightweight Champion."
          link="https://www.ufc.com/athlete/islam-makhachev"
          />
          <Poster
          title="Jack Della Maddalena"
          image="https://ufc.com/images/styles/inline/s3/2025-05/DELLA_MADDALENA_JACK_BELT_05-10.png?itok=0Kf4B41E"
          description="Hates m&M's"
          link="https://www.ufc.com/athlete/jack-della-maddalena"
          />
          <Poster
          title="Dricus Du Plessis"
          image="https://ufc.com/images/styles/inline/s3/2025-02/DU_PLESSIS_DRICUS_BELT_02-08.png?itok=cXBgLUqR"
          description="Self proclaimed first African champion"
          link="https://www.ufc.com/athlete/dricus-du-plessis"
          />
          <Poster
          title="Magomed Ankalaev"
          image="https://ufc.com/images/styles/inline/s3/2025-03/ANKALAEV_MAGOMED_BELTMOCK.png?itok=ptzvKJ3h"
          description="broke my heart"
          link="https://www.ufc.com/athlete/magomed-ankalaev"
          />
          <Poster
          title="Jon Jones"
          image="https://ufc.com/images/styles/inline/s3/2025-01/5/JONES_JON_BELT_11-16.png?itok=mCioZKce"
          description="Not my champ"
          link="https://www.ufc.com/athlete/jon-jones"
          />
          <Poster
          title="Zhang Weili"
          image="https://ufc.com/images/styles/inline/s3/2025-02/ZHANG_WEILI_BELT_02-08.png?itok=gW1566iJ"
          description="I think shes cool"
          link="https://www.ufc.com/athletes#:~:text=%22MAGNUM%22-,ZHANG%20WEILI,-26%2D3%2D0"
          />
          <Poster
          title="Valentina Shevchenko"
          image="https://ufc.com/images/styles/inline/s3/2025-05/SHEVCHENKO_VALENTINA_BELT_05-10.png?itok=mEunz16d"
          description="Womens PFP champ"
          link="https://www.ufc.com/athlete/valentina-shevchenko"
          />
      </div>
);
}

export default Tables;