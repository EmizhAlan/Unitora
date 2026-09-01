export type ConverterType =
  | "factor"
  | "celsius-to-fahrenheit"
  | "fahrenheit-to-celsius"
  | "celsius-to-kelvin"
  | "kelvin-to-celsius"
  | "fahrenheit-to-kelvin"
  | "kelvin-to-fahrenheit";

export type ConverterCategory =
  | "Длина"
  | "Вес"
  | "Температура"
  | "Объём"
  | "Время"
  | "Скорость"
  | "Площадь"
  | "Данные";

export type ConverterConfig = {
  slug: string;
  title: string;
  description: string;
  category: ConverterCategory;
  from: string;
  to: string;
  fromShort: string;
  toShort: string;
  formula: string;
  type: ConverterType;
  factor?: number;
};

export const converters: ConverterConfig[] = [
  // ==========================================
  // ДЛИНА
  // ==========================================

  {
    slug: "km-to-miles",
    title: "Километры в мили",
    description:
      "Переведите километры в мили онлайн. Бесплатный и быстрый конвертер расстояния.",
    category: "Длина",
    from: "Километры",
    to: "Мили",
    fromShort: "км",
    toShort: "миль",
    factor: 0.621371,
    formula: "1 км = 0.621371 мили",
    type: "factor",
  },

  {
    slug: "miles-to-km",
    title: "Мили в километры",
    description:
      "Переведите мили в километры онлайн.",
    category: "Длина",
    from: "Мили",
    to: "Километры",
    fromShort: "миль",
    toShort: "км",
    factor: 1.609344,
    formula: "1 миля = 1.609344 км",
    type: "factor",
  },

  {
    slug: "meters-to-feet",
    title: "Метры в футы",
    description:
      "Переведите метры в футы онлайн.",
    category: "Длина",
    from: "Метры",
    to: "Футы",
    fromShort: "м",
    toShort: "футов",
    factor: 3.280839895,
    formula: "1 метр = 3.280839895 футов",
    type: "factor",
  },

  {
    slug: "feet-to-meters",
    title: "Футы в метры",
    description:
      "Переведите футы в метры онлайн.",
    category: "Длина",
    from: "Футы",
    to: "Метры",
    fromShort: "футов",
    toShort: "м",
    factor: 0.3048,
    formula: "1 фут = 0.3048 метра",
    type: "factor",
  },

  {
    slug: "cm-to-inches",
    title: "Сантиметры в дюймы",
    description:
      "Переведите сантиметры в дюймы онлайн.",
    category: "Длина",
    from: "Сантиметры",
    to: "Дюймы",
    fromShort: "см",
    toShort: "дюймов",
    factor: 0.3937007874,
    formula: "1 см = 0.3937007874 дюйма",
    type: "factor",
  },

  {
    slug: "inches-to-cm",
    title: "Дюймы в сантиметры",
    description:
      "Переведите дюймы в сантиметры онлайн.",
    category: "Длина",
    from: "Дюймы",
    to: "Сантиметры",
    fromShort: "дюймов",
    toShort: "см",
    factor: 2.54,
    formula: "1 дюйм = 2.54 см",
    type: "factor",
  },

  {
    slug: "km-to-meters",
    title: "Километры в метры",
    description:
      "Переведите километры в метры онлайн.",
    category: "Длина",
    from: "Километры",
    to: "Метры",
    fromShort: "км",
    toShort: "м",
    factor: 1000,
    formula: "1 км = 1000 метров",
    type: "factor",
  },

  {
    slug: "meters-to-km",
    title: "Метры в километры",
    description:
      "Переведите метры в километры онлайн.",
    category: "Длина",
    from: "Метры",
    to: "Километры",
    fromShort: "м",
    toShort: "км",
    factor: 0.001,
    formula: "1 метр = 0.001 км",
    type: "factor",
  },

  {
    slug: "meters-to-yards",
    title: "Метры в ярды",
    description:
      "Переведите метры в ярды онлайн.",
    category: "Длина",
    from: "Метры",
    to: "Ярды",
    fromShort: "м",
    toShort: "ярдов",
    factor: 1.0936132983,
    formula: "1 метр = 1.0936132983 ярда",
    type: "factor",
  },

  {
    slug: "yards-to-meters",
    title: "Ярды в метры",
    description:
      "Переведите ярды в метры онлайн.",
    category: "Длина",
    from: "Ярды",
    to: "Метры",
    fromShort: "ярдов",
    toShort: "м",
    factor: 0.9144,
    formula: "1 ярд = 0.9144 метра",
    type: "factor",
  },

  // ==========================================
  // ВЕС
  // ==========================================

  {
    slug: "kg-to-lbs",
    title: "Килограммы в фунты",
    description:
      "Переведите килограммы в фунты онлайн.",
    category: "Вес",
    from: "Килограммы",
    to: "Фунты",
    fromShort: "кг",
    toShort: "фунтов",
    factor: 2.2046226218,
    formula: "1 кг = 2.2046226218 фунта",
    type: "factor",
  },

  {
    slug: "lbs-to-kg",
    title: "Фунты в килограммы",
    description:
      "Переведите фунты в килограммы онлайн.",
    category: "Вес",
    from: "Фунты",
    to: "Килограммы",
    fromShort: "фунтов",
    toShort: "кг",
    factor: 0.45359237,
    formula: "1 фунт = 0.45359237 кг",
    type: "factor",
  },

  {
    slug: "grams-to-ounces",
    title: "Граммы в унции",
    description:
      "Переведите граммы в унции онлайн.",
    category: "Вес",
    from: "Граммы",
    to: "Унции",
    fromShort: "г",
    toShort: "унций",
    factor: 0.0352739619,
    formula: "1 г = 0.0352739619 унции",
    type: "factor",
  },

  {
    slug: "ounces-to-grams",
    title: "Унции в граммы",
    description:
      "Переведите унции в граммы онлайн.",
    category: "Вес",
    from: "Унции",
    to: "Граммы",
    fromShort: "унций",
    toShort: "г",
    factor: 28.349523125,
    formula: "1 унция = 28.349523125 г",
    type: "factor",
  },

  {
    slug: "kg-to-grams",
    title: "Килограммы в граммы",
    description:
      "Переведите килограммы в граммы онлайн.",
    category: "Вес",
    from: "Килограммы",
    to: "Граммы",
    fromShort: "кг",
    toShort: "г",
    factor: 1000,
    formula: "1 кг = 1000 г",
    type: "factor",
  },

  {
    slug: "grams-to-kg",
    title: "Граммы в килограммы",
    description:
      "Переведите граммы в килограммы онлайн.",
    category: "Вес",
    from: "Граммы",
    to: "Килограммы",
    fromShort: "г",
    toShort: "кг",
    factor: 0.001,
    formula: "1 г = 0.001 кг",
    type: "factor",
  },

  {
    slug: "tons-to-kg",
    title: "Тонны в килограммы",
    description:
      "Переведите тонны в килограммы онлайн.",
    category: "Вес",
    from: "Тонны",
    to: "Килограммы",
    fromShort: "т",
    toShort: "кг",
    factor: 1000,
    formula: "1 тонна = 1000 кг",
    type: "factor",
  },

  {
    slug: "kg-to-tons",
    title: "Килограммы в тонны",
    description:
      "Переведите килограммы в тонны онлайн.",
    category: "Вес",
    from: "Килограммы",
    to: "Тонны",
    fromShort: "кг",
    toShort: "т",
    factor: 0.001,
    formula: "1 кг = 0.001 тонны",
    type: "factor",
  },

  // ==========================================
  // ТЕМПЕРАТУРА
  // ==========================================

  {
    slug: "celsius-to-fahrenheit",
    title: "Цельсий в Фаренгейт",
    description:
      "Переведите температуру из градусов Цельсия в градусы Фаренгейта.",
    category: "Температура",
    from: "Цельсий",
    to: "Фаренгейт",
    fromShort: "°C",
    toShort: "°F",
    formula: "°F = (°C × 9 / 5) + 32",
    type: "celsius-to-fahrenheit",
  },

  {
    slug: "fahrenheit-to-celsius",
    title: "Фаренгейт в Цельсий",
    description:
      "Переведите температуру из градусов Фаренгейта в градусы Цельсия.",
    category: "Температура",
    from: "Фаренгейт",
    to: "Цельсий",
    fromShort: "°F",
    toShort: "°C",
    formula: "°C = (°F - 32) × 5 / 9",
    type: "fahrenheit-to-celsius",
  },

  {
    slug: "celsius-to-kelvin",
    title: "Цельсий в Кельвин",
    description:
      "Переведите температуру из градусов Цельсия в Кельвины.",
    category: "Температура",
    from: "Цельсий",
    to: "Кельвин",
    fromShort: "°C",
    toShort: "K",
    formula: "K = °C + 273.15",
    type: "celsius-to-kelvin",
  },

  {
    slug: "kelvin-to-celsius",
    title: "Кельвин в Цельсий",
    description:
      "Переведите температуру из Кельвинов в градусы Цельсия.",
    category: "Температура",
    from: "Кельвин",
    to: "Цельсий",
    fromShort: "K",
    toShort: "°C",
    formula: "°C = K - 273.15",
    type: "kelvin-to-celsius",
  },

  {
    slug: "fahrenheit-to-kelvin",
    title: "Фаренгейт в Кельвин",
    description:
      "Переведите температуру из Фаренгейта в Кельвины.",
    category: "Температура",
    from: "Фаренгейт",
    to: "Кельвин",
    fromShort: "°F",
    toShort: "K",
    formula: "K = (°F - 32) × 5 / 9 + 273.15",
    type: "fahrenheit-to-kelvin",
  },

  {
    slug: "kelvin-to-fahrenheit",
    title: "Кельвин в Фаренгейт",
    description:
      "Переведите температуру из Кельвинов в Фаренгейт.",
    category: "Температура",
    from: "Кельвин",
    to: "Фаренгейт",
    fromShort: "K",
    toShort: "°F",
    formula: "°F = (K - 273.15) × 9 / 5 + 32",
    type: "kelvin-to-fahrenheit",
  },

  // ==========================================
  // ОБЪЁМ
  // ==========================================

  {
    slug: "liters-to-milliliters",
    title: "Литры в миллилитры",
    description:
      "Переведите литры в миллилитры онлайн.",
    category: "Объём",
    from: "Литры",
    to: "Миллилитры",
    fromShort: "л",
    toShort: "мл",
    factor: 1000,
    formula: "1 л = 1000 мл",
    type: "factor",
  },

  {
    slug: "milliliters-to-liters",
    title: "Миллилитры в литры",
    description:
      "Переведите миллилитры в литры онлайн.",
    category: "Объём",
    from: "Миллилитры",
    to: "Литры",
    fromShort: "мл",
    toShort: "л",
    factor: 0.001,
    formula: "1 мл = 0.001 л",
    type: "factor",
  },

  {
    slug: "liters-to-gallons",
    title: "Литры в галлоны",
    description:
      "Переведите литры в американские галлоны.",
    category: "Объём",
    from: "Литры",
    to: "Галлоны",
    fromShort: "л",
    toShort: "гал",
    factor: 0.2641720524,
    formula: "1 л = 0.2641720524 галлона",
    type: "factor",
  },

  {
    slug: "gallons-to-liters",
    title: "Галлоны в литры",
    description:
      "Переведите американские галлоны в литры.",
    category: "Объём",
    from: "Галлоны",
    to: "Литры",
    fromShort: "гал",
    toShort: "л",
    factor: 3.785411784,
    formula: "1 галлон = 3.785411784 л",
    type: "factor",
  },

  // ==========================================
  // ВРЕМЯ
  // ==========================================

  {
    slug: "seconds-to-minutes",
    title: "Секунды в минуты",
    description:
      "Переведите секунды в минуты онлайн.",
    category: "Время",
    from: "Секунды",
    to: "Минуты",
    fromShort: "с",
    toShort: "мин",
    factor: 1 / 60,
    formula: "1 минута = 60 секунд",
    type: "factor",
  },

  {
    slug: "minutes-to-seconds",
    title: "Минуты в секунды",
    description:
      "Переведите минуты в секунды онлайн.",
    category: "Время",
    from: "Минуты",
    to: "Секунды",
    fromShort: "мин",
    toShort: "с",
    factor: 60,
    formula: "1 минута = 60 секунд",
    type: "factor",
  },

  {
    slug: "minutes-to-hours",
    title: "Минуты в часы",
    description:
      "Переведите минуты в часы онлайн.",
    category: "Время",
    from: "Минуты",
    to: "Часы",
    fromShort: "мин",
    toShort: "ч",
    factor: 1 / 60,
    formula: "1 час = 60 минут",
    type: "factor",
  },

  {
    slug: "hours-to-minutes",
    title: "Часы в минуты",
    description:
      "Переведите часы в минуты онлайн.",
    category: "Время",
    from: "Часы",
    to: "Минуты",
    fromShort: "ч",
    toShort: "мин",
    factor: 60,
    formula: "1 час = 60 минут",
    type: "factor",
  },

  {
    slug: "hours-to-days",
    title: "Часы в дни",
    description:
      "Переведите часы в дни онлайн.",
    category: "Время",
    from: "Часы",
    to: "Дни",
    fromShort: "ч",
    toShort: "дн",
    factor: 1 / 24,
    formula: "1 день = 24 часа",
    type: "factor",
  },

  {
    slug: "days-to-hours",
    title: "Дни в часы",
    description:
      "Переведите дни в часы онлайн.",
    category: "Время",
    from: "Дни",
    to: "Часы",
    fromShort: "дн",
    toShort: "ч",
    factor: 24,
    formula: "1 день = 24 часа",
    type: "factor",
  },

  // ==========================================
  // СКОРОСТЬ
  // ==========================================

  {
    slug: "km-h-to-m-h",
    title: "Км/ч в м/с",
    description:
      "Переведите километры в час в метры в секунду.",
    category: "Скорость",
    from: "Километры в час",
    to: "Метры в секунду",
    fromShort: "км/ч",
    toShort: "м/с",
    factor: 0.277778,
    formula: "1 км/ч = 0.277778 м/с",
    type: "factor",
  },

  {
    slug: "m-h-to-km-h",
    title: "Миль/ч в км/ч",
    description:
      "Переведите мили в час в километры в час.",
    category: "Скорость",
    from: "Мили в час",
    to: "Километры в час",
    fromShort: "миль/ч",
    toShort: "км/ч",
    factor: 1.609344,
    formula: "1 миля/ч = 1.609344 км/ч",
    type: "factor",
  },

  {
    slug: "km-h-to-m-h",
    title: "Км/ч в мили/ч",
    description:
      "Переведите километры в час в мили в час.",
    category: "Скорость",
    from: "Километры в час",
    to: "Мили в час",
    fromShort: "км/ч",
    toShort: "миль/ч",
    factor: 0.621371,
    formula: "1 км/ч = 0.621371 миля/ч",
    type: "factor",
  },

  {
    slug: "knots-to-km-h",
    title: "Узлы в км/ч",
    description:
      "Переведите узлы в километры в час.",
    category: "Скорость",
    from: "Узлы",
    to: "Километры в час",
    fromShort: "узлов",
    toShort: "км/ч",
    factor: 1.852,
    formula: "1 узел = 1.852 км/ч",
    type: "factor",
  },

  // ==========================================
  // ПЛОЩАДЬ
  // ==========================================

  {
    slug: "sq-m-to-sq-ft",
    title: "Кв. метры в кв. футы",
    description:
      "Переведите квадратные метры в квадратные футы.",
    category: "Площадь",
    from: "Квадратные метры",
    to: "Квадратные футы",
    fromShort: "м²",
    toShort: "футов²",
    factor: 10.763910417,
    formula: "1 м² = 10.763910417 футов²",
    type: "factor",
  },

  {
    slug: "sq-ft-to-sq-m",
    title: "Кв. футы в кв. метры",
    description:
      "Переведите квадратные футы в квадратные метры.",
    category: "Площадь",
    from: "Квадратные футы",
    to: "Квадратные метры",
    fromShort: "футов²",
    toShort: "м²",
    factor: 0.092903,
    formula: "1 фут² = 0.092903 м²",
    type: "factor",
  },

  {
    slug: "sq-m-to-sq-cm",
    title: "Кв. метры в кв. сантиметры",
    description:
      "Переведите квадратные метры в квадратные сантиметры.",
    category: "Площадь",
    from: "Квадратные метры",
    to: "Квадратные сантиметры",
    fromShort: "м²",
    toShort: "см²",
    factor: 10000,
    formula: "1 м² = 10 000 см²",
    type: "factor",
  },

  {
    slug: "hectares-to-sq-m",
    title: "Гектары в кв. метры",
    description:
      "Переведите гектары в квадратные метры.",
    category: "Площадь",
    from: "Гектары",
    to: "Квадратные метры",
    fromShort: "га",
    toShort: "м²",
    factor: 10000,
    formula: "1 га = 10 000 м²",
    type: "factor",
  },

  {
    slug: "sq-m-to-hectares",
    title: "Кв. метры в гектары",
    description:
      "Переведите квадратные метры в гектары.",
    category: "Площадь",
    from: "Квадратные метры",
    to: "Гектары",
    fromShort: "м²",
    toShort: "га",
    factor: 0.0001,
    formula: "1 м² = 0.0001 га",
    type: "factor",
  },

  // ==========================================
  // ДАННЫЕ
  // ==========================================

  {
    slug: "bytes-to-kilobytes",
    title: "Байты в килобайты",
    description:
      "Переведите байты в килобайты.",
    category: "Данные",
    from: "Байты",
    to: "Килобайты",
    fromShort: "Б",
    toShort: "КБ",
    factor: 0.000977,
    formula: "1 КБ = 1024 Б",
    type: "factor",
  },

  {
    slug: "kilobytes-to-bytes",
    title: "Килобайты в байты",
    description:
      "Переведите килобайты в байты.",
    category: "Данные",
    from: "Килобайты",
    to: "Байты",
    fromShort: "КБ",
    toShort: "Б",
    factor: 1024,
    formula: "1 КБ = 1024 Б",
    type: "factor",
  },

  {
    slug: "megabytes-to-kilobytes",
    title: "Мегабайты в килобайты",
    description:
      "Переведите мегабайты в килобайты.",
    category: "Данные",
    from: "Мегабайты",
    to: "Килобайты",
    fromShort: "МБ",
    toShort: "КБ",
    factor: 1024,
    formula: "1 МБ = 1024 КБ",
    type: "factor",
  },

  {
    slug: "gigabytes-to-megabytes",
    title: "Гигабайты в мегабайты",
    description:
      "Переведите гигабайты в мегабайты.",
    category: "Данные",
    from: "Гигабайты",
    to: "Мегабайты",
    fromShort: "ГБ",
    toShort: "МБ",
    factor: 1024,
    formula: "1 ГБ = 1024 МБ",
    type: "factor",
  },

  {
    slug: "megabytes-to-gigabytes",
    title: "Мегабайты в гигабайты",
    description:
      "Переведите мегабайты в гигабайты.",
    category: "Данные",
    from: "Мегабайты",
    to: "Гигабайты",
    fromShort: "МБ",
    toShort: "ГБ",
    factor: 0.000977,
    formula: "1 ГБ = 1024 МБ",
    type: "factor",
  },

  {
    slug: "gigabytes-to-bytes",
    title: "Гигабайты в байты",
    description:
      "Переведите гигабайты в байты.",
    category: "Данные",
    from: "Гигабайты",
    to: "Байты",
    fromShort: "ГБ",
    toShort: "Б",
    factor: 1073741824,
    formula: "1 ГБ = 1 073 741 824 Б",
    type: "factor",
  },
];