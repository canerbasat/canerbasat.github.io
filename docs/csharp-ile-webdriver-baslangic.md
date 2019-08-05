---
id: csharp-ile-webdriver-baslangic
title: C# ile Selenium Webdriver Başlangıç
sidebar_label: C# ile Selenium Webdriver Başlangıç
---


Selenium birçok programlama dilinde desteği olan bir UI (önyüz) testleri yazmamızı sağlayan bir test otomasyon aracıdır. Bugün Selenium’un geliştirmiş olduğu Selenium Webdriver projesinden bahsedelim ve Selenium Webdriver ile C# kullanarak bir giriş yapalım ve ilk ortam hazırlığının nasıl yapıldığına bakalım.

Öncelikle, desteklediği diller, platformlar ve tarayıcılara bir göz atalım.

  **Desteklediği Diller:**
> · Java 
> · C# 
> · Python 
> · Javascript 
> · Perl 
> · PHP 
> · Objective-C 
> · R
>  · Dart
> · Tcl


**Desteklediği Platformlar:**
> · Apple OS X
> · Microsoft Windows
> · Linux
> · Android
> · IOS

**Desteklediği Tarayıcılar:**
> · Firefox
> · Internet Explorer 7–11
> · Google Chrome
> · Safari
> · Opera
> · HtmlUnit
>· Android (Appium)
>· phantomJs
·> IOS(ios-driver veya Appium)



 
Selenium’u bir projeye dahil edip projede kullanacağımız zaman, geliştireceğimiz ortama ve programlama diline göre değişkenlik gösterir. Biz bugün C# kullanarak bu ortamın nasıl hazırlandığına bakacağız.

Bugün ben kendi kullanmış olduğum Visual Studio 2015 üzerinden bu işlemleri göstereceğim. Visual Studio kullanmak istemeyen arkadaşlara JetBrains’in bir ürünü olan Rider’ı öneririm.

Hadi başlayalım o zaman,

Öncelikle Visual Studio’yu açalım.


Öncelikle Visual Studio’yu açalım.

![](https://cdn-images-1.medium.com/max/1600/1*fFeVqjgjz0vcfAYgxcrDMg.png)

Proje oluşturarak başlayalım.

![](https://cdn-images-1.medium.com/max/1600/1*hDpEnGgSefjq0GhLDGrMxA.png)

Projenin ismini verelim ardından projenin kayıtlı olacağı dizini verelim.

![](https://cdn-images-1.medium.com/max/1600/1*TYgW3YMmpdYCNDDliR7ehA.png)

Visual Studio NuGet Packageleri yönetmek için devam edelim.

![](https://cdn-images-1.medium.com/max/1600/1*ux5UjVcUE-_UhmK99POYTw.png)

SeleniumWebriver API sini projemize dahil edelim.

İlk kurulumu GoogleChrome ürünü ile görelim. Visual Studioda NuGet Package Manager bizlere driverı kurmamızda kolaylık sağlar. Chromedriverı Javada kullanacak olsaydık ,

> [https://chromedriver.storage.googleapis.com/index.html?path=2.44/](https://chromedriver.storage.googleapis.com/index.html?path=2.44/)

Adresine gidip driverı kullanacağımız ortama göre uyumlu olan driverı indirerek test kodumuzda bu driverın dosya dizinini belirtmemiz projeye tanıtmamız gerekirdi. Nuget paket kullanmadan C# ile de dosya dizini vererek kullanabiliriz.

Projemize paketleri kurduktan sonra testimizde WebDriver tanımlayıp bir ChromeDriver ayağa kaldırıp build edelim ve ardından ortamımızın testlerimizi yazmaya hazır olduğunu görelim.

![](https://cdn-images-1.medium.com/max/1600/1*Rdd3q5WUjV-Upfu1bhs3wg.png)

Build işleminin ardından Test Explorer penceresini açalım ve testimizi koşalım.

![](https://cdn-images-1.medium.com/max/1600/1*Wiy4z09cL-5tZoJkkC0S7Q.png)

![](https://cdn-images-1.medium.com/max/1600/1*S78GpTRIjlo6cgcJWxGvDg.png)

Yazımı okuduğunuz için teşekkürler umarım faydalı olmuştur :)