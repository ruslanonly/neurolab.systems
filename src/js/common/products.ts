import armsPhoto from "../../assets/1arms.jpg"
import pakrovVideo from "../../assets/videos/pakrov.mp4"
import icbVideo from "../../assets/videos/icb.mp4"
import profTrenerVideo from "../../assets/videos/profTrener.mp4"
import dmsVideo from "../../assets/videos/dms.mp4"
import raspVideo from "../../assets/videos/rasp.mp4"

export type MainProduct = {
  id: string,
  title: string,
  subtitle: string,
  presentationType: "photo" | "video",
  photo?: string,
  video?: string,
  url: string,
  content: {
    dropdown?: {
      title: string,
      elements: {heading: string, text: string}[]
    }[]
    headerIconURL?: string,
    headerTitle?: string,
    headerSubtitle?: string
    textHTML?: string
  }
}

export const mainProducts: MainProduct[] = [
  {
    id: "souznik", 
    title: "СОЮЗНИК", 
    subtitle: "Система обеспечения безопасности периметра", 
    presentationType: "photo",
    photo: armsPhoto,
    url: "/primary.html",
    content: {}
  },
  {
    id: "pakrov", 
    title: "ПАКРОВ", 
    subtitle: "Программно-аппаратный комплекс раннего обнаружения возгорания", 
    presentationType: "video",
    video: pakrovVideo,
    url: "/secondary.html?product=pakrov",
    content: {
      dropdown: [
        {
          title: "Сроки разработки",
          elements: [
            {heading: "2 МЕСЯЦА", text: "Производство и сбор программно-аппаратного комплекса"},
            {heading: "1 МЕСЯЦ", text: "Производство и сбор программно-аппаратного комплекса"},
          ]
        },
        {
          title: "Технологии",
          elements: [
            {heading: "BACKEND", text: "PHP • Java • Go"},
            {heading: "FRONTEND", text: "Vue.js • TypeScript • JSX"},
            {heading: "DATA", text: "Hadoop • PostgreSQL • Kafka"},
          ]
        }
      ],
      headerIconURL: '',
      headerSubtitle: 'Система обнаруживает ранние признаки возгорания и оперативно реагирует предотвращая происшествия',
      headerTitle: 'Машинное зрение',
      textHTML: `
        <h2>Принцип работы</h2>
        <p>На экран диспетчера выводиться видеоизображения с места происшествия с точным указанием местоположения возгорания.</p>
        <p>На основе полученной информации обеспечивается мгновенная, а главное правильная реакция, что позволяет предотвратить возможные последствия происшествия</p>
        <h2>Контроль 24/7</h2>
        <p>ПАКРОВ позволяет 24/7 контролировать все известные факторы, приводящие к возгоранию на объектах</p>
      `
    }
  },
  {
    id: "isb", 
    title: "ИСБ", 
    subtitle: "Интеллектуальные системы безопасности", 
    presentationType: "video",
    video: icbVideo,
    url: "/secondary.html?product=isb",
    content: {}
  },
  {
    id: "proftrener", 
    title: "ПрофТренер", 
    subtitle: "Тренажер по общению с клиентами для сотрудников ", 
    presentationType: "video",
    video: profTrenerVideo,
    url: "/secondary.html?product=proftrener",
    content: {}
  },
  { 
    id: "dms", 
    title: "DMS", 
    subtitle: "Система автоматического предотвращения происшествий", 
    presentationType: "video",
    video: dmsVideo,
    url: "/secondary.html?product=dms",
    content: {
      dropdown: [
        {
          title: "Сроки разработки",
          elements: [
            {heading: "2 МЕСЯЦА", text: "Производство и сбор программно-аппаратного комплекса"},
            {heading: "1 МЕСЯЦ", text: "Производство и сбор программно-аппаратного комплекса"},
          ]
        },
        {
          title: "Технологии",
          elements: [
            {heading: "BACKEND", text: "PHP • Java • Go"},
            {heading: "FRONTEND", text: "Vue.js • TypeScript • JSX"},
            {heading: "DATA", text: "Hadoop • PostgreSQL • Kafka"},
          ]
        }
      ],
      headerIconURL: '',
      headerSubtitle: 'Система обнаруживает ранние признаки возгорания и оперативно реагирует предотвращая происшествия',
      headerTitle: 'Машинное зрение',
      textHTML: `
        <h2>Принцип работы</h2>
        <p>На экран диспетчера выводиться видеоизображения с места происшествия с точным указанием местоположения возгорания.</p>
        <p>На основе полученной информации обеспечивается мгновенная, а главное правильная реакция, что позволяет предотвратить возможные последствия происшествия</p>
        <h2>Контроль 24/7</h2>
        <p>ПАКРОВ позволяет 24/7 контролировать все известные факторы, приводящие к возгоранию на объектах</p>
      `
    }
  },
  { 
    id: "recognition", 
    title: "Распознование", 
    subtitle: "Сиcтема контроля доступа с биометирией", 
    presentationType: "video",
    video: raspVideo,
    url: "/secondary.html?product=recognition",
    content: {}
  }
]
