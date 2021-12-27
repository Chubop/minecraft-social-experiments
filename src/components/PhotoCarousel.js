import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import "../App.css";
import { useViewport } from '../state/useViewport';
import { BREAK_POINT } from '../state/breakPoint';



function PhotoCarousel() {

  let sources = ["canyons.png", "peaks.png", "valley.png", "tree_with_balloon", "snow_path"];
  let HEIGHT = "50VW"


  const { width } = useViewport();

  
  function Image(props){
    return(
      <>
        <img
        className={"imageHolder"}
        src={props.src}
        alt={props.alt}
        style={{
                width: '100%',
                maxHeight: width > BREAK_POINT && '60vh'}}/>
        <div style={{fontFamily: 'MinecraftFive'}}>{props.children}</div>
      </>
    )
  }

  return (
    <div style={{marginTop: '5vh'}}>
      <div style={{display: 'none'}}>

        {/* put all of these images here to load them for the carousel */}
        <img
        alt="canyons"
        src={`http://localhost:3000/peaks.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`http://localhost:3000/valley.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`http://localhost:3000/tree_with_balloon.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`http://localhost:3000/canyons.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`http://localhost:3000/birdseye_view_fit.png`}/>
      </div>

        <Carousel
        autoPlay={false}
        animation={width > BREAK_POINT ? 'fade' : 'slide'}
        changeOnFirstRender={true}
        swipe={width < BREAK_POINT}
        navButtonsAlwaysInvisible={width > BREAK_POINT}
        navButtonsAlwaysVisible={width < BREAK_POINT}
        indicators={width > BREAK_POINT}
        fullHeightHover={true}
        style={{minHeight: 400}}>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="Birdseye view"
              src={`http://localhost:3000/birdseye_view_fit.png`}>
                Bird's eye view of the next map, <a href="https://www.planetminecraft.com/member/mcmeddon/">designed by McMeddon</a>
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="canyons"
              src={`http://localhost:3000/canyons.png`}>
                Mesa Spawn
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="peaks"
              src={`http://localhost:3000/peaks.png`}>
                Mountain Peaks
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="valley"
              src={`http://localhost:3000/valley.png`}>
                Spawn Valley
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="tree with balloon"
              src={`http://localhost:3000/tree_with_balloon.png`}>
                a splendid view
              </Image>
            </div>

        </Carousel>
    </div>
  );
}

export default PhotoCarousel;
