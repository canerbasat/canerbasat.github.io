---
id: if-else-kosul-yapisi
title: İf-Else Koşul Yapısı
sidebar_label: İf-Else Koşul Yapısı
---


----------

IF-ELSE KOSUL YAPISI

If else yapısı her programlama dilinde olduğu gibi belirtilen koşulların kontrolünü sağlamakta kullanılır.  
Kendi içerisinde birçok farklı kullanıma sahiptir.  
If else yapısında biz kontrol etmek için bir şart belirleriz.

![](https://cdn-images-1.medium.com/max/1600/1*wPdqvjh15gWi9tQFn746Ng.png)

Bu belirtilen şartlar eğer sağlanıyorsa yapacağı veya sağlanmıyorsa yapacağı işlemleri bu yapının içerisine yazarız. Sırasıyla kullanımlarına bakalım o halde…
```java
boolean caner= true;

if(caner)  
{  
    System.out.println("True değer ile şartı sağladı ve if yapısına           girdi.");  
}  
else  
{  
    System.out.println("Değer false olarak gelseydi else yapısına geçecekti.");  
}
```
----------

> Bu koşul yapısında şart sağlanıyorsa ve çağıracağımız işlemi tek satırda bitirebileceksek süslü parantez koymamıza gerek yoktur onunda kullanımı şöyledir:  
  
```java
if(caner)  
System._out_.println("True değer ile şartı sağladı ve if yapısına girdi.");
```
----------

Birde else if merdiven yapısı var buda bizlere bir şartımızı birden fazla koşula sokarak denememizi sağlar. Ehliyet alma yaşı sorgulama ile ilgili bir örnekle bakalım.
```java
int yas = 18;

if(yas == 18)  
{  
      System.out.println("Tam 18 yasındasın alabilirsin.");  
}else if(yas > 18 ){  
      System.out.println("18den büyüksün alabilirsin");  
}else{  
      System.out.println("Malesef 18 yasından kücüksün alamazsın.");  
}
```
Yas 18 ise if  
18 değil büyükse else-if  
18den küçük olduğu taktirde else kod bloğuna girip sonlandıracaktır.