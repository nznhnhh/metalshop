# 🎨 Справочник CSS классов и структуры

## 📋 Содержание
1. [Основные компоненты](#основные-компоненты)
2. [Сетка и компоновка](#сетка-и-компоновка)
3. [Модальные окна](#модальные-окна)
4. [Кнопки](#кнопки)
5. [Карточки](#карточки)
6. [Формы](#формы)
7. [Таблицы](#таблицы)
8. [Утилиты](#утилиты)

---

## 🏗️ Основные компоненты

### Header
```html
<header class="header">
    <div class="header__container container">
        <div class="header__logo">
            <h1 class="logo__title">Магнитогорск Металл Импорт</h1>
            <p class="logo__subtitle">Прямые поставки</p>
        </div>
        <button class="header__call-btn">Заказать звонок</button>
    </div>
</header>
```

### Navigation
```html
<nav class="navbar">
    <div class="navbar__container container">
        <button class="navbar__toggle">☰</button>
        <ul class="navbar__menu">
            <li class="navbar__item">
                <a href="#" class="navbar__link">Ссылка</a>
            </li>
            <li class="navbar__item navbar__item--dropdown">
                <a href="#" class="navbar__link navbar__link--dropdown">
                    Меню <svg class="dropdown-icon">...</svg>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#" class="dropdown-menu__link">Подменю</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
```

### Footer
```html
<footer class="footer">
    <div class="container">
        <div class="footer__content">
            <section class="footer__section">
                <h4 class="footer__title">Заголовок</h4>
                <nav class="footer__nav">
                    <a href="#" class="footer__link">Ссылка</a>
                </nav>
            </section>
        </div>
        <div class="footer__bottom">
            <p class="footer__copyright">© 2024</p>
        </div>
    </div>
</footer>
```

---

## 🎯 Сетка и компоновка

### Container
```html
<div class="container">
    <!-- Максимальная ширина 1200px, отзывчивая -->
</div>
```

### Grid
```html
<div class="services__grid">
    <!-- Auto-fit, минимум 260px на элемент -->
    <article>...</article>
</div>

<!-- Другие сетки -->
<div class="advantages__grid">       <!-- 250px минимум -->
<div class="catalog-section__content">
<div class="products-grid">          <!-- 280px минимум -->
<div class="news__grid">             <!-- 280px минимум -->
<div class="about__stats">           <!-- 2x2 сетка -->
```

---

## 🔔 Модальные окна

### Стандартное модальное окно
```html
<div class="modal" id="callModal">
    <div class="modal__content">
        <button class="modal__close">&times;</button>
        <h2 class="modal__title">Заголовок</h2>
        <form class="modal__form">
            <!-- Содержимое -->
        </form>
        <p class="modal__note">Примечание</p>
    </div>
</div>
```

### Большое модальное окно
```html
<div class="modal" id="productModal">
    <div class="modal__content modal__content--large">
        <!-- max-width: 900px вместо 450px -->
    </div>
</div>
```

### Подробная информация о продукте
```html
<div class="product-details">
    <div class="product-details__header">
        <h2 class="product-details__title">Название</h2>
        <span class="product-details__price">Цена</span>
    </div>
    <div class="product-details__body">
        <div class="product-details__image">
            <div class="product-details__image-placeholder">📦</div>
        </div>
        <div class="product-details__info">
            <h3 class="product-details__section-title">Описание</h3>
            <p class="product-details__description"></p>
            <h3 class="product-details__section-title">Характеристики</h3>
            <ul class="product-details__specs">
                <li>Характеристика</li>
            </ul>
            <div class="product-details__actions">
                <button class="btn">Заказать</button>
                <button class="btn">Скачать</button>
            </div>
        </div>
    </div>
</div>
```

---

## 🔘 Кнопки

### Базовая кнопка
```html
<button class="btn">Нажми меня</button>
<a href="#" class="btn">Или я</a>
```

### Варианты кнопок
```html
<button class="btn btn--primary">Основная</button>
<button class="btn btn--secondary">Вторичная</button>
<button class="btn btn--small">Маленькая</button>
<button class="btn btn--large">Большая</button>
```

### Комбинации
```html
<button class="btn btn--primary btn--large">Большая основная</button>
<button class="btn btn--secondary btn--small">Маленькая вторичная</button>
```

---

## 🃏 Карточки

### Карточка преимущества
```html
<article class="advantage-card">
    <div class="advantage-card__icon">📦</div>
    <h3 class="advantage-card__title">Название</h3>
    <p class="advantage-card__text">Описание</p>
</article>
```

### Карточка услуги
```html
<article class="service-card">
    <div class="service-card__icon">🚚</div>
    <h3 class="service-card__title">Услуга</h3>
    <p class="service-card__description">Описание</p>
</article>
```

### Карточка новости
```html
<article class="news-card">
    <div class="news-card__date">
        <span class="news-card__day">25</span>
        <span class="news-card__month">Фев</span>
    </div>
    <div class="news-card__content">
        <h3 class="news-card__title">Заголовок</h3>
        <p class="news-card__text">Описание</p>
        <a href="#" class="news-card__link">Подробнее →</a>
    </div>
</article>
```

### Карточка товара
```html
<div class="product-item">
    <h4 class="product-item__name">Название товара</h4>
    <p class="product-item__description">Описание</p>
    <p class="product-item__price">Цена</p>
    <button class="btn">Подробнее</button>
</div>
```

### Карточка прайс-листа
```html
<div class="price-list-card">
    <div class="price-list-card__icon">📋</div>
    <h3 class="price-list-card__title">Прайс-лист</h3>
    <p class="price-list-card__desc">Описание</p>
    <button class="btn btn--secondary" data-file="metal">📥 Скачать</button>
</div>
```

---

## 📝 Формы

### Структура формы
```html
<form class="contact-form">
    <div class="form-group">
        <label for="name" class="form-group__label">Имя</label>
        <input type="text" id="name" class="form-group__input">
    </div>
    
    <div class="form-group">
        <label for="message" class="form-group__label">Сообщение</label>
        <textarea id="message" class="form-group__input form-group__textarea"></textarea>
    </div>
    
    <button type="submit" class="btn btn--primary">Отправить</button>
</form>
```

### Типы полей
```html
<!-- Текстовое поле -->
<input type="text" class="form-group__input">

<!-- Email -->
<input type="email" class="form-group__input">

<!-- Телефон -->
<input type="tel" class="form-group__input">

<!-- Select -->
<select class="form-group__input">
    <option>Вариант 1</option>
    <option>Вариант 2</option>
</select>

<!-- Текстовая область -->
<textarea class="form-group__input form-group__textarea"></textarea>
```

---

## 📊 Таблицы

### Базовая таблица
```html
<div class="characteristics-table">
    <table>
        <thead>
            <tr>
                <th>Колонка 1</th>
                <th>Колонка 2</th>
                <th>Цена</th>
                <th>Действие</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Данные 1</td>
                <td>Данные 2</td>
                <td>100 тг</td>
                <td><button class="btn btn--small">В корзину</button></td>
            </tr>
        </tbody>
    </table>
</div>
```

---

## 🎨 Секции

### Баннер
```html
<section class="banner">
    <div class="banner__content">
        <h2 class="banner__title">Заголовок</h2>
        <p class="banner__subtitle">Подзаголовок</p>
        <button class="banner__btn">Действие</button>
    </div>
    <div class="banner__background"></div>
</section>
```

### Секция "О нас"
```html
<section class="about">
    <div class="container">
        <h2 class="section-title">О компании</h2>
        <div class="about__content">
            <div class="about__text">
                <p>Текст</p>
            </div>
            <div class="about__stats">
                <div class="stat">
                    <h3 class="stat__number">10+</h3>
                    <p class="stat__label">лет опыта</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Секция каталога
```html
<section class="catalog">
    <div class="container">
        <h2 class="section-title">Каталог</h2>
        <article class="catalog-section">
            <h3 class="catalog-section__title">Категория</h3>
            <div class="catalog-section__content">
                <!-- Товары -->
            </div>
        </article>
    </div>
</section>
```

### Слайдер
```html
<section class="products-slider">
    <div class="container">
        <h2 class="section-title">Слайдер</h2>
        <div class="slider">
            <div class="slider__item">
                <img src="" class="slider__image">
                <h3 class="slider__title">Название</h3>
                <p class="slider__price">Цена</p>
            </div>
        </div>
        <div class="slider__controls">
            <button class="slider__btn slider__btn--prev">← Назад</button>
            <button class="slider__btn slider__btn--next">Вперед →</button>
        </div>
    </div>
</section>
```

### Прайс-листы
```html
<section class="price-lists">
    <div class="container">
        <h2 class="section-title">Скачать прайс-листы</h2>
        <p class="price-lists__subtitle">Выберите категорию</p>
        <div class="price-lists__grid">
            <div class="price-list-card">
                <!-- Карточка -->
            </div>
        </div>
    </div>
</section>
```

### Контакты
```html
<section class="contacts">
    <div class="container">
        <h2 class="section-title">Контакты</h2>
        <div class="contacts__content">
            <div class="contacts__info">
                <article class="contact-item">
                    <h3 class="contact-item__title">📍 Адрес</h3>
                    <p class="contact-item__text">Адрес...</p>
                </article>
            </div>
            <div class="contacts__form-section">
                <h3 class="contacts__form-title">Форма</h3>
                <form class="contact-form">
                    <!-- Форма -->
                </form>
            </div>
        </div>
        <div class="contacts__map">
            <h3 class="contacts__map-title">Карта</h3>
            <div class="map-container">
                <!-- Google Map -->
            </div>
        </div>
    </div>
</section>
```

---

## 🛠️ Утилиты

### Section Title (заголовок секции)
```html
<h2 class="section-title">Заголовок</h2>
<!-- Автоматически добавляется оранжевая линия снизу -->
```

### Subsection Title
```html
<h4 class="subsection__title">Подзаголовок</h4>
```

### Статистика
```html
<div class="stat">
    <h3 class="stat__number">500+</h3>
    <p class="stat__label">клиентов</p>
</div>
```

### Социальные ссылки
```html
<div class="social-links">
    <a href="#" class="social-link" aria-label="Facebook">f</a>
    <a href="#" class="social-link" aria-label="Instagram">📷</a>
</div>
```

---

## 🔄 Структура BEM

Все классы следуют методологии BEM (Block Element Modifier):

```
.block                  /* Основной блок */
.block__element         /* Элемент блока */
.block__element--mod    /* Модификатор элемента */
.block--mod             /* Модификатор блока */
```

### Примеры:
```css
.product-item              /* Блок */
.product-item__name        /* Элемент */
.product-item__name--active /* Модификатор */
.product-item--featured    /* Модификатор блока */
```

---

## 📱 Адаптивные классы

Все компоненты работают на:
- 📱 Мобильные устройства (320px+)
- 📱 Планшеты (768px+)
- 🖥️ Десктопы (1024px+)

Медиа-запросы находятся в конце `style.css`

---

## ✨ Темные и светлые режимы

### Основные цветовые переменные:
```css
--color-primary: #1a5490       /* Основной синий */
--color-primary-dark: #0d2e5c  /* Темный синий */
--color-primary-light: #2a7bb3 /* Светлый синий */
--color-secondary: #f59e0b     /* Оранжевый */
--color-text: #333333          /* Текст */
--color-bg: #ffffff            /* Фон */
--color-bg-light: #f8f9fa      /* Светлый фон */
```

---

## 🎭 Примеры использования

### Полная страница товара
```html
<article class="catalog-section" id="catalog-metal">
    <h3 class="catalog-section__title">Металл</h3>
    <div class="catalog-section__content">
        <div class="products-grid">
            <div class="product-item">
                <h4 class="product-item__name">Арматура</h4>
                <p class="product-item__description">Описание</p>
                <p class="product-item__price">от 250 тг/кг</p>
                <button class="btn">Подробнее</button>
            </div>
        </div>
    </div>
</article>
```

### Контактная информация
```html
<article class="contact-item">
    <h3 class="contact-item__title">📞 Телефон</h3>
    <p class="contact-item__text">
        <a href="tel:+77012345678">+7 (701) 234-56-78</a>
    </p>
</article>
```

---

## 🚀 Готово к использованию!

Используйте этот справочник для:
- Быстрого поиска нужного класса
- Понимания структуры компонентов
- Создания новых элементов по существующим паттернам
- Документирования кода

Все классы логично организованы и легко расширяются! 🎉
