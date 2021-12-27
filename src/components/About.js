import { Typography } from '@mui/material';
import React from 'react';
import PhotoCarousel from './PhotoCarousel';

function About() {

  let TOP_MARGIN = '3vh'

  return (
      <div style={{marginTop: '5vh'}}>
        <Typography style={{marginTop: TOP_MARGIN}}>
            Minecraft Social Experiments is a new YouTube project that tests players' survival skills in 
            exciting and challenging scenarios.
        </Typography>
        <Typography style={{marginTop: TOP_MARGIN}}>
            The project aims to provide 
            players an interesting experience and later a YouTube video to revisit the 
            fun again.
        </Typography>
        <Typography style={{marginTop: TOP_MARGIN}}>
            Each event will have a maximum of 100 players and be made with custom maps, plugins, and resource packs.
        </Typography>
        <div>
          <PhotoCarousel/>
        </div>

      </div>

  );
}

export default About;
