import { Typography } from '@mui/material';
import React from 'react';
import Countdown from './Countdown';

function NextEvent() {
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{marginTop: '5vh'}}>
        <Typography style={{backgroundColor: 'rgba(0, 0, 0, 0.06', paddingBottom: 20}}>
            Our first experiment will be set between five warring teams with two goals: 
            <span style={{color: 'purple'}}> to survive an unknown impending threat,</span> and to <span style={{color: 'purple'}}>come out on top.</span>
        </Typography>
      </div>
      <span>
          <Typography style={{ marginTop: '5vh' }}>
            <Typography style={{ marginBottom: '2vh', color: 'black', fontSize: '5vw', fontFamily: 'MinecraftFive', lineHeight: 1 }}>
              <div style={{ textDecoration: 'underline' }}>Event Date</div>
              <span style={{ fontFamily: 'MinecraftFive', fontWeight: 'bold', color: 'dimGray' }}>1 / 2 / 2022</span>
            </Typography>
              <Countdown style={{marginTop: '5vh'}} date={"02 Jan 2022 16:00:00 EST"}/>
          </Typography>
        </span>
    </div>
  );
}

export default NextEvent;
