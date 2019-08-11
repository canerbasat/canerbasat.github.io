---
id: headless-chrome-kullanimi
title: Headless Chrome Kullanımı
sidebar_label:  Headless Chrome Kullanımı
---


Headless(Başsız) bir tarayıcı, bir grafik kullanıcı arayüzü olmayan bir web tarayıcısıdır. Headless tarayıcılar, bir web sayfasının popüler web tarayıcılarına benzer bir ortamda  
otomatik olarak kontrol edilmesini sağlar, ancak bir komut satırı arayüzü veya ağ iletişimi kullanılarak yürütülür.

![enter image description here](https://lh3.googleusercontent.com/lHbD7krCGmfK5CAciodY3-4YoFQN5inDKjeiT6O-NSki3O2gvD_xXt8Uf2YZ-pckqiHw0C0H76ul)

Normal bir tarayıcı gibi, Headless bir tarayıcıda HTML ve CSS’yi anlar. AJAX istekleri gibi JavaScript’i çalıştırabilir.

Peki bu Headless dediğimiz tarayıcıya neden ihtiyacımız olabilir?

Görüntülenecek görüntü olmadığı için, testler başsız bir ortamda daha hızlıdır.

Genellikle CI(Continuous Integration) yani sürekli entegrasyon aracı  
kullanacağımız zaman kullanılır.

    

**Java Kulanımı**
```java

public class HeadlessChromeOrnek

{

@Test

public void testHeadlessSetup() throws IOException

{

System.setProperty("webdriver.chrome.driver","<chromedriver_path>");

ChromeOptions options = new ChromeOptions();

options.addArguments("headless");

option.addArguments("window-size=1024x768");

WebDriver driver = new ChromeDriver(options);

driver.get("http://seleniumhq.org");

driver.quit();

}

}

```