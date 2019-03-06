/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');




class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  

  render() {
    

    return (
      
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
         
            
          </div>
        </section>

       


        <div class="sharethis-inline-follow-buttons" ></div>


        <section className="copyright">{this.props.config.copyright}
        <div>
        <head className="postHeader">
        <script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#property=5c77cdccdf6421001143afce&product=inline-follow-buttons' async='async'></script>  

            </head>
        
            </div>
        </section>





      </footer>
    );


    
  }
}

module.exports = Footer;
