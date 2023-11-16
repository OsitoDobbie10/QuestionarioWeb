import { UseQuestionStore } from "../Store/Question"
const Usequestion = ()=>{
    let correct = 0;
    let incorrect = 0;
    let unanswer= 0;
    const questions = UseQuestionStore(state=>state.question);
    questions.forEach((ques)=>{
        const { correctAnswer,userSelectAnswer} = ques;
        if(userSelectAnswer == null) unanswer++;
        else if(userSelectAnswer == correctAnswer) correct++;
        else incorrect++; 
    })
    return {correct,incorrect,unanswer}
    }
export default Usequestion;