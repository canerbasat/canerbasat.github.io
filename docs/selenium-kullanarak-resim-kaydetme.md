---
id: selenium-kullanarak-resim-kaydetme
title: Selenium Kullanarak Resim Kaydetme
sidebar_label: Selenium Kullanarak Resim Kaydetme
---


Bir web otomasyon aracı olan Selenium, bir web sayfasından tüm görüntü bağlantılarını kaydetmek , almak için kullanılabilir.

Her web sitesinin üstünde bulundurduğu resimler HTML etiketleri arasında kod üzerinde bulunur.

    <img alt="Selenium Logo" src="/images/big-logo.png">

Java ve Selenium kullanarak bir resim kaydedelim yapacağımız işlemler

Resimin bulunduğu elementi bulup , src özelliğini alıp , resime java URL oluşturup(URL = Bir kaynağı işaret eden yani “Uniform Resource Locator”), ImageIO sınıfını kullanarak (_IMAGEIO’ yu görseli adreslemek üzerinden işlem yapabilmek için kullanırız)_  BufferedImage( Bu sınıf hafızaya alınan bir görüntüyü yönetmek için kullanılır.

Sağladığı imkanlar depolama , çevirme , render işlemleri gibi imkanlar sağlar.

![](https://cdn-images-1.medium.com/max/1600/1*UV0tarEMYiaSvn_6qzEYSw.png)

