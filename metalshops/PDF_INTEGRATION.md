# 📁 Интеграция реального скачивания PDF

## 📥 Как настроить реальное скачивание прайс-листов

### Вариант 1: Скачивание готовых PDF файлов с сервера

**Шаг 1: Создайте папку `files` в папке проекта**
```
metalshops/
├── index.html
├── style.css
├── script.js
├── files/                           ← Новая папка
│   ├── Прайс-лист_Сэндвич-панели.pdf
│   ├── Прайс-лист_Прокат-металла.pdf
│   ├── Прайс-лист_Трубы-стальные.pdf
│   ├── Прайс-лист_Фитинги.pdf
│   └── Полный-каталог.pdf
```

**Шаг 2: Обновите функцию downloadPriceList в script.js**

Найдите эту функцию:
```javascript
function downloadPriceList(fileId) {
    const fileNames = {
        'sandwich-panels': 'Прайс-лист_Сэндвич-панели.pdf',
        'metal': 'Прайс-лист_Прокат-металла.pdf',
        'pipes': 'Прайс-лист_Трубы-стальные.pdf',
        'fittings': 'Прайс-лист_Фитинги.pdf',
        'full-catalog': 'Полный-каталог_Магнитогорск-Металл-Импорт.pdf'
    };
    
    const fileName = fileNames[fileId] || 'price-list.pdf';
    
    showNotification(`📥 Начинается скачивание файла: ${fileName}`, 'info');
    
    setTimeout(() => {
        console.log(`Файл ${fileName} готов к скачиванию`);
    }, 500);
}
```

**Замените на это:**
```javascript
function downloadPriceList(fileId) {
    const filePaths = {
        'sandwich-panels': 'files/Прайс-лист_Сэндвич-панели.pdf',
        'metal': 'files/Прайс-лист_Прокат-металла.pdf',
        'pipes': 'files/Прайс-лист_Трубы-стальные.pdf',
        'fittings': 'files/Прайс-лист_Фитинги.pdf',
        'full-catalog': 'files/Полный-каталог_Магнитогорск-Металл-Импорт.pdf'
    };
    
    const fileNames = {
        'sandwich-panels': 'Прайс-лист_Сэндвич-панели.pdf',
        'metal': 'Прайс-лист_Прокат-металла.pdf',
        'pipes': 'Прайс-лист_Трубы-стальные.pdf',
        'fittings': 'Прайс-лист_Фитинги.pdf',
        'full-catalog': 'Полный-каталог_Магнитогорск-Металл-Импорт.pdf'
    };
    
    const filePath = filePaths[fileId];
    const fileName = fileNames[fileId] || 'price-list.pdf';
    
    if (!filePath) {
        showNotification('Ошибка: файл не найден', 'error');
        return;
    }
    
    showNotification(`📥 Начинается скачивание: ${fileName}`, 'info');
    
    // Создаем скрытую ссылку и инициируем скачивание
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
```

---

### Вариант 2: Скачивание через прямые ссылки

Если ваши PDF находятся в облаке (Google Drive, Dropbox и т.д.):

```javascript
function downloadPriceList(fileId) {
    const fileLinks = {
        'sandwich-panels': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
        'metal': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
        'pipes': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
        'fittings': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID',
        'full-catalog': 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'
    };
    
    const fileNames = {
        'sandwich-panels': 'Прайс-лист_Сэндвич-панели.pdf',
        'metal': 'Прайс-лист_Прокат-металла.pdf',
        'pipes': 'Прайс-лист_Трубы-стальные.pdf',
        'fittings': 'Прайс-лист_Фитинги.pdf',
        'full-catalog': 'Полный-каталог.pdf'
    };
    
    const fileLink = fileLinks[fileId];
    const fileName = fileNames[fileId] || 'price-list.pdf';
    
    if (!fileLink) {
        showNotification('Ошибка: файл не найден', 'error');
        return;
    }
    
    showNotification(`📥 Начинается скачивание: ${fileName}`, 'info');
    
    // Используем fetch для скачивания
    fetch(fileLink)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            window.URL.revokeObjectURL(link.href);
            showNotification(`✅ ${fileName} успешно скачан!`, 'success');
        })
        .catch(error => {
            console.error('Ошибка скачивания:', error);
            showNotification('Ошибка при скачивании файла', 'error');
        });
}
```

---

### Вариант 3: Отправка на email перед скачиванием

Если нужно собрать данные пользователя перед скачиванием:

```javascript
function downloadPriceList(fileId) {
    // Показываем форму для ввода email
    const email = prompt('Введите ваш email для получения прайс-листа:');
    
    if (!email || !validateEmail(email)) {
        showNotification('Пожалуйста, введите корректный email', 'error');
        return;
    }
    
    const fileNames = {
        'sandwich-panels': 'Прайс-лист_Сэндвич-панели.pdf',
        'metal': 'Прайс-лист_Прокат-металла.pdf',
        'pipes': 'Прайс-лист_Трубы-стальные.pdf',
        'fittings': 'Прайс-лист_Фитинги.pdf',
        'full-catalog': 'Полный-каталог.pdf'
    };
    
    const fileName = fileNames[fileId];
    
    // Отправляем данные на сервер
    fetch('/api/send-pricelist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            fileId: fileId,
            fileName: fileName
        })
    })
    .then(response => response.json())
    .then(data => {
        showNotification(`✅ Прайс-лист отправлен на ${email}`, 'success');
        // Опционально: скачиваем файл локально
        downloadFile(`files/${fileId}.pdf`, fileName);
    })
    .catch(error => {
        console.error('Ошибка:', error);
        showNotification('Ошибка при отправке файла', 'error');
    });
}

function downloadFile(url, fileName) {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
```

---

## 🖥️ Интеграция с бэкенд API

### Python (Flask)
```python
from flask import Flask, send_file, request, jsonify
import os

app = Flask(__name__)

@app.route('/api/send-pricelist', methods=['POST'])
def send_pricelist():
    data = request.json
    email = data.get('email')
    file_id = data.get('fileId')
    
    # Отправляем email
    # send_email(email, f"Ваш прайс-лист: {data['fileName']}")
    
    return jsonify({
        'success': True,
        'message': 'Файл отправлен'
    })

@app.route('/api/download/<file_id>')
def download_file(file_id):
    file_path = f'files/{file_id}.pdf'
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    return jsonify({'error': 'Файл не найден'}), 404
```

### Node.js (Express)
```javascript
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.post('/api/send-pricelist', async (req, res) => {
    const { email, fileId, fileName } = req.body;
    
    try {
        // Отправляем email
        // await sendEmail(email, fileName);
        
        res.json({
            success: true,
            message: 'Файл отправлен'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.get('/api/download/:fileId', (req, res) => {
    const filePath = path.join(__dirname, 'files', `${req.params.fileId}.pdf`);
    res.download(filePath);
});
```

### PHP
```php
<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $fileId = $data['fileId'];
    $fileName = $data['fileName'];
    
    // Отправляем email
    // mail($email, "Ваш прайс-лист", "Прикреплён файл");
    
    echo json_encode([
        'success' => true,
        'message' => 'Файл отправлен'
    ]);
}
?>
```

---

## 📧 Отправка на email

### Использование Nodemailer (Node.js)
```javascript
const nodemailer = require('nodemailer');

async function sendPriceList(email, fileName, filePath) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password'
        }
    });
    
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: `Прайс-лист: ${fileName}`,
        text: 'Вот ваш запрошенный прайс-лист от Магнитогорск Металл Импорт',
        attachments: [
            {
                filename: fileName,
                path: filePath
            }
        ]
    };
    
    return transporter.sendMail(mailOptions);
}
```

---

## 🔐 Безопасность при скачивании

### Защита от неавторизованного доступа
```javascript
// Добавьте token в заголовки запроса
fetch('/api/download/metal', {
    headers: {
        'Authorization': `Bearer ${getUserToken()}`,
        'Content-Type': 'application/json'
    }
})
```

### На сервере (проверка доступа)
```javascript
app.get('/api/download/:fileId', authenticateUser, (req, res) => {
    // Только авторизованные пользователи могут скачивать
    const filePath = path.join(__dirname, 'files', `${req.params.fileId}.pdf`);
    res.download(filePath);
});
```

---

## 📊 Логирование скачиваний

```javascript
function logDownload(fileId, email) {
    fetch('/api/log-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fileId: fileId,
            email: email,
            timestamp: new Date(),
            userAgent: navigator.userAgent
        })
    });
}

// В функции downloadPriceList добавьте:
logDownload(fileId, email);
```

---

## 🧪 Тестирование

### Проверить, работает ли скачивание:
```javascript
// В консоли браузера
downloadPriceList('metal');
```

### Отладка ошибок:
```javascript
function downloadPriceList(fileId) {
    console.log('Попытка скачать файл:', fileId);
    
    try {
        // Ваш код скачивания
        console.log('✅ Скачивание инициировано');
    } catch (error) {
        console.error('❌ Ошибка:', error);
    }
}
```

---

## ✅ Контрольный список

- [ ] PDF файлы созданы и размещены в папке `files/`
- [ ] Пути в коде соответствуют расположению файлов
- [ ] Кнопки скачивания работают
- [ ] Файлы скачиваются с правильными именами
- [ ] Формат PDF корректен
- [ ] На мобильных устройствах скачивание работает
- [ ] Нет ошибок в консоли браузера
- [ ] Файлы открываются после скачивания

---

## 🚀 Готово!

Выберите один из вариантов выше и интегрируйте в ваш проект. Если остались вопросы, обратитесь к руководству GUIDE.md или консоли браузера для отладки! 🎉
