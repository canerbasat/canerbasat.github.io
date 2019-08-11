---
id: selenium-javascriptexecutor-kullanimi
title: Selenium JavascriptExecutor Kullanımı
sidebar_label: Selenium JavascriptExecutor Kullanımı
---


Bazen Selenium ile web elementlerinin kontrollerini sağlarken selenium komutları yetersiz kalabiliyor istediğimiz performansı sağlamayabiliyor ve sorunlarla karşılaşabiliyoruz. Bu durumlarda alternatif olarak üstesinden gelmek için JavaScriptExecutor sınıfını dahil ediyoruz. JavaScript HTML ve DOM’a direk erişip yönetebilen bir script dili olduğundan bize çok fazla kolaylık sağlar. Testimizin performansını arttırır ve normal javascript dilinde kodlamamıza imkan tanır.

**Nasıl sorunlarla karşılaşıyoruz?**

Örnek verecek olursak, en basitinden click() tıklama komutu tıklamadı ama bize bir hata mesajı da vermedi. Burada kaçış yolu olarak JavaScriptExecutor’a başvururuz ve düzgün çalışır.

Bize dönüş değeri olarak döndürdüğü tipler:

-   Boolean
-   Long
-   String
-   List
-   WebElement
-   Null

Projemizde kullanacağımız zaman öncelikli olarak kütüphaneyi dahil edelim.
```java
import org.openqa.selenium.JavascriptExecutor
```
Birkaç örnek göstererek gözünüzde biraz daha canlanmasını sağlayalım. JavaScriptExecutor yazımı yani bir diğer alışık olduğumuz tabirle syntaxi:
```java
JavascriptExecutor js = (JavascriptExecutor) driver;

Js.executeScript(Script,Element);
```
Click işlemi için:
```java
JavascriptExecutor js = (JavascriptExecutor) driver;

String el = "document.getElementById('butonunIDsi').click()";

js.executeScript(el);

////////////////////////////////////////////////////////////////////  
js.executeScript("document.getElementById('Elementin Idsi').click();");

js.executeScript("document.getElementByName('Elementin İsmi').click();");

js.executeScript("document.getElementByClass('Elementin Sınıf İsmi ').click();");  
////////////////////////////////////////////////////////////////////

js.executeScript("arguments[0].click();", loginButton); // Direk tıklatmak istedigimiz butonu tek satırda yazabiliriz.
```
Scroll Down:
```java

js.executeScript("window.scrollBy(0,600)");
```
Başka bir sayfaya yönlendirebiliriz:
```java
js.executeScript("window.location = 'http://www.google.com/'");
```
Alert(uyarı) mesajı verebliliriz:
```java
js.executeScript("alert('Bu bir uyarıdır');");
```
Karakter dizisi gönderebiliriz:
```java
js.executeScript("document.getElementById('Elementin Id’si').value='Metin';");
```
Sayfayı yenileyebiliriz:
```java
js.executeScript("history.go(0)");
```
Elementin içindeki değeri alabiliriz:
```java
String el1 =  js.executeScript("return document.documentElement.innerText;").toString();
```
Sayfa Başlığını alabiliriz:
```java
String el2 =  js.executeScript("return document.title;").toString();
```
Sayfanın Url adresini alabiliriz:
```java
String el3 =  js.executeScript("return document.URL;").toString();
```
----