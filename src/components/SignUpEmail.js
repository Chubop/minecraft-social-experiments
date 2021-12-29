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


  const [email, setEmail] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email Address")
  const [userHasSubmitted, setUserHasSubmitted] = useState(false);
  const [submitMsg, setSubmitMsg] = useState(<span></span>);

  const handleTyping = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = () => {
    let isEmail = validateEmail(email)
    if(isEmail === true){
      setUserHasSubmitted(true);
      setEmail("");
      setEmailPlaceholder('Thanks!')
      setSubmitMsg(
      <div style={{fontFamily: 'MinecraftFive', marginTop: '2vh', fontSize: 18}}>
        <span style={{color: 'purple'}}>Thanks!</span> Opening your <span style={{color: 'purple'}}>Discord</span> invite now...
      </div>
      )
      setTimeout(() => {window.open( 'https://discord.gg/Fz3TryZFhq' )}, 3000);
    }
  }

  return (
    <div style={{marginTop: '5vh', textAlign: 'center'}}>
        <Typography>
            Want to take part in our first video? Sign up here to join the queue and Discord.
        </Typography>
        <TextField
        value={email}
        disabled={userHasSubmitted}
        onChange={handleTyping}
        onKeyDown={handleTyping}
        onKeyPress={handleTyping}
        placeholder={emailPlaceholder}
        style={{marginTop: '5vh', lineHeight: 0.5, width: '50%'}}/>
          {submitMsg}
        <div>
          <Button
          disabled={userHasSubmitted}
          onClick={handleSubmit}
          variant="contained" style={{marginTop: '2vh', width: '30%'}}>
            Submit
          </Button>
        </div>

    </div>
  );
}

export default SignUp;
