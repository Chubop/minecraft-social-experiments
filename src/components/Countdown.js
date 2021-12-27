import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import '../App.css';

function UnitItem(props){
    return(
        <Grid item xs={3} props={props} style={{fontSize: '3.5vw', lineHeight: '0.5', marginBottom: '2.5vh', color: 'dimgray'}}>
            {props.children}
        </Grid>
    )
}

function TimeUnit(props){
    return(
        <Grid item xs={3} sx={{lineHeight: '1em', paddingTop: '0.05em', color: 'purple'}}
        className={!props.noColon && "countdown_section"}>
            <span className={'countdown_amount'}>
                {props.children}
            </span>
        </Grid>
    )
}

function Countdown(props){

    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(true);

    useEffect(() => {
        let timerId;
        if(runTimer){
            let dateSeconds = new Date(props.date);
            let newDate = new Date(dateSeconds - Date.now()) / 1000
            setCountDown(newDate);
            timerId = setInterval(() => {
                setCountDown((countDown) => countDown - 1)
            }, 1000);
        }
        else{
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [runTimer, props.date])

    useEffect(() => {
        if (countDown < 0 && runTimer) {
            console.log("expired");
            setRunTimer(false);
            setCountDown(0);
        }
    }, [countDown, runTimer])

    // const togglerTimer = () => setRunTimer((t) => !t);

    const days = String(Math.floor(countDown / 86400));
    const hours = String(Math.floor(countDown / 3600) % 24);
    const minutes = String(Math.floor(countDown / 60 ) % 60);
    const seconds = String(Math.floor(countDown % 60));


    return(
        <Box sx={{width: '100%', fontSize:'10vw', fontFamily: "ScreamingNeon",
        backgroundColor: 'rgba(0, 0, 0, 0.04)'}} style={props.style}>
            <Grid container rowSpacing={0} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <TimeUnit>
                    {days}
                </TimeUnit>
                <TimeUnit>
                    {hours}
                </TimeUnit>
                <TimeUnit>
                    {minutes}
                </TimeUnit>
                <TimeUnit noColon>
                    {seconds}
                </TimeUnit>
                <UnitItem>
                    Days
                </UnitItem>
                <UnitItem>
                    Hours
                </UnitItem>
                <UnitItem>
                    Minutes
                </UnitItem>
                <UnitItem>
                    Seconds
                </UnitItem>
            </Grid>
            
        </Box>
    )

}

export default Countdown;