---
title: Specflowda Background nasıl kullanılır?
author: Ahmet Demirel
authorURL: https://medium.com/@Ahmetdemirel1
authorImageURL: https://miro.medium.com/fit/c/256/256/1*4W_5te8MokWz5xiF8R4G0w.jpeg
---


 
![](https://miro.medium.com/max/1000/1*o5Pmls_Q0JwPlo-IX2Y4Tg.jpeg)

Projesinde Specflow kullananların başına sıklıkla gelen problem aynı stepleri her senaryo başında tekrar tekrar yazmak. Bu duruma örnek vermek gerekirse e-ticaret sitesinde ürün satın alma ve ürünü favorilere ekleme senaryolarını verebiliriz sanırım. Her iki senaryoda da login olup arama yaparak ürünü sepete yada favorilere ekleriz.

Baştaki bu aynı adımları her senaryoda yazmak yerine feature dosyasının içine bir kez yazıp, senaryoların içerisine diğer adımları yazsak işimiz daha kolay olmaz mıydı? İşte tam bu sorunun cevabı olarak karşımıza Background çıkıyor.

Background specflow feature dosyası içerisindeki senaryoların birbirini takip eden adımlarının yazıldığı bölüm olarak nitenlendirebiliriz. Background feature dosyası içerisinde tanımlanmış her bir senaryodan önce çalışır. Background içerisindeki adımlardan sonra çalıştırdığımız senaryodaki adımlar ile devam edilir.

Background sayesinde başta belirttiğim aynı adımları her seferinde tekrar tekrar yazma sorununu ortadan kaldırmış oluyoruz. Şimdi basit bir örnek ile nasıl kullanabileceğimizi görelim.

----------

![](https://miro.medium.com/max/60/1*9IWtuV6DWv_5r9Y0knLLNA.png?q=20)

![](https://miro.medium.com/max/1400/1*9IWtuV6DWv_5r9Y0knLLNA.png)

Türkçe dil desteği ile kullanım şekli.

Yukarıdaki ekran görüntüsünde görebileceğiniz gibi benzer adımlar ile başlayan iki senaryomuz var ve bu benzer adımları Background(Geçmiş) içerisine yazarak adımları tekrarlamaktan kurtulmuş olduk. Buradaki gibi her senaryoda birbirini tekrar eden adımlarınız varsa background ile tekrarı ortadan kaldırabilirsiniz.  **_Hepsiburada sepete ürün ekleme_**  senaryosunu çalıştırdığımızda ilk olarak background içerisindeki adımlar yapılacak daha sonra senaryo içerisindeki ürün arama adımı ile devam edilecek.

![](https://miro.medium.com/max/60/1*ooDbrrgPyg60JQOxsryZ9A.png?q=20)

![](https://miro.medium.com/max/1400/1*ooDbrrgPyg60JQOxsryZ9A.png)

Aynı feature dosyasının Türkçe dil desteği olmayan hali hemen hemen aynı sadece tanımlamalarda specflow’un dil desteklerinde gösterdiği gibi. Diğer dillerdeki karşılıklarını  [buradan](https://docs.cucumber.io/gherkin/reference/#background)  ulaşabilirsiniz.

Basit bir şekilde specflow’da background kullanımından bahsetmeye çalıştım umarım işinize yarayan bir yazı olur.

----------

**Yararlandığım Kaynak**

[https://www.toolsqa.com/cucumber/background-in-cucumber/](https://www.toolsqa.com/cucumber/background-in-cucumber/)