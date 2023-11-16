import Usequestion from "../Hooks/Usequestion";
export const Footer = ()=>{ 
    const {correct,incorrect,unanswer} = Usequestion();
    return (
        <footer style={{marginTop:'16px'}}>
            <strong>
                {`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswer} sin responder`}
            </strong>
        </footer>       
    )
}