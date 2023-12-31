import './App.css';
import {Container,Stack}  from '@mui/material'
import { LogoJS } from './Components/LogoJS';
import Start from './Components/Start';
import Game from './Components/Game';
import { UseQuestionStore } from './Store/Question';
function App() {
  const questions = UseQuestionStore(state=>state.question);
  const widthwindow = window.innerWidth<=768?true:false;
  return (
    <Container maxWidth="sm">
    <Stack direction='row' gap='20px' alignItems='center' justifyContent='center' marginBottom='10px'>
    <LogoJS/> 
    {
      widthwindow === true ? 
      <h1>Prueba Javascript Mobile</h1>
      :
      <h2>Prueba Javascript</h2>
    }
    </Stack>
    {questions.length == 0 && <Start/>}
    {questions.length == 0 && <h2 style={{marginTop:'10px', 
                                          textAlign:'center',
                                          fontWeight:'bold'}}>Hecho por Carlos Archaga</h2>}
    {questions.length > 0 && <Game/>}
    </Container>
  )
}

export default App;
