/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;


    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
       
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );


    //OLUSTURMUS OLDUGUMUZ CONST BLOCKLARI ASAGIDA CAGIRIRIZ
    /*const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );*/

    const TryOut = () => (
      <Block id="Hakkimda">
        {[
          {
            content: 'DENEME12',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Try it Out',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="light">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="coral">
        {[
          {
            content:"2018 yılından bu yana , Kalite Güvencesi (QA) alanında test otomasyonu ile uğraşmaktayım. <br></br>"+

          "Şu an Rise Teknoloji firmasında Test Lead olarak görev almaktayım. <br></br>"+
            
            "Bu blog sayfasında sizlere yazılım teknolojileri hakkında bildiklerimi mümkün oldukça aktaracağım. <br></br>"+
          "Bu site aynı zamanda sizlerin de yazılarınızı paylaşabileceğiniz bir platform olacaktır. Dolayısıyla, sayfada yazar olmak için benimle iletişime geçebilirsiniz. <br></br>"+
            
            "Amacım burayı bir not defteri olarak görüp, yeni öğrendiğim teknolojileri de sizlerle paylaşmaktır. <br></br>"+
          "Sayfayla ilgili görüş ve önerileriniz olursa lütfen bildirmekten çekinmeyin. <br></br>",
            
            
            image: `${baseUrl}img/robocop.png`,
            imageAlign: 'left',
            title: 'Merhaba , ben Caner',
            class: 'blog-logo'
            
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Konu1',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'top',
            title: 'SahaBT',
          },
          {
            content: 'Feature',
            image: `${baseUrl}img/docusaurus.svg`,
            imageAlign: 'top',
            title: 'DenemeFeature',
          },
        ]} 
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };



    // Anasayfa üzerinde göstermek istediğimiz bloklar
    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer" >
          <LearnHow />

        </div>
      </div>

      

    );
    
  }
}

module.exports = Index;
