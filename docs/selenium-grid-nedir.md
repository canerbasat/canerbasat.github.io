---
id: selenium-grid-nedir
title: Selenium-Grid Nedir?
sidebar_label:  Selenium-Grid Nedir?
---




Selenium-Grid testlerimizi paralel olarak farklı ortamlarda, farklı tarayıcılarda ve farklı sayılarda koşmamıza imkan tanıyan bir sunucudur. Yani aynı anda farklı tarayıcılarda ve işletim sistemlerinde birden fazla test çalıştırabiliriz.

Kullanmamız için sebeplerimiz;

Ölçeklendirerek farklı işletim sistemlerinin farklı versiyonları olan tarayıcılarda koşabilir.

Zaman Tasarrufu sağlar.

Sunucuyu, ortamı çok hızlı bir şekilde ayağa kaldırır.

Testleri paralel olarak çalıştırmak için birden fazla makine kullanarak testleri koşması hızlandırılabilir.

Örnek verecek olursak:

Elimizde 500 adet test olduğunu ve bunları koşmamız için 10 farklı makinemiz olduğunu düşünelim. Bu makineler fiziksel veya sanal makine bir fark olmayacaktır. Bu makineleri Selenium-Grid sunucusuna bağladığımızda testleri koşarken 10 kat daha verimli olacak ve tamamlanacaktır.

Elimizdeki her bir makineyi test edeceği ortama göre ayarlayarak farklı tarayıcıları ve versiyonları desteklemesini sağlarız. Testleri çalıştırdığımızda SeleniumGrid her bir tarayıcı için tarayıcı özelliklerini alır ve her bir test için sunucuya bağlı olan testin istediği ortam ve tarayıcıya göre uygun makinelere yönlendirir.

![enter image description here](https://lh3.googleusercontent.com/6PUVAv2a1OBeW4HAgCvn3WPdUqUChHx87P5gKUbGH7FptSooByfIOQ78B9X1E1236xWRl6rIjQb9 "grid")

	> Selenium-Grid projesi Selenium’un 4 projesinden 1 tanesidir.  
> Diğer ürünleri:
> SeleniumIDE
> SeleniumRC
> SeleniumWebdriver


Selenium-Grid Hub ve Node’dan oluşur. Sunucu üzerinde sadece bir Hub ve birden fazla Node olabilir.

Hub: Testin yürütülmesi gereken, istenilen tarayıcıyı, tarayıcı versiyonu ve işletim sistemi hakkında ki bilgileri alır ve testleri bunları sağlayan destekleyen makineye yani node’a yönlendirir.

Bir örnekle Hub’ı bir müdür ve Nodeları çalışan olarak düşünelim.  
Yapılacak bir iş olduğunu ve müdürün bu iş için uygun olan çalışanı bulup elindeki bu işi yönlendirdiğini düşünelim. Hub ve Node arasındaki ilişki bu ilişkiye benzer.

Bir işçi(Node) seçildikten sonra Selenium test komutları önce Hub(müdür)’a ve Hub da atanmış olan Node makineye yönlendirir.

Node tarayıcıyı başlatır ve aldığı Selenium test komutlarını koşar.