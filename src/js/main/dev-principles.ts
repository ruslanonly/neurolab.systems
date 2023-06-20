export type DevPrincip = {
  title: string,
  desc: string
}

export const devPrinciples: DevPrincip[] = [
  {title: "Фундаментальный подход", desc: "Изучаем базу, формируем логику продукта и только после приступаем к разработке."},
  {title: "Автоматизация процессов", desc: "Мы сокращаем роль человеческого фактора в бизнес-процессах клиентов."},
  {title: "Удобство в использовании", desc: "Наша продукты разрабатываются в первую очередь для их пользователей."},
  {title: "Формирование среды", desc: "Создание уникальной корпоративной среды для любого бизнеса."},
]

export function getDevPrinciplesSlidesHTML(slides: DevPrincip[]) {
  let html = ``;
  for(let i = 0; i < slides.length; i++) {
    let p = slides[i]
    html += `
    <div class="dev-principles__slide">
      <div class="dev-principles__slide-wrapper">
        <div class="dev-principles__slide-info">
          <h1 class="dev-principles__slide-title">
            ${p.title}
          </h1>
          <p class="dev-principles__slide-desc">
          ${p.desc}
          </p>
        </div>
        <div>
          <span class="dev-principles__slide-number">0${i + 1}</span>
        </div>
      </div>
    </div>
    `
  }

  return html
}