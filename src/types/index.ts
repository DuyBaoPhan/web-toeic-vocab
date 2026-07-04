export type Level = 'foundation' | 'intermediate' | 'advanced' | 'expert';
export type WordStatus = 'new' | 'learning' | 'known';
export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase';
export type SessionType = 'flashcard' | 'quiz' | 'listening';
export interface Profile { id:string; username:string; display_name:string; avatar_url?:string; target_score:number; current_level:Level; xp:number; streak_days:number; last_study_date?:string; role:'user'|'admin'; daily_goal:number; reminder_time?:string; onboarding_completed:boolean; created_at:string; }
export interface Topic { id:number; slug:string; name_vi:string; name_en:string; icon:string; color:string; sort_order:number; }
export interface Word { id:number; word:string; phonetic:string; word_type:WordType; meaning_vi:string; meaning_en?:string; example_sentence:string; example_vi:string; synonyms:string[]; confusables:string[]; collocations:string[]; level:Level; topic_id:number; toeic_parts:number[]; audio_url?:string; is_active:boolean; report_count:number; created_at:string; updated_at:string; }
export interface UserWord { id:string; user_id:string; word_id:number; status:WordStatus; stability:number; difficulty:number; elapsed_days:number; scheduled_days:number; reps:number; lapses:number; state:number; due:string; last_review?:string; created_at:string; word?:Word; }
export interface ReviewLog { id:string; user_id:string; word_id:number; rating:1|2|3|4; state_before:number; state_after:number; due_before:string; due_after:string; elapsed_days:number; session_type:SessionType; reviewed_at:string; }
export interface Achievement { id:number; slug:string; name_vi:string; description:string; icon:string; xp_reward:number; condition_type:string; condition_value:number; earned?:boolean; }
export interface LeaderboardEntry { user_id:string; username:string; display_name:string; avatar_url?:string; xp:number; rank:number; flashcard_xp:number; quiz_xp:number; streak_bonus:number; is_self?:boolean; }
export interface QuizQuestion { id:string; mode:'meaning-to-word'|'word-to-meaning'|'fill-blank'; prompt:string; answer:string; options:string[]; explanation:string; word:Word; }
export interface ListeningExercise { id:string; title:string; part:3|4; topic:Topic; audio_url?:string; transcript:string; blanks:string[]; suggestions:string[]; }
export interface DashboardStats { due_count:number; new_count:number; known_count:number; learning_count:number; weekly_xp:number; total_studied:number; }
