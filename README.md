# VortexTM Ticket Bot

VortexTM, Discord sunucuları için geliştirilmiş, 7/24 çalışan bir destek (ticket) botudur. Kullanıcılar ticket açarak yardım talebinde bulunabilir, yetkililer bu ticket'lara cevap verebilir ve sistem üzerinden tüm ticket geçmişi otomatik olarak loglanır.

---

## 🚀 Özellikler

- 🎫 **Otomatik Ticket Sistemi:** Kullanıcılar tek tıklamayla ticket açabilir ve kapatabilir.
- 📁 **Ticket Logları:** Ticket geçmişi `.txt` dosyasına kaydedilir ve hem kullanıcıya DM ile hem de webhook aracılığıyla admin'e gönderilir.
- 📡 **Webhook Bildirimleri:** Ticket kapatıldığında detaylı bir embed mesajı, belirlediğiniz webhook'a otomatik olarak gönderilir.
- 📂 **Kategori Seçim Menüsü:** Kullanıcılar ticket açarken destek konusu seçebilir (örneğin: Teknik, Satın Alma, Şikayet).
- 🔊 **Ses Kanalına Bağlanma:** Bot, belirlediğiniz ses kanalına otomatik olarak bağlanır.
- 👀 **Bot Durum Mesajları:** Döngüsel olarak güncellenen özel bot durumları (örneğin: "Yardım için !yardım yaz").

---

## ⚙️ Kurulum

1. Gerekli bağımlılıkları yükleyin:
   ```
   npm i
   ```
2. Slash komutlarını sunucuya yükleyin:
   ```
   node utils/deploy-commands.js
   ```
3. Botu başlatın:
   ```
   node bot.js
   ```
---

### 📄 Ortam Değişkenleri (.env+config.js)

```
BOT_TOKEN=Discord bot tokeni
MONGO_URI=MongoDB bağlantı URI
WEBHOOK_URL=Logları göndermek için webhook
VOICE_CHANNEL_ID=Botun bağlanacağı ses kanalının ID'si
GUILD_ID=Botun komutlarını deploy edeceğiniz sunucu ID'si
destekKategoriId=Destek kategorisi ID'si
destekYetkiliRolId=Destek yetkili rolü ID'si
```
> 🔐 Bu bilgileri gizli tutmayı unutma.  dosyasını kimseyle paylaşma!

📞 Yardım & Destek
Bir sorunla karşılaştığında, katkı sağlamak istediğinde ya da geri bildirim vermek istersen:
Bizimle iletişime geç! 💬

🧠 Lisans
Bu proje MIT Lisansı ile yayınlanmıştır.
İstediğiniz gibi kullanabilir ve geliştirebilirsiniz. 🙌
