// ============================
// ИНИЦИАЛИЗАЦИЯ И DOM
// ============================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initModal();
    initProductModal();
    initForm();
    initSlider();
    initScrollEffects();
    initProductButtons();
    initPriceListButtons();
});

// ============================
// ДАННЫЕ О ПРОДУКТАХ
// ============================

const productDatabase = {
    'sandwich-panels': {
        title: 'Сэндвич-панели PIR',
        price: 'от 15 000 тг/м²',
        category: 'Сэндвич-панели',
        description: 'Высокотехнологичные сэндвич-панели с полиуретановым изоляционным слоем (PIR). Обладают отличными теплоизоляционными свойствами и прочностью. Идеальны для возведения стеновых конструкций и кровли промышленных зданий.',
        specs: [
            'Толщина: 50-150 мм',
            'Теплопроводность: 0.021 Вт/м·К',
            'Класс огнестойкости: B-s2, d0',
            'Срок службы: 40+ лет',
            'Гарантия: 10 лет',
            'Доставка: по всему Казахстану'
        ],
        standards: 'ГОСТ 23499-2016, ISO 13165-2, EN 13165, соответствуют требованиям МЧС и Госстроя РК'
    },
    'metal': {
        title: 'Прокат металла',
        price: 'от 250 тг/кг',
        category: 'Металлопрокат',
        description: 'Полный ассортимент металлопроката высокого качества. Включает арматуру, катанку, проволоку, квадрат, полосу, швеллер, балки и уголки. Материал изготовлен в соответствии с государственными стандартами.',
        specs: [
            'Арматура: класс A400, A500',
            'Катанка: диаметр 5.5-18 мм',
            'Швеллер: номер 10-40',
            'Балки: двутавровые от 10 до 60',
            'Уголки: 25х25 до 200х200',
            'Гарантия качества: 100%',
            'Сертификаты: ГОСТ 5781-82, ГОСТ 2590-88'
        ],
        standards: 'Соответствуют ГОСТ и международным стандартам ISO, сертифицированы на заводах-производителях'
    },
    'pipes': {
        title: 'Трубы стальные',
        price: 'от 300 тг/кг',
        category: 'Трубная продукция',
        description: 'Трубы стальные различных типов и диаметров для водоснабжения, газоснабжения, конструкционного назначения. Высокая прочность и надежность обеспечивают долговечность эксплуатации.',
        specs: [
            'Водогазопроводные: Ду15-Ду50',
            'Электросварные: диаметр 10-530 мм',
            'Бесшовные горячекатаные: 10-127 мм',
            'Профильные квадратные: 10х10-500х500',
            'Оцинкованные с защитой от коррозии',
            'Проверка давлением: 100%'
        ],
        standards: 'ГОСТ 3262-75 (ВГП), ГОСТ 10704-91 (ЭСП), ГОСТ 8732-78 (бесшовные)'
    },
    'fittings': {
        title: 'Фитинги и комплектующие',
        price: 'по запросу',
        category: 'Фитинги',
        description: 'Полный спектр запорно-регулирующей арматуры и фитингов для промышленного и бытового использования. Высокое качество и надежность гарантируют длительный срок службы.',
        specs: [
            'Задвижки плоскошпиндельные: Ду15-Ду300',
            'Вентили запорно-регулирующие: Ду10-Ду50',
            'Клапаны обратные, предохранительные',
            'Затворы шаровые и дисковые',
            'Давление: до 160 атм',
            'Температура: от -20°C до +100°C'
        ],
        standards: 'ГОСТ 5698-94, ГОСТ 12815-80, ГОСТ 12816-80, ISO 1086'
    }
};

// ============================
// НАВИГАЦИЯ И МЕНЮ
// ============================ 

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.navbar__link');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('.navbar') && 
            !e.target.closest('.navbar__toggle')) {
            navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.classList.remove('active');
            }
        }
    });
}

// ============================
// МОДАЛЬНОЕ ОКНО ДЛЯ ЗВОНКА
// ============================ 

function initModal() {
    const callBtn = document.getElementById('callBtn');
    const callModal = document.getElementById('callModal');
    const modalClose = document.getElementById('modalClose');

    if (callBtn) {
        callBtn.addEventListener('click', function() {
            callModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            callModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (callModal) {
        callModal.addEventListener('click', function(e) {
            if (e.target === callModal) {
                callModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && callModal.classList.contains('active')) {
            callModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================
// МОДАЛЬНОЕ ОКНО ПОДРОБНОЙ ИНФОРМАЦИИ О ПРОДУКТЕ
// ============================ 

function initProductModal() {
    const productModal = document.getElementById('productModal');
    const productModalClose = document.getElementById('productModalClose');

    if (productModalClose) {
        productModalClose.addEventListener('click', function() {
            productModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === productModal) {
                productModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            productModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function showProductDetails(productId) {
    const product = productDatabase[productId];
    if (!product) return;

    const productModal = document.getElementById('productModal');
    
    // Заполнение данных
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productStandards').textContent = product.standards;
    
    // Заполнение характеристик
    const specsList = document.getElementById('productSpecs');
    specsList.innerHTML = '';
    product.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });

    // Обработчики кнопок
    document.getElementById('productOrderBtn').onclick = function() {
        showNotification(`Спасибо за интерес к ${product.title}. Свяжемся с вами вскоре!`, 'success');
        productModal.classList.remove('active');
        document.body.style.overflow = '';
        document.getElementById('callModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    document.getElementById('productDownloadBtn').onclick = function() {
        downloadSpecification(productId, product.title);
    };

    // Открытие модального окна
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function downloadSpecification(productId, productName) {
    showNotification(`Скачивание спецификации для "${productName}"...`, 'info');
    // В реальном приложении здесь будет скачивание файла
    setTimeout(() => {
        console.log(`Файл спецификации для ${productId} готов к скачиванию`);
    }, 500);
}

// ============================
// ФОРМЫ
// ============================

function initForm() {
    const contactForm = document.getElementById('contactForm');
    const callForm = document.getElementById('callForm');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    if (callForm) {
        callForm.addEventListener('submit', handleCallFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Сбор данных формы
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Валидация
    if (!validateForm(formData)) {
        showNotification('Пожалуйста, заполните все поля корректно', 'error');
        return;
    }

    // Отправка (имитация)
    console.log('Форма контакта отправлена:', formData);
    showNotification('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.', 'success');

    // Очистка формы
    document.getElementById('contactForm').reset();
}

function handleCallFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('modalName').value,
        phone: document.getElementById('modalPhone').value
    };

    if (!validatePhone(formData.phone)) {
        showNotification('Пожалуйста, введите корректный номер телефона', 'error');
        return;
    }

    console.log('Заказ звонка:', formData);
    showNotification('Спасибо! Мы позвоним вам в течение 15 минут.', 'success');

    // Закрытие модального окна
    document.getElementById('callModal').classList.remove('active');
    document.body.style.overflow = '';

    // Очистка формы
    document.getElementById('callForm').reset();
}

function validateForm(data) {
    if (!data.name || !data.phone || !data.email || !data.subject || !data.message) {
        return false;
    }

    if (!validatePhone(data.phone)) {
        return false;
    }

    if (!validateEmail(data.email)) {
        return false;
    }

    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone);
}

// ============================
// КНОПКИ ПРОДУКТОВ И ПРАЙС-ЛИСТЫ
// ============================

function initProductButtons() {
    // Добавляем обработчики для всех кнопок "Подробнее"
    const detailButtons = document.querySelectorAll('.product-item .btn');
    
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productItem = btn.closest('.product-item');
            if (productItem) {
                let productId = 'metal'; // по умолчанию
                
                if (productItem.closest('#catalog-panels')) {
                    productId = 'sandwich-panels';
                } else if (productItem.closest('#catalog-metal')) {
                    productId = 'metal';
                } else if (productItem.closest('#catalog-pipes')) {
                    productId = 'pipes';
                } else if (productItem.closest('#catalog-fittings')) {
                    productId = 'fittings';
                }
                
                showProductDetails(productId);
            }
        });
    });
}

function initPriceListButtons() {
    const priceListButtons = document.querySelectorAll('.price-list-card .btn');
    
    priceListButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const fileId = btn.getAttribute('data-file');
            downloadPriceList(fileId);
        });
    });
}

function downloadPriceList(fileId) {
    // Имеющиеся в проекте PDF файлы
    const availableFiles = {
        'sandwich-panels': 'Прайс СЭНДВИЧ ПАНЕЛИ.pdf',
        'metal': 'Прайс Металл от 21.04.2025г..pdf',
        'pipes': 'Прайс-лист Трубы 11.01. 2024 г..pdf',
        'fittings': 'Прайс-лист. Фитинги.pdf',
        'full-catalog': 'Прайс СЭНДВИЧ ПАНЕЛИ.pdf' // можно заменить на общий каталог
    };
    
    const fileName = availableFiles[fileId];
    
    if (!fileName) {
        showNotification('❌ Ошибка: файл не найден в системе', 'error');
        return;
    }
    
    showNotification(`📥 Начинается скачивание: ${fileName}`, 'info');
    
    // Создаем ссылку и инициируем скачивание
    const link = document.createElement('a');
    link.href = fileName;  // Прямой путь к файлу в папке проекта
    link.download = fileName;  // Имя файла при скачивании
    link.style.display = 'none';
    document.body.appendChild(link);
    
    setTimeout(() => {
        link.click();
        document.body.removeChild(link);
        setTimeout(() => {
            showNotification(`✅ ${fileName} скачан успешно!`, 'success');
        }, 500);
    }, 300);
}

// ============================
// УВЕДОМЛЕНИЯ
// ============================

function showNotification(message, type = 'info') {
    // Создание элемента уведомления
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 20px;
        border-radius: 4px;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Автоматическое удаление
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============================
// СЛАЙДЕР
// ============================

let sliderIndex = 0;

function initSlider() {
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');

    if (sliderPrev) {
        sliderPrev.addEventListener('click', slideBack);
    }

    if (sliderNext) {
        sliderNext.addEventListener('click', slideForward);
    }

    // Поддержка клавиатуры
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            slideBack();
        } else if (e.key === 'ArrowRight') {
            slideForward();
        }
    });
}

function slideForward() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const items = slider.querySelectorAll('.slider__item');
    const itemWidth = items[0].offsetWidth + 32; // с gap

    sliderIndex = Math.min(sliderIndex + 1, items.length - 1);
    updateSliderPosition(slider, itemWidth);
}

function slideBack() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    const items = slider.querySelectorAll('.slider__item');
    const itemWidth = items[0].offsetWidth + 32;

    sliderIndex = Math.max(sliderIndex - 1, 0);
    updateSliderPosition(slider, itemWidth);
}

function updateSliderPosition(slider, itemWidth) {
    slider.style.transform = `translateX(-${sliderIndex * itemWidth}px)`;
    slider.style.transition = 'transform 0.3s ease';
}

// ============================
// ЭФФЕКТЫ ПРОКРУТКИ
// ============================

function initScrollEffects() {
    // Плавная прокрутка
    setupSmoothScroll();

    // Анимация при скролле
    setupScrollAnimation();

    // Активная ссылка в навигации
    setupActiveNavLink();
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдение за элементами
    document.querySelectorAll(
        '.advantage-card, .service-card, .product-item, .news-card, .stat'
    ).forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
}

function setupActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================
// УТИЛИТЫ
// ============================

// Форматирование номера телефона при вводе
function setupPhoneInput() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.slice(0, 11);
            }

            e.target.value = formatPhone(value);
        });
    });
}

function formatPhone(value) {
    if (value.length === 0) return '';
    if (value.length <= 1) return '+' + value;
    if (value.length <= 3) return '+' + value.slice(0, 1) + ' (' + value.slice(1);
    if (value.length <= 6) return '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4);
    if (value.length <= 9) return '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7);
    return '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7, 9) + '-' + value.slice(9);
}

setupPhoneInput();

// ============================
// АНАЛИТИКА И ОТЛАДКА
// ============================

// Логирование функциональности
console.log('🚀 Сайт "Магнитогорск Металл Импорт" загружен успешно!');
console.log('📦 Основные модули инициализированы:');
console.log('  ✓ Навигация и меню');
console.log('  ✓ Модальные окна');
console.log('  ✓ Формы и валидация');
console.log('  ✓ Слайдер продукции');
console.log('  ✓ Эффекты прокрутки');
