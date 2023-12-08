export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LST = [
  {
    src: '/svg/back.svg',
  },
  {
    src: '/img/avatar.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      if (value == '/svg/back.svg') {
        button.onclick = () => {
          window.location.href = '/'
        }
      }
      img[key] = value
    })

    button.append(img)

    header.append(button)
  })

  return header
}

const POST_LIST = [
  {
    category: [
      {
        text: 'Важливо',
        id: 1,
      },
      {
        text: 'Нова',
        id: 2,
      },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },
  {
    category: [
      {
        text: 'Нова',
        id: 2,
      },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15.01',
    viewed: true,
  },
]

export const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed ? 'post post--viewed' : 'post',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'category__list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )
    postHeader.append(categoryList, dateSpan)

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}

// Page community ----------------------------------------------------------

const breadcrumbs = [
  { name: 'База знань', active: false },
  { name: 'Інформація', active: true },
]

// Функция для создания хлебных крошек
export const createBreadcrumbs = () => {
  const container = document.createElement('div')
  container.className = 'breadcrumbs'

  breadcrumbs.forEach(function (crumb, index) {
    const link = document.createElement('a')

    if (!crumb.active) {
      link.classList = 'link '
    } else {
      link.classList = 'link link--active'
    }

    link.textContent = crumb.name
    container.appendChild(link)
  })

  return container
}

const INFORMATION = {
  src: '/img/image1.png',
  title: 'Що таке база знань?',
  info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',

  textButton: "Перейти до ком'юніті у Телеграм",
}

export const createInformation = () => {
  const content = createElement('div', 'breadcrumb__info')
  const title = createElement(
    'h2',
    'information__title',
    INFORMATION.title,
  )
  const info = createElement(
    'p',
    'information__info',
    INFORMATION.info,
  )
  const button = createElement(
    'button',
    'information__button',
    INFORMATION.textButton,
  )
  const img = createElement('img')

  img.src = INFORMATION.src

  content.append(img)
  content.append(title)
  content.append(info)
  content.append(button)

  return content
}
