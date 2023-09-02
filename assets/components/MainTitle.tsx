//this file will be used "in line" with the homepage app in Django
import React from "react";

import Title from "./Title";
import Blob from "../imgs/title_blob.svg";

function HomepageHero() {
  return (
    <>
      <Title
        highlight_word="non-profits"
        id="hero-title"
        background_img={[Blob, "Blob image as background for the title"]}
      >
        Helping non-profits share their resources since 2023
      </Title>
    </>
  );
}

export default HomepageHero;
