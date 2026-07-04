import { speak, canSpeak } from '../lib/audio';
export function useAudio(){ return { speak, supported: canSpeak() }; }
