export type MainProduct = {
  title: string,
  subtitle: string,
  presentationType: "photo" | "video" | "both",
  photo?: string,
  video?: string
}

export const mainProducts: MainProduct[] = [
  {
    title: "СОЮЗНИК", 
    subtitle: "Система обеспечения безопасности периметра", 
    presentationType: "photo"
  },
  {
    title: "ПАКРОВ", 
    subtitle: "Программно-аппаратный комплекс раннего обнаружения возгорания", 
    presentationType: "video"
  },
  {
    title: "ИСБ", 
    subtitle: "Интеллектуальные системы безопасности", 
    presentationType: "video"
  },
  {
    title: "ПрофТренер", 
    subtitle: "Тренажер по общению с клиентами для сотрудников ", 
    presentationType: "video"
  },
  { title: "DMS", 
    subtitle: "Система автоматического предотвращения происшествий", 
    presentationType: "video"
  },
  { title: "Распознование", 
    subtitle: "Сиcтема контроля доступа с биометирией", 
    presentationType: "video"
  }
]
