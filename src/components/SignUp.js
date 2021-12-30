import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const validateEmail = (email) => {
  let s = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  return(s === null ? false : true)
};


function SignUp() {


  const [buttonTxt, setButtonTxt] = useState("Join Discord");
  const [userHasSubmitted, setUserHasSubmitted] = useState(false);
  const [submitMsg, setSubmitMsg] = useState(<span></span>);
  const [timer, setTimer] = useState(3);


  const handleSubmit = () => {
    setButtonTxt('Thanks!')
    setUserHasSubmitted(true);
    setSubmitMsg(
      <div style={{fontFamily: 'MinecraftFive', marginTop: '3vh', fontSize: 18}}>
        <span style={{color: 'purple'}}>Thanks!</span> Opening your <span style={{color: 'purple'}}>Discord</span> invite...
        <div style={{fontSize: 14}}>or click <a href="https://discord.com/invite/Fz3TryZFhq">here</a></div>
      </div>
    )
    setTimeout(() => {window.open( 'https://discord.gg/Fz3TryZFhq' )}, 3000);
  }

  return (
    <div style={{marginTop: '5vh', textAlign: 'center'}}>
        <Typography>
            Want to take part in our first video? Click here to join our <span style={{color: 'purple'}}>Discord</span>.
            <div>
              <img style={{width: '12.5%', marginTop: '3vh'}}src={"https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png"}/>
            </div>
        </Typography>

        <div>
          {submitMsg}
          <Button
          size={'large'}
          sx={{
            ':hover': {
              bgcolor: 'darkorange'
            }
          }}
          disabled={userHasSubmitted}
          onClick={handleSubmit}
          variant="contained" style={{marginTop: '2vh', width: '30%'}}>
            {buttonTxt}
          </Button>
        </div>

    </div>
  );
}

export default SignUp;
