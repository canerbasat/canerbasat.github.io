---
title: Specflow'da Data Driven Testing
author: Emirhan Gül
authorURL: https://medium.com/@emirhangul
authorImageURL: https://cdn-images-1.medium.com/fit/c/100/100/0*CXJipn3sw25aGRZP.jpg
---

Selamlar, bu yazımda sizlere veri odaklı testin(DDT) nasıl yapılacağını ve bunu projemize nasıl implement edeceğimizi anlatacağım.

Bu bakış açısıyla karşımıza iki tane yeni keyword çıkıyor:

1.  **Scenario Outline:** Bu, bir senaryoyu iki veya daha fazla kez, farklı veri kümeleriyle koşmak için kullanılır.
2.  **Examples:** Bu keyword ise, senaryoda kullanılmak üzere parametre olarak aktarılacak verileri içerir.

Konuyla ilgili temel iki konsept bunlar. Lafı uzatmadan hemen bunu bir login senaryosu ile süsleyip daha iyi kavrayalım.

Hayali senaryomuzda birden fazla kullanıcı gruplarının hepsiburada.com sitesine başarılı bir şekilde login olabilmesini bekliyoruz.

### HANDS ON! 👩‍💻

#### İlk Adımımız

Senaryoya başlarken kullandığımız “**Scenario**” keyword’unu “**Scenario Outline”** değiştirelim.

Daha sonra, aşağıdaki görseldeki “**Examples**” bölümünde görüldüğü gibi kullanıcı adı ve şifre verilerini n kullanıcı sayısı kadar girelim.

**“Examples”** kullanımı için önemli bir nokta; veri tablosunu oluştururken en üstünde vermiş olduğumuz başlık, step’imizde üçgen parantezle(<kullanıcıAdı>) parametreyi alırken kullandığımız başlıkla aynı olmak zorunda.

![](https://cdn-images-1.medium.com/max/1600/1*XdO4usDw9P6VMq8bTA0JKw.png)

Senaryonun BDD karşılığı

#### İkinci Adımımız

Step’lerimizin içini doldurmak. 6. satırdaki step’imizin implementasyonu aşağıdaki gibidir. Fakat dikkat edilmesi gereken önemli bir nokta; Given cümleciğinde parametre olarak belirtirken çift tırnak kullanmamak. Yani

[When(@”Kullanıcı ‘(.*)’ ve ‘(.*)' girer”)]

yerine;

[When(@”Kullanıcı **(.*) ve (.*)** girer”)]

olarak kullanılmak zorunda.

![](https://cdn-images-1.medium.com/max/1600/1*DN53tzuHxq0abqGiUN2mng.png)

Step’in implementasyon görseli

### DONE! 💪

Bu işlemlerin sonunca testi çalıştırdığımızda, tabloya 3 adet kullanıcı bilgileri satırı girdiğimizden ötürü test üç kez farklı kullanıcıları iterate ederek koşacaktır. Dolayısıyla, aynı zamanda kullanıcı değişkenlerimizi daha okunabilir, kolay değişitirebilir hale getirerek, hard-code’lamadan da kaçınmış olduk.

![](https://cdn-images-1.medium.com/max/2400/1*fjKMqFC4rf09OZJOd8VgLg.gif)

Senaryo koşum görüntüleri

Umarım sizler için faydalı olmuştur! Bir sonraki yazımda görüşmek üzere, mutlu testler 🤘🏼

Referanslar:

[https://www.automatetheplanet.com/handling-parameters-specflow/](https://www.automatetheplanet.com/handling-parameters-specflow/)[https://www.toolsqa.com/specflow/data-driven-testing-using-examples-keyword-in-specflow/](https://www.toolsqa.com/specflow/data-driven-testing-using-examples-keyword-in-specflow/)  
[https://specflow.org/documentation/SpecFlow-Assist-Helpers/](https://specflow.org/documentation/SpecFlow-Assist-Helpers/)