/*!
*  filename: layout.js
*  version : 2.3.26
*  Copyright © 2001 - 2021 Syncfusion Inc. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
import React from "react";
import Helmet from "react-helmet";
import {ThemeProvider} from "styled-components"
import "../assets/css/index.css";
import "../assets/css/style.css";
import "../../node_modules/prismjs/themes/prism.css"
import theme from '../templates/theme'
import favicon from '../../static/favicon.ico';

export default class MainLayout extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <link rel="shortcut icon" href={favicon} />
          <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/fabric.css" />
          <meta property="og:image" content={favicon} alt="Bold Reports Documentation"/>
          <meta content="64" property="og:image:width"/>
          <meta content="64" property="og:image:height"/>
        </Helmet>
        <ThemeProvider theme={theme}>
          <div>
            {children}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
