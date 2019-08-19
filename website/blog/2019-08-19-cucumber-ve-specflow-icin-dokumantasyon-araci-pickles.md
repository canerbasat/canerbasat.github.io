---
title: Cucumber ve SpecFlow için dokümantasyon aracı Pickles
author: Ahmet Demirel
authorURL: https://medium.com/@Ahmetdemirel1
authorImageURL: https://miro.medium.com/fit/c/256/256/1*4W_5te8MokWz5xiF8R4G0w.jpeg
---


  
![](https://miro.medium.com/max/1000/1*Ssu8jGCMSvDF-V-GiNCAmg.png)

Pickles özellikle Cucumber ve SpecFlow gibi BDD(Behavior Driven Development) araçları için açık kaynak olarak geliştirilmiş bir dokümantasyon oluşturucudur.

Pickles ile müşterileriniz için daha erişilebilir bir formatta dokümanlar oluşturabilir ve iş süreçlerinize dahil edebilirsiniz. Test senaryolarını yazarken, feature’lar kendi kaynak dosyamızda bulunduğu için projedeki diğer kişilerin de bu feature’lara erişebilmesi pickles sayesinde daha kolay oluyor.

**Desteklediği formatlar**

-   HTML
-   DHTML
-   JSON
-   WORD
-   EXCEL

Daha detaylı bilgiler için  [http://www.picklesdoc.com/](http://www.picklesdoc.com/)  sitesinden yararlanabilirsiniz.

----------

Pickles kullanımına gelirsek, projeye yüklemenin farklı yolları var. Ben Package Manager Console üzerinden anlatmaya çalışacağım.

Visual Studio 2015'de Package Manager Console üzerine “**_install-package Pickles_**” yazarak paketi yüklüyoruz.

Pickles kullanım formatı ise şu şekilde oluyor

Pickle-Features -FeatureDirectory -OutputDirectory [-Language]  
[-SystemUnderTestName] [-SystemUnderTestVersion] DocumantationFormat

-   **FeatureDirectory**’den sonra feature’larımızın olduğu klasörü belirtiyoruz.
-   **-OutputDirectory**’den sonra ise oluşacak dokümanı nereye kaydetmek istiyorsak o klasörü belirtiyoruz.
-   **[-Language]** default olarak ingilizce oluyor.
-   **[-SystemUnderTestName]**  Oluşacak doküman için isim veriyoruz
-   **[-SystemUnderTestVersion]**  Dokümana versiyon ekliyoruz
-   **DocumantationFormat**  ile de hangi formatta doküman oluşturmak istiyorsak belirtiyoruz. Default olarak html formatı geliyor.

Kendi projemde Pickles kullanımını şu şekilde yaptım buradan örnek alarak kullanabilirsiniz

Pickle-Features -FeatureDirectory .\pickles.web\Features         
-OutputDirectory C:\Users\ExtAhmetDe\Desktop\Pickles\ -SystemUnderTestName "pickels" -SystemUnderTestVersion "1.0" -DocumentationFormat html

Bu şekilde ilerleyerek Cucumber yada SpecFlow projenizde dokümantasyon işlemlerini yapabilirsiniz.

![](https://miro.medium.com/max/60/1*pKfMmg2ekdCuhhVnd5hfUg.png?q=20)

![](https://miro.medium.com/max/1400/1*pKfMmg2ekdCuhhVnd5hfUg.png)

dhtml formatındaki bir doküman

----------

**Yararlandığım Kaynaklar**

-   [http://docs.picklesdoc.com/en/latest/](http://docs.picklesdoc.com/en/latest/)
-   [https://www.youtube.com/watch?v=zW8Xj602oig](https://www.youtube.com/watch?v=zW8Xj602oig)
-   [https://github.com/picklesdoc/pickles/](https://github.com/picklesdoc/pickles/)
