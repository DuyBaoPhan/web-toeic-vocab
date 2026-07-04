import { createEmptyCard, fsrs, generatorParameters, Rating, State, type Card } from 'ts-fsrs'; import type { UserWord } from '../types';
const scheduler = fsrs(generatorParameters({ enable_fuzz: true }));
export type UiRating='again'|'review'|'easy';
export const uiToRating=(r:UiRating)=> r==='again'?Rating.Again:r==='review'?Rating.Good:Rating.Easy;
export function userWordToCard(userWord:UserWord):Card{ const c=createEmptyCard(new Date(userWord.created_at)); return {...c, due:new Date(userWord.due), stability:userWord.stability, difficulty:userWord.difficulty, elapsed_days:userWord.elapsed_days, scheduled_days:userWord.scheduled_days, reps:userWord.reps, lapses:userWord.lapses, state:userWord.state as State, last_review:userWord.last_review?new Date(userWord.last_review):undefined}; }
export function scheduleReview(userWord:UserWord, rating:Rating){ const before=userWordToCard(userWord); const cards=scheduler.repeat(before,new Date()); if (rating === Rating.Again) return cards[Rating.Again].card; if (rating === Rating.Hard) return cards[Rating.Hard].card; if (rating === Rating.Good) return cards[Rating.Good].card; return cards[Rating.Easy].card; }
