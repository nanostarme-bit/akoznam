# 🚀 Auto-Deployment Setup za nanoestate.me

## Šta radi?
Script **automatski proverava za promene svakih sat vremena** i:
- ✅ Automatski commituje promene
- ✅ Automatski push-uje na GitHub
- ✅ Loguje sve aktivnosti

---

## 📋 Instalacija (3 koraka)

### Korak 1: Script je već spreman ✓
```bash
/home/user/akoznam/auto-deploy.sh
```

### Korak 2: Dodajte u crontab (Linux/Mac)
```bash
crontab -e
```

Dodajte ovu liniju na kraj:
```
0 * * * * /home/user/akoznam/auto-deploy.sh >> /tmp/auto-deploy.log 2>&1
```

Ovo znači: **Pokreni svaki sat u :00 minutu**

### Korak 3: Proverite da radi
```bash
# Pogledajte log
tail -f /tmp/auto-deploy.log

# Ili pokrenite ručno
/home/user/akoznam/auto-deploy.sh
```

---

## 🎯 Što će biti automatski?

Kada se promeni **bilo koji fajl** (npr. korisnik klikne gde, ili server napravi backup):

1. **Script detektuje promenu** ✓
2. **Auto-commit sa timestamp-om** ✓
   ```
   Auto-deployment: Update from 2026-07-26 23:21:03
   ```
3. **Push na GitHub** ✓
4. **Log u /tmp/auto-deploy.log** ✓

---

## 📝 Log rezultati

Vidite u `/tmp/auto-deploy.log`:
```
[2026-07-26 23:21:03] Checking for changes...
📝 Changes detected:
 M src/routes/index.tsx
 M public/favicon.svg
✓ Committed successfully
✓ Pushed to origin/claude/website-qa-seo-optimization-xl7xz5 successfully!
🚀 Deployment complete!
```

---

## ⚙️ Konfiguracija

### Promenite interval (npr. svaki 30 minuta)
```bash
# U crontab:
*/30 * * * * /home/user/akoznam/auto-deploy.sh
```

### Ili svaki dan u 23:00 (11 PM)
```bash
# U crontab:
0 23 * * * /home/user/akoznam/auto-deploy.sh
```

### Ili samo radnim danima
```bash
# U crontab (pon-pet):
0 * * * 1-5 /home/user/akoznam/auto-deploy.sh
```

---

## 🔍 Troubleshooting

### Script ne radi?
```bash
# Proverite permisije
ls -lh /home/user/akoznam/auto-deploy.sh
# Trebalo bi: -rwxr-xr-x

# Ako nije executable:
chmod +x /home/user/akoznam/auto-deploy.sh
```

### Nije commituje?
```bash
# Proverite git status ručno
cd /home/user/akoznam
git status
git log --oneline -5
```

### Nije push-uje?
```bash
# Proverite konekciju
git push -u origin claude/website-qa-seo-optimization-xl7xz5
```

---

## 📊 Više opcija

### A) Svaki sat (preporučeno)
```
0 * * * *
```

### B) Svaka 2 sata
```
0 */2 * * *
```

### C) Svaka 4 sata
```
0 */4 * * *
```

### D) Svakih 30 minuta (agresivno)
```
*/30 * * * *
```

---

## ✅ Provera da radi

```bash
# Pokrenite script ručno
/home/user/akoznam/auto-deploy.sh

# Trebalo bi da vidite:
# ✓ Pushed to origin/claude/website-qa-seo-optimization-xl7xz5 successfully!
# 🚀 Deployment complete!
```

---

## 🛑 Zaustavite auto-deploy

Ako želite da zaustavite:
```bash
# Otvorite crontab
crontab -e

# Istrignite/komentirajte liniju:
# 0 * * * * /home/user/akoznam/auto-deploy.sh >> /tmp/auto-deploy.log 2>&1

# Sačuvajte i izađite
```

---

**Gotovo! 🎉 Sada ćete imati automatski deployment bez ručnog rada!**
