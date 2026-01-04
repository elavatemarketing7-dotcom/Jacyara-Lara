
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export type ViewState = 'intro' | 'quiz' | 'analyzing' | 'result' | 'site';

export interface LandingData {
  name: string;
  profession: string;
  location: string;
  whatsapp: string;
  instagram: string;
  mainPhoto: string;
  otherPhotos: string[];
  gallery: string[];
  lifestyleGallery: string[];
}
