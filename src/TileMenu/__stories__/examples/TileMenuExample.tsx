import React from 'react'

import { Example } from '@/__private__/storybook'

import { TileMenu, DefaultItem } from '@/TileMenu'

const items: DefaultItem[] = [
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
  {
    title: 'Портал',
    description: 'Сводная информация обо мне и подразделении, новости компании',
    image: 'https://avatars.githubusercontent.com/u/13190808?v=4',
  },
]

export const TileMenuExample = () => (
  <Example>
    <TileMenu items={items} title={'Заголовок'} />
  </Example>
)
export const TileMenuExampleMobile = () => (
  <Example>
    <TileMenu items={items} title={'Заголовок'} isMobile={true} />
  </Example>
)