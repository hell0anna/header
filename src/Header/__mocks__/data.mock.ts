import { NotificationsDefaultItem, NotificationsDefaultAction } from '@/NotificationsList'
import { IconTrash } from '@consta/uikit/IconTrash'
import { IconEye } from '@consta/uikit/IconEye'
import { IconDinosaur } from '@consta/uikit/IconDinosaur'
import { IconComponent } from '@consta/uikit/Icon'
import { IconHome } from '@consta/uikit/IconHome'
import {
  HeaderDefaultSocialMediaItem,
  HeaderDefaultLanguagesItem,
  HeaderDefaultAdditionalButtonsItem,
} from '@/Header'

import { action } from '@storybook/addon-actions'

const emptyFunction = () => action('emptyFunction')

export const notifications: NotificationsDefaultItem[] = [
  {
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(2021, 10, 12, 13, 57, 0),
    read: false,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
    group: 'd',
  },
  {
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
  },
  {
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
  },

  {
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
  },

  {
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
  },

  {
    label: 'Андриевский Дмитрий Олегович',
    description: 'Добавил файлы в проект, план/факт по расчету предварительные',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
    date: new Date(),
    read: true,
    badges: [
      {
        label: 'отчеты',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
      {
        label: 'отчеты 4',
        status: 'normal',
      },
      {
        label: 'файлы',
        status: 'warning',
      },
      {
        label: 'система',
        status: 'success',
      },
    ],
    onClick: emptyFunction,
    actions: [
      {
        label: 'Удалить',
        onClick: emptyFunction,
        icon: IconTrash,
      },
      {
        label: 'Отметить как прочитанное',
        onClick: emptyFunction,
        icon: IconEye,
      },
    ],
    view: 'user',
  },
]

export const notificationsActions: NotificationsDefaultAction[] = [
  {
    label: 'Отметить все как прочитанное',
    onClick: emptyFunction,
    icon: IconEye,
  },
  {
    label: 'Удалить все',
    onClick: emptyFunction,
    icon: IconTrash,
  },
]

type MenuItem = {
  label: string
  subMenu?: MenuItem[]
  href?: string
  onClick?: React.EventHandler<React.MouseEvent>
}

export const menu: MenuItem[] = [
  {
    label: 'Пункт меню 1',
    href: '#',
    onClick: e => {
      e.preventDefault()
      e.stopPropagation()
    },
    subMenu: [{ label: 'Пункт меню 1-1' }, { label: 'Пункт меню 1-2' }],
  },
  { label: 'Пункт меню 2', subMenu: [{ label: 'Пункт меню 2-1' }] },
  {
    label: 'Пункт меню 3',
    subMenu: [
      { label: 'Пункт меню 3-1', subMenu: [{ label: 'Пункт меню 3-1-1' }] },
      { label: 'Пункт меню 3-2', subMenu: [{ label: 'Пункт меню 3-2-1' }] },
      {
        label: 'Пункт меню 3-3',
        subMenu: [
          { label: 'Пункт меню 3-1', subMenu: [{ label: 'Пункт меню 3-1-1' }] },
          { label: 'Пункт меню 3-2', subMenu: [{ label: 'Пункт меню 3-2-1' }] },
          {
            label: 'Пункт меню 3-3',
            subMenu: [
              { label: 'Пункт меню 3-3-1', subMenu: [{ label: 'Пункт меню 3-3-1-1' }] },
              { label: 'Пункт меню 3-3-2', subMenu: [{ label: 'Пункт меню 3-3-2-1' }] },
              { label: 'Пункт меню 3-3-3', subMenu: [{ label: 'Пункт меню 3-3-3-1' }] },
            ],
          },
        ],
      },
    ],
  },
]

type TileMenuItem = {
  label: string
  description: string
  image: string
}

export const tileMenu: TileMenuItem[] = [
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    label: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
]

type Page = {
  icon?: IconComponent
  href: string
  label: string
}

export const breadcrumbs: Page[] = [
  {
    icon: IconHome,
    label: 'Главная',
    href: 'https://url.com/page-1',
  },
  {
    label: 'Раздел',
    href: 'https://url.com/page-2',
  },
  {
    label: 'Подраздел',
    href: 'https://url.com/page-3',
  },
  {
    label: 'Элемент подраздела',
    href: 'https://url.com/page-4',
  },
  {
    label: 'Дополнительные свойства элемента подраздела',
    href: 'https://url.com/page-5',
  },
  {
    label: 'Детальное описание свойства элемента подраздела',
    href: 'https://url.com/page-6',
  },
]

export const socialMedia: HeaderDefaultSocialMediaItem[] = [
  {
    label: 'facebook',
    target: '_blank',
    href: '#',
    icon: IconDinosaur,
  },
  {
    label: 'vk',
    target: '_blank',
    href: '#',
    icon: IconDinosaur,
  },
  {
    label: 'instagram',
    target: '_blank',
    href: '#',
    icon: IconDinosaur,
  },
  {
    label: 'youtube',
    target: '_blank',
    href: '#',
    icon: IconDinosaur,
  },
]

export const languages: HeaderDefaultLanguagesItem[] = [
  {
    label: 'RU',
  },
  {
    label: 'EN',
  },
]

export const additionalButtons: HeaderDefaultAdditionalButtonsItem[] = [
  {
    label: 'Закупки',
  },
  {
    label: 'Контакты',
  },
]
