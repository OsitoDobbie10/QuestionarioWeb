import { UseQuestionStore } from "../Store/Question"
export const Footer = ()=>{
    let correct: number = 0;
    let incorrect: number = 0;
    let unanswer: number = 0;
    const questions = UseQuestionStore(state=>state.question);
    questions.forEach((ques)=>{
        const { correctAnswer,userSelectAnswer} = ques;
        if(userSelectAnswer == null) unanswer++;
        else if(userSelectAnswer == correctAnswer) correct++;
        else incorrect++; 
    })
    return (
        <footer style={{marginTop:'16px'}}>
            <strong>
                {`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswer} sin responder`}
            </strong>
        </footer>       
    )
}