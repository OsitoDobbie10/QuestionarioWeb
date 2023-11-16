import {Button} from "@mui/material"
import { UseQuestionStore } from "../Store/Question";
const Start = () => {
    const fetchQuestions = UseQuestionStore(state=>state.fetchQuestion);
    let LIMIT_QUESTION = 10;
    const handleclick = ()=>{
        fetchQuestions(LIMIT_QUESTION);
    }
  return (
    <Button onClick={handleclick} variant='contained'>
        Empezar
    </Button>
  )
}

export default Start
