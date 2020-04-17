import React from "react";

import corona from "../../assets/images/covid.png";

import "./styles.scss";

export default function About() {
  return (
    <main>
      <div className="containerAbout">
        <h2>Coronavirus</h2>
        <img src={corona} alt="corona img" />
        <article>
          <p>
            Coronaviruses are a group of related viruses that cause diseases in
            mammals and birds. In humans, coronaviruses cause respiratory tract
            infections that can range from mild to lethal. Mild illnesses
            include some cases of the common cold (which has other possible
            causes, predominantly rhinoviruses), while more lethal varieties can
            cause SARS, MERS, and COVID-19. Symptoms in other species vary: in
            chickens, they cause an upper respiratory tract disease, while in
            cows and pigs they cause diarrhea. There are yet to be vaccines or
            antiviral drugs to prevent or treat human coronavirus infections.
          </p>
        </article>
      </div>
    </main>
  );
}
