import type {
  Achievement,
  DashboardStats,
  LeaderboardEntry,
  ListeningExercise,
  Profile,
  Topic,
  UserWord,
  Word,
} from '../types';

export const topics: Topic[] = [
  { id: 1, slug: 'finance', name_vi: 'Tài chính', name_en: 'Finance', icon: '💰', color: '#10b981', sort_order: 1 },
  { id: 2, slug: 'hr', name_vi: 'Nhân sự', name_en: 'Human Resources', icon: '👥', color: '#6366f1', sort_order: 2 },
  { id: 3, slug: 'marketing', name_vi: 'Marketing', name_en: 'Marketing', icon: '📣', color: '#f59e0b', sort_order: 3 },
  { id: 4, slug: 'travel', name_vi: 'Du lịch & Giao thông', name_en: 'Travel', icon: '✈️', color: '#06b6d4', sort_order: 4 },
  { id: 5, slug: 'food', name_vi: 'Ăn uống & Nhà hàng', name_en: 'Food', icon: '🍽️', color: '#ef4444', sort_order: 5 },
  { id: 6, slug: 'health', name_vi: 'Y tế & Sức khỏe', name_en: 'Health', icon: '🏥', color: '#14b8a6', sort_order: 6 },
  { id: 7, slug: 'office', name_vi: 'Văn phòng & Thiết bị', name_en: 'Office', icon: '🏢', color: '#8b5cf6', sort_order: 7 },
  { id: 8, slug: 'retail', name_vi: 'Mua sắm & Bán lẻ', name_en: 'Retail', icon: '🛒', color: '#f97316', sort_order: 8 },
  { id: 9, slug: 'manufacturing', name_vi: 'Sản xuất & Kỹ thuật', name_en: 'Manufacturing', icon: '🔧', color: '#64748b', sort_order: 9 },
  { id: 10, slug: 'real-estate', name_vi: 'Bất động sản', name_en: 'Real Estate', icon: '🏘️', color: '#84cc16', sort_order: 10 },
  { id: 11, slug: 'technology', name_vi: 'Công nghệ & IT', name_en: 'Technology', icon: '📱', color: '#3b82f6', sort_order: 11 },
  { id: 12, slug: 'environment', name_vi: 'Môi trường & Năng lượng', name_en: 'Environment', icon: '🌿', color: '#22c55e', sort_order: 12 },
];

const now = new Date().toISOString();

export const words: Word[] = [
  { id: 1, word: 'budget', phonetic: '/ˈbʌdʒɪt/', word_type: 'noun', meaning_vi: 'ngân sách', meaning_en: 'planned spending', example_sentence: 'The marketing budget was approved before the quarterly meeting.', example_vi: 'Ngân sách marketing đã được duyệt trước cuộc họp quý.', synonyms: ['fund', 'allocation'], confusables: ['badge'], collocations: ['annual budget', 'budget constraints'], level: 'foundation', topic_id: 1, toeic_parts: [5, 6, 7], is_active: true, report_count: 0, created_at: now, updated_at: now },
  { id: 2, word: 'recruit', phonetic: '/rɪˈkruːt/', word_type: 'verb', meaning_vi: 'tuyển dụng', meaning_en: 'hire', example_sentence: 'The company plans to recruit ten sales representatives.', example_vi: 'Công ty dự định tuyển mười đại diện bán hàng.', synonyms: ['hire'], confusables: ['require'], collocations: ['recruit staff', 'recruit candidates'], level: 'foundation', topic_id: 2, toeic_parts: [2, 5, 6], is_active: true, report_count: 1, created_at: now, updated_at: now },
  { id: 3, word: 'campaign', phonetic: '/kæmˈpeɪn/', word_type: 'noun', meaning_vi: 'chiến dịch', meaning_en: 'promotion', example_sentence: 'The new advertising campaign increased online orders.', example_vi: 'Chiến dịch quảng cáo mới tăng đơn hàng trực tuyến.', synonyms: ['promotion'], confusables: ['company'], collocations: ['launch a campaign'], level: 'foundation', topic_id: 3, toeic_parts: [4, 5, 7], is_active: true, report_count: 2, created_at: now, updated_at: now },
  { id: 4, word: 'itinerary', phonetic: '/aɪˈtɪnəreri/', word_type: 'noun', meaning_vi: 'lịch trình', meaning_en: 'travel plan', example_sentence: 'Please review the itinerary before your business trip.', example_vi: 'Vui lòng xem lịch trình trước chuyến công tác.', synonyms: ['schedule'], confusables: ['stationery'], collocations: ['travel itinerary'], level: 'foundation', topic_id: 4, toeic_parts: [3, 4, 7], is_active: true, report_count: 0, created_at: now, updated_at: now },
  { id: 5, word: 'reservation', phonetic: '/ˌrezərˈveɪʃən/', word_type: 'noun', meaning_vi: 'đặt chỗ', meaning_en: 'booking', example_sentence: 'I would like to confirm a dinner reservation for six.', example_vi: 'Tôi muốn xác nhận đặt bàn tối cho sáu người.', synonyms: ['booking'], confusables: ['preservation'], collocations: ['make a reservation'], level: 'foundation', topic_id: 5, toeic_parts: [2, 3], is_active: true, report_count: 1, created_at: now, updated_at: now },
  { id: 6, word: 'prescription', phonetic: '/prɪˈskrɪpʃən/', word_type: 'noun', meaning_vi: 'đơn thuốc', meaning_en: 'medication order', example_sentence: 'The pharmacist checked the prescription carefully.', example_vi: 'Dược sĩ kiểm tra đơn thuốc cẩn thận.', synonyms: ['medication order'], confusables: ['description'], collocations: ['fill a prescription'], level: 'intermediate', topic_id: 6, toeic_parts: [3, 4, 7], is_active: true, report_count: 2, created_at: now, updated_at: now },
  { id: 7, word: 'equipment', phonetic: '/ɪˈkwɪpmənt/', word_type: 'noun', meaning_vi: 'thiết bị', meaning_en: 'device', example_sentence: 'All office equipment must be inspected annually.', example_vi: 'Tất cả thiết bị văn phòng phải được kiểm tra hằng năm.', synonyms: ['device'], confusables: ['shipment'], collocations: ['office equipment'], level: 'intermediate', topic_id: 7, toeic_parts: [1, 5, 6], is_active: true, report_count: 0, created_at: now, updated_at: now },
  { id: 8, word: 'receipt', phonetic: '/rɪˈsiːt/', word_type: 'noun', meaning_vi: 'hóa đơn', meaning_en: 'proof of purchase', example_sentence: 'Keep your receipt for warranty service.', example_vi: 'Giữ hóa đơn để được bảo hành.', synonyms: ['proof of purchase'], confusables: ['recipe'], collocations: ['sales receipt'], level: 'intermediate', topic_id: 8, toeic_parts: [2, 3, 7], is_active: true, report_count: 1, created_at: now, updated_at: now },
  { id: 9, word: 'assembly', phonetic: '/əˈsembli/', word_type: 'noun', meaning_vi: 'lắp ráp', meaning_en: 'production', example_sentence: 'The assembly line will stop for maintenance.', example_vi: 'Dây chuyền lắp ráp sẽ dừng để bảo trì.', synonyms: ['production'], confusables: ['assistance'], collocations: ['assembly line'], level: 'intermediate', topic_id: 9, toeic_parts: [1, 3, 4], is_active: true, report_count: 2, created_at: now, updated_at: now },
  { id: 10, word: 'lease', phonetic: '/liːs/', word_type: 'noun', meaning_vi: 'hợp đồng thuê', meaning_en: 'rental contract', example_sentence: 'The lease agreement expires at the end of June.', example_vi: 'Hợp đồng thuê hết hạn cuối tháng Sáu.', synonyms: ['rental contract'], confusables: ['least'], collocations: ['sign a lease'], level: 'advanced', topic_id: 10, toeic_parts: [3, 4, 7], is_active: true, report_count: 0, created_at: now, updated_at: now },
  { id: 11, word: 'software', phonetic: '/ˈsɔːftwer/', word_type: 'noun', meaning_vi: 'phần mềm', meaning_en: 'application', example_sentence: 'The software update will improve system security.', example_vi: 'Bản cập nhật phần mềm sẽ cải thiện bảo mật hệ thống.', synonyms: ['application'], confusables: ['hardware'], collocations: ['install software'], level: 'advanced', topic_id: 11, toeic_parts: [3, 4, 5], is_active: true, report_count: 1, created_at: now, updated_at: now },
  { id: 12, word: 'sustainable', phonetic: '/səˈsteɪnəbl/', word_type: 'adjective', meaning_vi: 'bền vững', meaning_en: 'eco-friendly', example_sentence: 'The factory adopted sustainable energy practices.', example_vi: 'Nhà máy áp dụng thực hành năng lượng bền vững.', synonyms: ['eco-friendly'], confusables: ['sustained'], collocations: ['sustainable growth'], level: 'expert', topic_id: 12, toeic_parts: [4, 7], is_active: true, report_count: 2, created_at: now, updated_at: now },
];

export const profile: Profile = { id: 'demo-user', username: 'duybao', display_name: 'Duy Bảo', target_score: 900, current_level: 'intermediate', xp: 2840, streak_days: 7, role: 'admin', daily_goal: 20, onboarding_completed: true, created_at: now };
export const dashboardStats: DashboardStats = { due_count: 18, new_count: 214, known_count: 326, learning_count: 74, weekly_xp: 640, total_studied: 400 };
export const userWords: UserWord[] = words.map((word, i) => ({ id: `uw-${word.id}`, user_id: 'demo-user', word_id: word.id, status: i % 3 === 0 ? 'known' : i % 3 === 1 ? 'learning' : 'new', stability: 0, difficulty: 0, elapsed_days: 0, scheduled_days: 0, reps: i, lapses: 0, state: i > 1 ? 2 : 0, due: new Date(Date.now() - i * 3600000).toISOString(), created_at: now, word }));
export const achievements: Achievement[] = [
  { id: 1, slug: 'first-word', name_vi: 'Khởi đầu', description: 'Học từ đầu tiên', icon: '🌱', xp_reward: 10, condition_type: 'words_learned', condition_value: 1, earned: true },
  { id: 2, slug: 'streak-7', name_vi: 'Streak 7 ngày', description: 'Học 7 ngày liên tiếp', icon: '🔥', xp_reward: 150, condition_type: 'streak', condition_value: 7, earned: true },
  { id: 3, slug: 'words-100', name_vi: 'Học 100 từ', description: 'Ghi nhớ 100 từ', icon: '📚', xp_reward: 200, condition_type: 'words_learned', condition_value: 100, earned: true },
  { id: 4, slug: 'quiz-perfect', name_vi: 'Quiz hoàn hảo', description: 'Đúng 10/10', icon: '🎯', xp_reward: 100, condition_type: 'quiz_score', condition_value: 10, earned: false },
  { id: 5, slug: 'combo-5', name_vi: 'Combo x5', description: 'Đúng 5 câu liên tiếp', icon: '⚡', xp_reward: 80, condition_type: 'combo', condition_value: 5, earned: false },
];
export const leaderboard: LeaderboardEntry[] = Array.from({ length: 20 }, (_, i) => ({ user_id: `u-${i}`, username: `learner${i + 1}`, display_name: i === 6 ? 'Duy Bảo' : `Học viên ${i + 1}`, xp: 5200 - i * 210, rank: i + 1, flashcard_xp: 2500 - i * 90, quiz_xp: 1700 - i * 80, streak_bonus: 1000 - i * 40, is_self: i === 6 }));
export const listeningExercise: ListeningExercise = { id: 'listen-1', title: 'Business travel update', part: 3, topic: topics[3], transcript: 'The manager confirmed the _____ after reviewing the travel _____.', blanks: ['reservation', 'itinerary'], suggestions: ['reservation', 'itinerary', 'budget', 'receipt', 'campaign'] };
