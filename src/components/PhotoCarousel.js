import React from 'react';
import Carousel from 'react-material-ui-carousel';
import "../App.css";
import { useViewport } from '../state/useViewport';
import { BREAK_POINT } from '../state/breakPoint';



function PhotoCarousel() {

  // sources = ["canyons.png", "peaks.png", "valley.png", "tree_with_balloon", "snow_path"];
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
        src={`peaks.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`valley.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`tree_with_balloon.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`canyons.png`}/>
        <img
        alt="canyons"
        style={{height: HEIGHT}}
        src={`birdseye_view_fit.png`}/>
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
              src={"birdseye_view_fit.png"}>
                Bird's eye view of the next map, <a href="https://www.planetminecraft.com/member/mcmeddon/">designed by McMeddon</a>
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="canyons"
              src={`canyons.png`}>
                Mesa Spawn
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="peaks"
              src={`peaks.png`}>
                Mountain Peaks
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="valley"
              src={`valley.png`}>
                Spawn Valley
              </Image>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image
              placeholder="tree with balloon"
              src={`tree_with_balloon.png`}>
                a splendid view
              </Image>
            </div>

        </Carousel>
    </div>
  );
}

export default PhotoCarousel;
