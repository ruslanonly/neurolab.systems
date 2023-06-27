import armsPhoto from "../../assets/1arms.jpg"
import pakrovVideo from "../../assets/videos/pakrov.mp4"
import icbVideo from "../../assets/videos/icb.mp4"
import profTrenerVideo from "../../assets/videos/profTrener.mp4"
import dmsVideo from "../../assets/videos/dms.mp4"
import raspVideo from "../../assets/videos/rasp.mp4"

export type MainProduct = {
  title: string,
  subtitle: string,
  presentationType: "photo" | "video",
  photo?: string,
  video?: string
}

export const mainProducts: MainProduct[] = [
  {
    title: "СОЮЗНИК", 
    subtitle: "Система обеспечения безопасности периметра", 
    presentationType: "photo",
    photo: armsPhoto
  },
  {
    title: "ПАКРОВ", 
    subtitle: "Программно-аппаратный комплекс раннего обнаружения возгорания", 
    presentationType: "video",
    video: pakrovVideo
  },
  {
    title: "ИСБ", 
    subtitle: "Интеллектуальные системы безопасности", 
    presentationType: "video",
    video: icbVideo
  },
  {
    title: "ПрофТренер", 
    subtitle: "Тренажер по общению с клиентами для сотрудников ", 
    presentationType: "video",
    video: profTrenerVideo
  },
  { title: "DMS", 
    subtitle: "Система автоматического предотвращения происшествий", 
    presentationType: "video",
    video: dmsVideo
  },
  { title: "Распознование", 
    subtitle: "Сиcтема контроля доступа с биометирией", 
    presentationType: "video",
    video: raspVideo
  }
]
