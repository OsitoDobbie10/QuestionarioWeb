import {type Question } from "../types";
import { create } from "zustand";
import confetti from "canvas-confetti";
import { persist } from "zustand/middleware";
interface Stade{
    question: Question[],
    currentQuestion: number,
    fetchQuestion: (limit:number)=>Promise<void>,
    selectanswer:(questionId:number,answerIndex:number)=>void,
    goNextquestion: ()=>void,
    goPreviwequestion: ()=>void,
    reset: ()=>void
}

export const UseQuestionStore = create<Stade>()(persist((set,get)=>{
    return {
        question: [],
        currentQuestion: 0,
        fetchQuestion: async(limit:number)=>{
         const arreglo = await fetch('http://localhost:5173/Preguntas.json');
         const datos = await arreglo.json();
         const question = datos.sort(()=>Math.random()-0.5).slice(0,limit);
         set({question})
        },
        selectanswer: (questionId:number,answerIndex:number)=>{
            const {question} = get();
            const newQuestion = structuredClone(question);
            //encontrtamos el indice de la pregunta
            const questionIndex = newQuestion.findIndex(q=>q.id === questionId);
            //encontramos la informacion de la pregunta
            const questionInfo = newQuestion[questionIndex];
            //preguntamos si la respuesta es la correcta
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
            if (isCorrectUserAnswer) confetti();
            //cambiar esta informacion en la copa de la pregunta
            newQuestion[questionIndex] = {
                ...questionInfo,
                isCorrectUserAnswer,
                userSelectAnswer: answerIndex},
            //actualizar estado
            set({question: newQuestion})

        },
        goNextquestion:()=>{
            const {currentQuestion,question} = get();
            const nextQuestion = currentQuestion + 1;
            if(nextQuestion < question.length){
                set({currentQuestion: nextQuestion})}},
        goPreviewquestion: ()=>{
            const {currentQuestion} = get();
            const previusQuestion = currentQuestion - 1;
            if(previusQuestion >=0){
                set({currentQuestion:previusQuestion})
            }
        },
        reset:()=>{
            set({currentQuestion:0,question:[]});
        }
    }
},
{
    name:'questions'
}))
