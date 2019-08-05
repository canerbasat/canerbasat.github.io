---
id: selenium-ekran-goruntusu-alma
title: Selenium Ekran Görüntüsü alma
sidebar_label:  Selenium Ekran Görüntüsü alma
---


Test projelerimiz de, test koşarken hata alan senaryolarda ekranda almış olduğumuz hatayı ve neden böyle bir hata aldığımızı daha iyi görmek için hatalı ekranlarda ekran görüntüsü almak isteriz.

Ayrıca test sonuçlarını yetkili birime sunarken resimli bir rapor çok daha anlaşılır olacaktır.

![](https://cdn-images-1.medium.com/max/1600/1*pzQkCCbFkvCmbJQQf6-I3g.jpeg)

Projemize SeleniumWebdriver ekledikten sonra ScreenShot sınıfı ile çalışmamız mümkündür. Bu sınıfın ITakeScreenshot ara yüzünün içinde bulunan bir GetScreenshot adlı bir methodu vardır.

![](https://cdn-images-1.medium.com/max/1600/1*ReWQNuGeVnvxPpdKzV6lhQ.jpeg)

Gelin şimdi bu yazıda ekran görüntüsü nasıl alırız onu öğrenelim. Ben bu yazıyı C# kullanarak basit bir şekilde kullanımını göstereceğim kendi projenize eklerken geliştirmek sizin elinizde :)

![](https://cdn-images-1.medium.com/max/1600/1*57j81M60MP_GDtVeWrmPpQ.png)

> “C# ile Selenium Webdriver Başlangıç” yazımda oluşturmuş olduğum projenin üzerinden devam edeceğim. İncelemek isterseniz linki buraya bırakıyorum.

> [https://medium.com/@canerbasat/c-ile-selenium-webdriver-ba%C5%9Flang%C4%B1%C3%A7-cc95ee5287b1](https://medium.com/@canerbasat/c-ile-selenium-webdriver-ba%C5%9Flang%C4%B1%C3%A7-cc95ee5287b1)

```c#
using System;

using Microsoft.VisualStudio.TestTools.UnitTesting;

using OpenQA.Selenium;

using OpenQA.Selenium.Chrome;

namespace SeleniumTest

{

[TestClass]

public class UnitTest1

{

IWebDriver driver;

[TestMethod]

public void TestMethod1()

{

try

{

driver = new ChromeDriver();

driver.Url = "https://www.hepsiburada.com/";

// Hepsiburadanın sitesine gidelim.

driver.FindElement(By.Id("productSearch")).SendKeys("Test");

//Arama alanınına Test yazdıralım.

  
////HATALI ELEMENT VERELIM VE HATA ALMASINI SAGLAYALIM////

driver.FindElement(By.Id("HATALI_ELEMENT")).Click();

//Ara butonuna tıklama işlemi yapalım.

driver.Quit();

//Tarayıcıyı kapatarak testi sonlandıralım.

}

catch

{

ITakesScreenshot screenshotAl = driver as ITakesScreenshot;

Screenshot screenShot = screenshotAl.GetScreenshot();

//Return değeri görüntüyü içeren nesnedir.

screenShot.SaveAsFile(@"C:\Users\ExtCanerB\Desktop\MediumEkranKaydetme\KaydedilenResim.png", ScreenshotImageFormat.Png);

//Kaydedeceğimiz dosyanın yolunu verelim ve ardından png formatında kaydedelim.

driver.Quit();

}

}

}

}
```

![](https://cdn-images-1.medium.com/max/1600/1*h-XQL6tI_iIfNBe-sfUluw.png)

Yazımı okuduğunuz için teşekkürler umarım faydalı olmuştur :)