import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/common/Header'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl';
import 'intl';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs {
                  locale
                  name
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log('i18nMessages', i18nMessages);
        const url = location.pathname;
        const { langs, defaultLangKey } = data.site.siteMetadata.languages;
        const langKey = getCurrentLangKey(langs, defaultLangKey, url);
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/');
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }));
        return (
          <IntlProvider
            locale={langKey}
            messages={i18nMessages}
          >
            <div>
            <Helmet
              title={i18nMessages.title}
              meta={[
                { name: 'description', content: i18nMessages['seo.description'] },
                { name: 'keywords', content: i18nMessages['seo.keywords'] },
              ]}
            />
              <Header langs={langsMenu} i18nMessages={i18nMessages}  />
              <div>
                {children}
              </div>
            </div>
          </IntlProvider>
        )
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
