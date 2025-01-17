import React, { forwardRef, useState } from 'react'

import { cn } from '@/__private__/utils/bem'
import { HeaderProps, HeaderComponent, HeaderDefaultLanguagesItem } from './types'
import { Layout } from '@/Layout'
import { Menu } from '@/Menu'
import { HeaderLogo } from './HeaderLogo'
import { HeaderLogin } from './HeaderLogin'
import { HeaderSearch } from './HeaderSearch'
import { Notifications } from '@/Notifications'
import { TileMenu } from '@/TileMenu'
import { useBreakpoints } from '@consta/uikit/useBreakpoints'
import { MobileMenu } from '@/MobileMenu'
import { Breadcrumbs } from '@consta/uikit/BreadcrumbsCanary'
import { SelectMenu } from '@/SelectMenu'
import { ButtonMenu } from '@/ButtonMenu'
import { Languages, LanguagesProps } from '@/Languages'

import { getMobileMenu } from './helpers'

import './Header.css'

export const cnHeader = cn('Header')

const HeaderRender = (props: HeaderProps, ref: React.Ref<HTMLDivElement>) => {
  const {
    className,
    fixed,

    // Logo
    logo,
    onLogoClick,
    logoHref,

    // Menu
    menu,
    getMenuItemActive,
    getMenuItemHref,
    getMenuItemLabel,
    getMenuItemOnClick,
    getMenuItemSubMenu,
    getMenuItemTarget,
    onMenuItemClick,

    // Login
    userName,
    userAvatar,
    userInfo,
    userLogined,
    onLoginButtonClick,
    loginButtonLabel,

    // Notifications
    notifications,
    notificationsDateFormat,
    notificationsTitle,
    notificationsActions,
    notificationsGroupByDay,
    notificationsGroupLabelFormat,
    notificationsGroups,
    getNotificationsItemLabel,
    getNotificationsItemDescription,
    getNotificationsItemImage,
    getNotificationsItemRead,
    getNotificationsItemDate,
    getNotificationsItemBadges,
    getNotificationsItemActions,
    getNotificationsItemGroup,
    getNotificationsItemView,
    getNotificationsActionLabel,
    getNotificationsActionIcon,
    getNotificationsActionOnClick,
    getNotificationsGroupLabel,
    getNotificationsGroupId,

    // TileMenu
    tileMenu,
    tileMenuView,
    onTileMenuItemClick,
    getTileMenuItemDescription,
    getTileMenuItemHref,
    getTileMenuItemImage,
    getTileMenuItemOnClick,
    getTileMenuItemLabel,
    tileMenuTitle,

    // Breadcrumbs
    breadcrumbs,
    breadcrumbsOnlyIconRoot,
    onBreadcrumbsItemClick,
    getBreadcrumbsItemLabel,
    getBreadcrumbsItemHref,
    getBreadcrumbsItemIcon,
    getBreadcrumbsItemOnClick,
    breadcrumbsLastItemIsLink,
    breadcrumbsFitMode,

    // Search
    searchValue,
    searchOnChange,
    searchOnSubmit,
    searchPlaceholder,

    // SecondaryMenu
    secondaryMenuLabel,
    secondaryMenu,
    getSecondaryMenuItemHref,
    getSecondaryMenuItemLabel,
    getSecondaryMenuItemOnClick,
    getSecondaryMenuItemSubMenu,
    getSecondaryMenuItemTarget,

    // SocialMedia
    socialMedia,
    getSocialMediaItemHref,
    getSocialMediaItemIcon,
    getSocialMediaItemLabel,
    getSocialMediaItemOnClick,
    getSocialMediaItemTarget,
    onSocialMediaItemClick,

    // Languages
    languages,
    languageValue: languageValueProp,
    getLanguagesItemHref,
    getLanguagesItemLabel,
    getLanguagesItemOnClick,
    getLanguagesItemTarget,
    onLanguageChange: onLanguageChangeProp,

    // AdditionalButtons
    additionalButtons,
    getAdditionalButtonsItemHref,
    getAdditionalButtonsItemIcon,
    getAdditionalButtonsItemLabel,
    getAdditionalButtonsItemOnClick,
    getAdditionalButtonsItemTarget,
    onAdditionalButtonsItemClick,

    ...otherProps
  } = props

  const breakpoints = useBreakpoints({ s: 800, m: 1200 })

  const [languagesValue, setLanguagesValue] = useState<HeaderDefaultLanguagesItem | undefined>(
    languageValueProp || languages?.[0]
  )

  const elementZIndex = typeof props.style?.zIndex === 'number' ? props.style.zIndex : undefined

  const onLanguageChange: LanguagesProps<HeaderDefaultLanguagesItem>['onChange'] = params => {
    onLanguageChangeProp?.(params)
    setLanguagesValue(params.item)
  }

  if (breakpoints.m) {
    return (
      <Layout
        {...otherProps}
        ref={ref}
        className={cnHeader({ fixed }, [className])}
        rowTop={
          (additionalButtons?.length ||
            languages?.length ||
            socialMedia?.length ||
            (secondaryMenu?.length && secondaryMenuLabel)) && {
            left:
              secondaryMenuLabel && secondaryMenu?.length ? (
                <SelectMenu
                  label={secondaryMenuLabel}
                  items={secondaryMenu}
                  getItemHref={getSecondaryMenuItemHref}
                  getItemLabel={getSecondaryMenuItemLabel}
                  getItemOnClick={getSecondaryMenuItemOnClick}
                  getItemSubMenu={getSecondaryMenuItemSubMenu}
                  getItemTarget={getSecondaryMenuItemTarget}
                  style={{ zIndex: elementZIndex }}
                />
              ) : (
                undefined
              ),
            center: socialMedia?.length ? (
              <ButtonMenu
                items={socialMedia}
                getItemHref={getSocialMediaItemHref}
                getItemIcon={getSocialMediaItemIcon}
                getItemLabel={getSocialMediaItemLabel}
                getItemOnClick={getSocialMediaItemOnClick}
                getItemTarget={getSocialMediaItemTarget}
                onItemClick={onSocialMediaItemClick}
                view="clear"
                onlyIcon
                size="s"
              />
            ) : (
              undefined
            ),
            right: (
              <div className={cnHeader('RowTopRight')}>
                {[
                  languages?.length ? (
                    <Languages
                      key="Languages"
                      items={languages}
                      value={languagesValue}
                      getItemHref={getLanguagesItemHref}
                      getItemLabel={getLanguagesItemLabel}
                      getItemOnClick={getLanguagesItemOnClick}
                      getItemTarget={getLanguagesItemTarget}
                      onChange={onLanguageChange}
                      style={{ zIndex: elementZIndex }}
                    />
                  ) : (
                    undefined
                  ),
                  additionalButtons?.length ? (
                    <ButtonMenu
                      items={additionalButtons}
                      getItemHref={getAdditionalButtonsItemHref}
                      getItemIcon={getAdditionalButtonsItemIcon}
                      getItemLabel={getAdditionalButtonsItemLabel}
                      getItemOnClick={getAdditionalButtonsItemOnClick}
                      getItemTarget={getAdditionalButtonsItemTarget}
                      onItemClick={onAdditionalButtonsItemClick}
                      view="clear"
                      size="s"
                    />
                  ) : (
                    undefined
                  ),
                ]}
              </div>
            ),
          }
        }
        rowCenter={{
          left: (
            <div className={cnHeader('RowCenterLeft', { breakpoint: 'm' })}>
              <HeaderLogo className={cnHeader('Logo')} logo={logo} href={logoHref} />
              {(searchOnSubmit || searchOnChange) && (
                <HeaderSearch
                  value={searchValue}
                  onChange={searchOnChange}
                  onSubmit={searchOnSubmit}
                  placeholder={searchPlaceholder}
                />
              )}
              {menu && (
                <Menu
                  className={cnHeader('Menu')}
                  items={menu}
                  getItemActive={getMenuItemActive}
                  getItemHref={getMenuItemHref}
                  getItemLabel={getMenuItemLabel}
                  getItemOnClick={getMenuItemOnClick}
                  getItemSubMenu={getMenuItemSubMenu}
                  getItemTarget={getMenuItemTarget}
                  onItemClick={onMenuItemClick}
                  style={{ zIndex: elementZIndex }}
                />
              )}
            </div>
          ),
          right: (
            <div className={cnHeader('RowCenterRight')}>
              <HeaderLogin
                userName={userName}
                userAvatar={userAvatar}
                userInfo={userInfo}
                userLogined={userLogined}
                onLoginButtonClick={onLoginButtonClick}
                loginButtonLabel={loginButtonLabel}
              />
              {tileMenu?.length && (
                <TileMenu
                  items={tileMenu}
                  view={tileMenuView}
                  onItemClick={onTileMenuItemClick}
                  getItemDescription={getTileMenuItemDescription}
                  getItemHref={getTileMenuItemHref}
                  getItemImage={getTileMenuItemImage}
                  getItemOnClick={getTileMenuItemOnClick}
                  getItemLabel={getTileMenuItemLabel}
                  listClassName={cnHeader('TileMenuList', { breakpoint: 'm' })}
                  title={tileMenuTitle}
                  style={{ zIndex: elementZIndex }}
                />
              )}
              {notifications?.length && (
                <Notifications
                  listClassName={cnHeader('NotificationsList', { breakpoint: 'm' })}
                  items={notifications}
                  itemDateFormat={notificationsDateFormat}
                  title={notificationsTitle}
                  actions={notificationsActions}
                  groupByDay={notificationsGroupByDay}
                  groupLabelFormat={notificationsGroupLabelFormat}
                  groups={notificationsGroups}
                  getItemLabel={getNotificationsItemLabel}
                  getItemDescription={getNotificationsItemDescription}
                  getItemImage={getNotificationsItemImage}
                  getItemRead={getNotificationsItemRead}
                  getItemDate={getNotificationsItemDate}
                  getItemBadges={getNotificationsItemBadges}
                  getItemActions={getNotificationsItemActions}
                  getItemGroup={getNotificationsItemGroup}
                  getItemView={getNotificationsItemView}
                  getActionLabel={getNotificationsActionLabel}
                  getActionIcon={getNotificationsActionIcon}
                  getActionOnClick={getNotificationsActionOnClick}
                  getGroupLabel={getNotificationsGroupLabel}
                  getGroupId={getNotificationsGroupId}
                  style={{ zIndex: elementZIndex }}
                />
              )}
            </div>
          ),
        }}
        rowBottom={
          breadcrumbs ? (
            <Breadcrumbs
              className={cnHeader('Breadcrumbs')}
              items={breadcrumbs}
              onlyIconRoot={breadcrumbsOnlyIconRoot}
              size="m"
              onItemClick={onBreadcrumbsItemClick}
              getItemLabel={getBreadcrumbsItemLabel}
              getItemHref={getBreadcrumbsItemHref}
              getItemIcon={getBreadcrumbsItemIcon}
              getItemOnClick={getBreadcrumbsItemOnClick}
              lastItemIsLink={breadcrumbsLastItemIsLink}
              fitMode={breadcrumbsFitMode}
            />
          ) : (
            undefined
          )
        }
      />
    )
  }

  if (breakpoints.s) {
    const mobileMenuItems = getMobileMenu(props, { languagesValue, setLanguagesValue })

    return (
      <Layout
        {...otherProps}
        ref={ref}
        className={cnHeader({ fixed }, [className])}
        rowCenter={{
          left: (
            <div className={cnHeader('RowCenterLeft')}>
              {(mobileMenuItems.length || socialMedia?.length) && (
                <MobileMenu
                  className={cnHeader('Menu')}
                  items={mobileMenuItems}
                  getItemActive={getMenuItemActive}
                  getItemHref={getMenuItemHref}
                  getItemLabel={getMenuItemLabel}
                  getItemOnClick={getMenuItemOnClick}
                  getItemSubMenu={getMenuItemSubMenu}
                  getItemTarget={getMenuItemTarget}
                  style={{ zIndex: elementZIndex }}
                  footer={
                    socialMedia?.length && (
                      <ButtonMenu
                        className={cnHeader('MobileMenuSocialMedia')}
                        items={socialMedia}
                        getItemHref={getSocialMediaItemHref}
                        getItemIcon={getSocialMediaItemIcon}
                        getItemLabel={getSocialMediaItemLabel}
                        getItemOnClick={getSocialMediaItemOnClick}
                        getItemTarget={getSocialMediaItemTarget}
                        onItemClick={onSocialMediaItemClick}
                        view="clear"
                        onlyIcon
                        size="s"
                      />
                    )
                  }
                />
              )}
              <HeaderLogo className={cnHeader('Logo')} logo={logo} href={logoHref} />
              {(searchOnSubmit || searchOnChange) && (
                <HeaderSearch
                  value={searchValue}
                  onChange={searchOnChange}
                  onSubmit={searchOnSubmit}
                  placeholder={searchPlaceholder}
                />
              )}
            </div>
          ),
          right: (
            <div className={cnHeader('RowCenterRight')}>
              <HeaderLogin
                userName={userName}
                userAvatar={userAvatar}
                userInfo={userInfo}
                userLogined={userLogined}
                onLoginButtonClick={onLoginButtonClick}
                loginButtonLabel={loginButtonLabel}
              />
              {tileMenu?.length && (
                <TileMenu
                  items={tileMenu}
                  view={tileMenuView}
                  onItemClick={onTileMenuItemClick}
                  getItemDescription={getTileMenuItemDescription}
                  getItemHref={getTileMenuItemHref}
                  getItemImage={getTileMenuItemImage}
                  getItemOnClick={getTileMenuItemOnClick}
                  getItemLabel={getTileMenuItemLabel}
                  listClassName={cnHeader('TileMenuList')}
                  title={tileMenuTitle}
                  isMobile
                  style={{ zIndex: elementZIndex }}
                />
              )}
              {notifications?.length && (
                <Notifications
                  listClassName={cnHeader('NotificationsList')}
                  items={notifications}
                  itemDateFormat={notificationsDateFormat}
                  title={notificationsTitle}
                  actions={notificationsActions}
                  groupByDay={notificationsGroupByDay}
                  groupLabelFormat={notificationsGroupLabelFormat}
                  groups={notificationsGroups}
                  getItemLabel={getNotificationsItemLabel}
                  getItemDescription={getNotificationsItemDescription}
                  getItemImage={getNotificationsItemImage}
                  getItemRead={getNotificationsItemRead}
                  getItemDate={getNotificationsItemDate}
                  getItemBadges={getNotificationsItemBadges}
                  getItemActions={getNotificationsItemActions}
                  getItemGroup={getNotificationsItemGroup}
                  getItemView={getNotificationsItemView}
                  getActionLabel={getNotificationsActionLabel}
                  getActionIcon={getNotificationsActionIcon}
                  getActionOnClick={getNotificationsActionOnClick}
                  getGroupLabel={getNotificationsGroupLabel}
                  getGroupId={getNotificationsGroupId}
                  isMobile
                  style={{ zIndex: elementZIndex }}
                />
              )}
            </div>
          ),
        }}
        rowBottom={
          breadcrumbs ? (
            <Breadcrumbs
              className={cnHeader('Breadcrumbs')}
              items={breadcrumbs}
              onlyIconRoot={breadcrumbsOnlyIconRoot}
              size="m"
              onItemClick={onBreadcrumbsItemClick}
              getItemLabel={getBreadcrumbsItemLabel}
              getItemHref={getBreadcrumbsItemHref}
              getItemIcon={getBreadcrumbsItemIcon}
              getItemOnClick={getBreadcrumbsItemOnClick}
              lastItemIsLink={breadcrumbsLastItemIsLink}
              fitMode={breadcrumbsFitMode}
            />
          ) : (
            undefined
          )
        }
      />
    )
  }

  const mobileMenuItems = getMobileMenu(props, { languagesValue, setLanguagesValue })

  return (
    <Layout
      {...otherProps}
      ref={ref}
      className={cnHeader({ fixed }, [className])}
      rowCenter={{
        left: (
          <div className={cnHeader('RowCenterLeft')}>
            {(mobileMenuItems.length ||
              userName ||
              userAvatar ||
              tileMenu?.length ||
              notifications?.length ||
              searchOnSubmit ||
              searchOnChange ||
              socialMedia?.length) && (
              <MobileMenu
                className={cnHeader('Menu')}
                items={getMobileMenu(props, { languagesValue, setLanguagesValue })}
                getItemActive={getMenuItemActive}
                getItemHref={getMenuItemHref}
                getItemLabel={getMenuItemLabel}
                getItemOnClick={getMenuItemOnClick}
                getItemSubMenu={getMenuItemSubMenu}
                getItemTarget={getMenuItemTarget}
                style={{ zIndex: elementZIndex }}
                header={
                  (userName ||
                    userAvatar ||
                    tileMenu?.length ||
                    notifications?.length ||
                    searchOnSubmit ||
                    searchOnChange) && (
                    <div className={cnHeader('MobileMenuHeader')}>
                      <div>
                        <HeaderLogin
                          userName={userName}
                          userAvatar={userAvatar}
                          userInfo={userInfo}
                          userLogined={userLogined}
                          onLoginButtonClick={onLoginButtonClick}
                          loginButtonLabel={loginButtonLabel}
                        />
                      </div>
                      {(tileMenu?.length || notifications?.length) && (
                        <div>
                          {tileMenu?.length && (
                            <TileMenu
                              items={tileMenu}
                              view={tileMenuView}
                              onItemClick={onTileMenuItemClick}
                              getItemDescription={getTileMenuItemDescription}
                              getItemHref={getTileMenuItemHref}
                              getItemImage={getTileMenuItemImage}
                              getItemOnClick={getTileMenuItemOnClick}
                              getItemLabel={getTileMenuItemLabel}
                              listClassName={cnHeader('TileMenuList')}
                              title={tileMenuTitle}
                              isMobile
                              style={{ zIndex: elementZIndex }}
                            />
                          )}
                          {notifications?.length && (
                            <Notifications
                              listClassName={cnHeader('NotificationsList')}
                              items={notifications}
                              itemDateFormat={notificationsDateFormat}
                              title={notificationsTitle}
                              actions={notificationsActions}
                              groupByDay={notificationsGroupByDay}
                              groupLabelFormat={notificationsGroupLabelFormat}
                              groups={notificationsGroups}
                              getItemLabel={getNotificationsItemLabel}
                              getItemDescription={getNotificationsItemDescription}
                              getItemImage={getNotificationsItemImage}
                              getItemRead={getNotificationsItemRead}
                              getItemDate={getNotificationsItemDate}
                              getItemBadges={getNotificationsItemBadges}
                              getItemActions={getNotificationsItemActions}
                              getItemGroup={getNotificationsItemGroup}
                              getItemView={getNotificationsItemView}
                              getActionLabel={getNotificationsActionLabel}
                              getActionIcon={getNotificationsActionIcon}
                              getActionOnClick={getNotificationsActionOnClick}
                              getGroupLabel={getNotificationsGroupLabel}
                              getGroupId={getNotificationsGroupId}
                              isMobile
                              style={{ zIndex: elementZIndex }}
                            />
                          )}
                        </div>
                      )}
                      {(searchOnSubmit || searchOnChange) && (
                        <div className={cnHeader('MobileSearchContainer')}>
                          <HeaderSearch
                            value={searchValue}
                            onChange={searchOnChange}
                            onSubmit={searchOnSubmit}
                            placeholder={searchPlaceholder}
                          />
                        </div>
                      )}
                    </div>
                  )
                }
                footer={
                  socialMedia?.length && (
                    <ButtonMenu
                      className={cnHeader('MobileMenuSocialMedia')}
                      items={socialMedia}
                      getItemHref={getSocialMediaItemHref}
                      getItemIcon={getSocialMediaItemIcon}
                      getItemLabel={getSocialMediaItemLabel}
                      getItemOnClick={getSocialMediaItemOnClick}
                      getItemTarget={getSocialMediaItemTarget}
                      onItemClick={onSocialMediaItemClick}
                      view="clear"
                      onlyIcon
                      size="s"
                    />
                  )
                }
              />
            )}
            <HeaderLogo className={cnHeader('Logo')} logo={logo} href={logoHref} />
          </div>
        ),
      }}
    />
  )
}

export const Header = forwardRef(HeaderRender) as HeaderComponent

export * from './types'
