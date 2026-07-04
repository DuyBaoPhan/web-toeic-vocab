import { achievements, dashboardStats, leaderboard, profile, topics, userWords, words } from '../data/mock';
import type { Word } from '../types';
import { supabase } from './supabase';

export const api = {
  async getProfile() {
    return profile;
  },

  async getDashboard() {
    return { profile, stats: dashboardStats, topics, userWords };
  },

  async getDueCards() {
    return userWords.filter((userWord) => new Date(userWord.due) <= new Date()).slice(0, 20);
  },

  async getWords() {
    if (!supabase) return words;

    const { data, error } = await supabase.from('words').select('*').order('id');
    if (error) throw error;

    return data as Word[];
  },

  async upsertWord(word: Partial<Word>) {
    if (!supabase) return word;

    const { data, error } = await supabase.from('words').upsert(word).select().single();
    if (error) throw error;

    return data as Word;
  },

  async deleteWord(id: number) {
    if (!supabase) return;

    const { error } = await supabase.from('words').update({ is_active: false }).eq('id', id);
    if (error) throw error;
  },

  async getAchievements() {
    return achievements;
  },

  async getLeaderboard() {
    return leaderboard;
  },
};
