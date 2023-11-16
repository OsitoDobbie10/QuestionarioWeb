import { Button } from "@mui/material";
import Usequestion from "../Hooks/Usequestion";
import { UseQuestionStore } from "../Store/Question";
export const Footer = ()=>{ 
    const {correct,incorrect,unanswer} = Usequestion();
    const reset = UseQuestionStore((state)=>state.reset);

    return (
        <footer style={{marginTop:'16px',display:'flex',flexDirection:'column'}}>
            <strong>
                {`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswer} sin responder`}
            </strong>
            <Button onClick={()=>reset()}>
                Reiniciar test
            </Button>
        </footer>       
    )
}