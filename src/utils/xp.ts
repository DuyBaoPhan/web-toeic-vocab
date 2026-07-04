export function levelFromXp(xp:number){ if(xp>=5000) return 'expert'; if(xp>=2000) return 'advanced'; if(xp>=500) return 'intermediate'; return 'foundation'; }
export function flashcardXp(rating:number,reps:number){ return rating===4 ? (reps===0?10:5) : 0; }
export function quizXp(correct:boolean,combo:number){ if(!correct) return 0; return Math.round(8*(combo>=5?2:combo>=3?1.5:1)); }
