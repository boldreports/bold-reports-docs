/*!
*  filename: Header.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
import React from 'react';
import styled from 'styled-components';
import * as toc from './../../../left-toc.json';

class MainHeader extends React.Component {
  /* eslint-disable */
  render() {
    return (
      <SiteContainer className="docs-header-container">
        <div className="doc-left-side-header">
          <div className="doc-icons icon-burger_menu doc-hamburger-icon"></div>
          <a className="doc-logo-link"><div className="doc-logo"></div></a>
          <div className="doc-header-platform">{toc.additionalInfo.header}</div>
        </div>
        <div className="doc-right-side-header">
          <div id="doc-content-search"></div>
          <div className="doc-header-links">
            {toc.additionalInfo.url.demo && <a href={toc.additionalInfo.url.demo} target="_blank"><div className="doc-header-link doc-demos-link">Demos</div></a>}
            <a href="mailto:support@boldreports.com" target="_self"><div className="doc-header-link doc-support-link">Support</div></a>
            <a href="https://www.boldreports.com/blog" target="_blank"><div className="doc-header-link doc-forum-link">Blog</div></a>
            {toc.additionalInfo.url.download && <a href={toc.additionalInfo.url.download} target="_blank"><div className="doc-header-link doc-download-link">Download</div></a>}
          </div>
        </div>
      </SiteContainer>
    )
  }
}

const SiteContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: 0px 20px;
  @media screen and (max-width: 764px) {
    padding: 0px 10px;
  }
`

export default MainHeader
