import React from 'react'

import { Header } from '@/Header'

import { createMetadata } from '../../__private__/storybook'
import { ConstaLogo } from './ConstaLogo'
import { select, boolean } from '@storybook/addon-knobs'
import { getByMap } from '@consta/uikit/__internal__/src/utils/getByMap'
import {
  menu,
  notifications,
  notificationsActions,
  tileMenu,
  breadcrumbs,
  socialMedia,
  languages,
  additionalButtons,
} from '../__mocks__/data.mock'

import mdx from './Header.docs.mdx'

const logoMap = {
  undefined,
  Text: 'Consta',
  Svg: <ConstaLogo />,
}

const defaultKnobs = () => ({
  logo: select('logo', ['undefined', 'Text', 'Svg'], 'Svg'),
  withMenu: boolean('widthMenu', true),
  withTileMenu: boolean('widthTileMenu', true),
  withNotifications: boolean('widthNotifications', true),
  withLogin: boolean('withLogin', true),
  withBreadcrumbs: boolean('withBreadcrumbs', true),
  withSearch: boolean('withSearch', true),
  withSecondaryMenu: boolean('withSecondaryMenu', true),
  withSocialMedia: boolean('withSocialMedia', true),
  withLanguages: boolean('withLanguages', true),
  withAdditionalButtons: boolean('withAdditionalButtons', true),
})

export function Playground() {
  const {
    logo,
    withMenu,
    withTileMenu,
    withNotifications,
    withLogin,
    withBreadcrumbs,
    withSearch,
    withSecondaryMenu,
    withSocialMedia,
    withLanguages,
    withAdditionalButtons,
  } = defaultKnobs()

  const tileMenuProps = withTileMenu && { tileMenu, tileMenuTitle: 'Сервисы' }
  const menuProps = withMenu && { menu }
  const notificationsProps = withNotifications && {
    notifications,
    notificationsActions,
    notificationsTitle: 'Уведомления',
    notificationsGroupByDay: true,
  }
  const loginProps = withLogin && {
    userName: 'Иванов Иван',
    userInfo: 'Владелец',
    loginButtonLabel: 'Войти',
    userLogined: true,
  }
  const breadcrumbsProps = withBreadcrumbs && {
    breadcrumbs,
    onBreadcrumbsItemClick: ({ e }: { e: React.SyntheticEvent }) => e.preventDefault(),
  }
  const searchProps = withSearch && {
    searchOnSubmit: ({ value }: { value?: string | null }) => alert(`Поиск ${value}`),
    searchPlaceholder: 'Поиск',
  }
  const secondaryMenuProps = withSecondaryMenu && {
    secondaryMenuLabel: 'Дополнительное меню',
    secondaryMenu: menu,
  }
  const socialMediaProps = withSocialMedia && {
    socialMedia,
  }
  const languagesProps = withLanguages && {
    languages,
  }
  const additionalButtonsProps = withAdditionalButtons && {
    additionalButtons,
  }
  return (
    <Header
      style={{ zIndex: 1000 }}
      fixed
      logo={getByMap(logoMap, logo)}
      {...loginProps}
      {...notificationsProps}
      {...tileMenuProps}
      {...menuProps}
      {...breadcrumbsProps}
      {...searchProps}
      {...secondaryMenuProps}
      {...socialMediaProps}
      {...languagesProps}
      {...additionalButtonsProps}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/Header',
  id: 'components/Header',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
