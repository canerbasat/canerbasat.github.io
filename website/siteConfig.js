/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.

const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const docs ={
  docsSideNavCollapsible: true
}



const siteConfig = {
  title: 'Caner BASAT', // Title for your website.
  tagline: 'Caner Basat',
  url: 'https://caner.basat.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'test-site',
  organizationName: 'canerbasat',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'


  // LINKLERE BAGLI MD DOSYALARI
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
  {doc: 'selenium-nedir-selenium-ide', label: 'Dökümanlarım'},
  
  {blog: true, label: 'Faydalı Yazılar'}, 
  //  {page: 'hakkimda', label: 'Hakkımda'},

  
  ],

//BLog sayfasında kategori basligi
  blogSidebarTitle: { default: 'Başa dön', all: 'Faydalı Yazılar' },

  //Blog sayfasında gostermek istedigimiz yazı limiti
  blogSidebarCount: 'ALL',
  
  onPageNav: 'separate',

  //Dokumanlar sayfasında kategorileri katlanabilir hale getirir
  docsSideNavCollapsible: false,



  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/blogTT.png',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/robocop.png',

  /* Colors for website */
  colors: {
    primaryColor: '#5b1819',
    secondaryColor: '#205C3B',
  },



  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],
  stylesheets: ['/css/code-block-buttons.css'],
  

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Caner BAŞAT`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],
  

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  


  
};
module.exports =docs;
module.exports = siteConfig;


