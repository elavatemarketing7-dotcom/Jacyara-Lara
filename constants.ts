
import { QuizQuestion, LandingData } from './types';

export const DATA: LandingData = {
  name: 'Jacyara Lara',
  profession: 'Harmonização Facial',
  location: 'Divinópolis - Coren MG',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5537998613910&text=Oii%25&type=phone_number&app_absent=0&utm_source=ig',
  instagram: 'https://www.instagram.com/dra.jacyaralara/',
  mainPhoto: 'https://i.imgur.com/mcfl7D5.png',
  otherPhotos: [
    'https://i.imgur.com/Qdx1UYi.png',
    'https://i.imgur.com/Aq6quC2.png'
  ],
  gallery: [
    'https://i.imgur.com/3S4x2oS.png', 'https://i.imgur.com/G4xGd1v.png',
    'https://i.imgur.com/6d9yKak.png', 'https://i.imgur.com/4n2ulwa.png',
    'https://i.imgur.com/GtexN0Q.png', 'https://i.imgur.com/dPGAg7o.png',
    'https://i.imgur.com/ER9dtab.png', 'https://i.imgur.com/9T8Yron.png',
    'https://i.imgur.com/vzKZFV0.png', 'https://i.imgur.com/gq2cHlK.png',
    'https://i.imgur.com/8QR1DYD.png', 'https://i.imgur.com/YO41XZY.png',
    'https://i.imgur.com/6LAmrCL.png', 'https://i.imgur.com/rvpF5V6.png',
    'https://i.imgur.com/pAhQRk9.png', 'https://i.imgur.com/te1Pyrk.png',
    'https://i.imgur.com/oENRAwT.png', 'https://i.imgur.com/N5FGOHN.png',
    'https://i.imgur.com/a0ypCz6.png', 'https://i.imgur.com/gq2cHlK.png',
    'https://i.imgur.com/FxQo5T3.png', 'https://i.imgur.com/ojZeG4r.png',
    'https://i.imgur.com/bHpnpml.png', 'https://i.imgur.com/ZrLIjRb.png',
    'https://i.imgur.com/eZ3X4d1.png', 'https://i.imgur.com/6LuAxyj.png',
    'https://i.imgur.com/9UFkpLE.png', 'https://i.imgur.com/A3Ey7m2.png',
    'https://i.imgur.com/xmgUDW8.png', 'https://i.imgur.com/DlwClMe.png',
    'https://i.imgur.com/5UQ1e2i.png', 'https://i.imgur.com/thixRkV.png',
    'https://i.imgur.com/M5PSaWK.png', 'https://i.imgur.com/2awSCSy.png'
  ],
  lifestyleGallery: [
    'https://i.imgur.com/BL3wVow.png', 'https://i.imgur.com/Nz2WYrM.png',
    'https://i.imgur.com/vSqpEIy.png', 'https://i.imgur.com/LjAfNDD.png',
    'https://i.imgur.com/socL50k.png', 'https://i.imgur.com/MW7vcK3.png',
    'https://i.imgur.com/acnQHDk.png', 'https://i.imgur.com/9ouqkQJ.png'
  ]
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual área do seu rosto você mais gostaria de realçar ou melhorar?",
    options: ["Lábios (Contorno e Volume)", "Rosto (Mandíbula e Queixo)", "Olheiras e Cansaço", "Linhas de Expressão (Ruguinhas)"]
  },
  {
    id: 2,
    question: "Qual o seu maior medo ao realizar um procedimento estético?",
    options: ["Ficar com aspecto artificial", "Sentir dor durante o processo", "Não gostar do resultado final", "Nenhum, confio na profissional"]
  },
  {
    id: 3,
    question: "Já realizou algum procedimento de Harmonização antes?",
    options: ["Sim, e adoro os resultados", "Sim, mas não tive boa experiência", "Nunca fiz nada ainda"]
  },
  {
    id: 4,
    question: "Como você define o resultado ideal para você?",
    options: ["Sutil: ninguém percebe que fiz algo", "Equilibrado: realce visível mas natural", "Transformador: quero mudar pontos específicos"]
  }
];
