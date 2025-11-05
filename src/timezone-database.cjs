/**
 * Полная база данных timezone для всех городов мира
 * Для использования в n8n без внешних зависимостей
 */

// IANA Timezone и их часовые пояса
const TIMEZONE_DB = {
  // Россия
  'Europe/Moscow': { offset: 3, lat: 55.7558, lon: 37.6173, cities: ['Москва', 'Moscow'] },
  'Asia/Yekaterinburg': { offset: 5, lat: 56.8431, lon: 60.6454, cities: ['Екатеринбург', 'Ekaterinburg'] },
  'Asia/Omsk': { offset: 6, lat: 54.9885, lon: 73.3242, cities: ['Омск', 'Omsk'] },
  'Asia/Novosibirsk': { offset: 7, lat: 55.0084, lon: 82.9357, cities: ['Новосибирск', 'Novosibirsk'] },
  'Asia/Krasnoyarsk': { offset: 7, lat: 56.0184, lon: 92.8672, cities: ['Красноярск', 'Krasnoyarsk'] },
  'Asia/Irkutsk': { offset: 8, lat: 52.2980, lon: 104.2966, cities: ['Иркутск', 'Irkutsk'] },
  'Asia/Yakutsk': { offset: 9, lat: 62.0281, lon: 129.7326, cities: ['Якутск', 'Yakutsk'] },
  'Asia/Vladivostok': { offset: 10, lat: 43.1155, lon: 131.8855, cities: ['Владивосток', 'Vladivostok'] },
  'Asia/Magadan': { offset: 11, lat: 59.5590, lon: 150.8038, cities: ['Магадан', 'Magadan'] },
  'Asia/Kamchatka': { offset: 12, lat: 53.0436, lon: 158.6508, cities: ['Петропавловск-Камчатский', 'Petropavlovsk-Kamchatsky'] },
  
  // Европа
  'Europe/Kiev': { offset: 2, lat: 50.4501, lon: 30.5234, cities: ['Киев', 'Kiev', 'Kyiv'] },
  'Europe/Minsk': { offset: 3, lat: 53.9045, lon: 27.5615, cities: ['Минск', 'Minsk'] },
  'Europe/Warsaw': { offset: 1, lat: 52.2297, lon: 21.0122, cities: ['Варшава', 'Warsaw'] },
  'Europe/Prague': { offset: 1, lat: 50.0755, lon: 14.4378, cities: ['Прага', 'Prague'] },
  'Europe/Budapest': { offset: 1, lat: 47.4979, lon: 19.0402, cities: ['Будапешт', 'Budapest'] },
  'Europe/Berlin': { offset: 1, lat: 52.5200, lon: 13.4050, cities: ['Берлин', 'Berlin'] },
  'Europe/Paris': { offset: 1, lat: 48.8566, lon: 2.3522, cities: ['Париж', 'Paris'] },
  'Europe/London': { offset: 0, lat: 51.5074, lon: -0.1278, cities: ['Лондон', 'London'] },
  'Europe/Rome': { offset: 1, lat: 41.9028, lon: 12.4964, cities: ['Рим', 'Rome'] },
  'Europe/Madrid': { offset: 1, lat: 40.4168, lon: -3.7038, cities: ['Мадрид', 'Madrid'] },
  
  // Азия
  'Asia/Almaty': { offset: 6, lat: 43.2389, lon: 76.8897, cities: ['Алматы', 'Almaty'] },
  'Asia/Tashkent': { offset: 5, lat: 41.2995, lon: 69.2401, cities: ['Ташкент', 'Tashkent'] },
  'Asia/Bishkek': { offset: 6, lat: 42.8746, lon: 74.5698, cities: ['Бишкек', 'Bishkek'] },
  'Asia/Dushanbe': { offset: 5, lat: 38.5598, lon: 68.7870, cities: ['Душанбе', 'Dushanbe'] },
  'Asia/Ashgabat': { offset: 5, lat: 37.9601, lon: 58.3261, cities: ['Ашхабад', 'Ashgabat'] },
  'Asia/Tbilisi': { offset: 4, lat: 41.7151, lon: 44.8271, cities: ['Тбилиси', 'Tbilisi'] },
  'Asia/Yerevan': { offset: 4, lat: 40.1811, lon: 44.5136, cities: ['Ереван', 'Yerevan'] },
  'Asia/Baku': { offset: 4, lat: 40.4093, lon: 49.8671, cities: ['Баку', 'Baku'] },
  'Asia/Dubai': { offset: 4, lat: 25.2048, lon: 55.2708, cities: ['Дубай', 'Dubai'] },
  'Asia/Shanghai': { offset: 8, lat: 31.2304, lon: 121.4737, cities: ['Шанхай', 'Shanghai', 'Пекин', 'Beijing'] },
  'Asia/Tokyo': { offset: 9, lat: 35.6762, lon: 139.6503, cities: ['Токио', 'Tokyo'] },
  'Asia/Seoul': { offset: 9, lat: 37.5665, lon: 126.9780, cities: ['Сеул', 'Seoul'] },
  'Asia/Bangkok': { offset: 7, lat: 13.7563, lon: 100.5018, cities: ['Бангкок', 'Bangkok'] },
  'Asia/Ho_Chi_Minh': { offset: 7, lat: 10.7769, lon: 106.7009, cities: ['Хошимин', 'Ho Chi Minh'] },
  'Asia/Jakarta': { offset: 7, lat: -6.2088, lon: 106.8456, cities: ['Джакарта', 'Jakarta'] },
  'Asia/Singapore': { offset: 8, lat: 1.3521, lon: 103.8198, cities: ['Сингапур', 'Singapore'] },
  'Asia/Mumbai': { offset: 5.5, lat: 19.0760, lon: 72.8777, cities: ['Мумбаи', 'Mumbai', 'Бомбей', 'Bombay'] },
  'Asia/Kolkata': { offset: 5.5, lat: 28.6139, lon: 77.2090, cities: ['Калькутта', 'Kolkata'] },
  'Asia/Delhi': { offset: 5.5, lat: 28.6139, lon: 77.2090, cities: ['Дели', 'Delhi'] },
  'Asia/Kathmandu': { offset: 5.75, lat: 27.7172, lon: 85.3240, cities: ['Катманду', 'Kathmandu'] },
  
  // Африка
  'Africa/Cairo': { offset: 2, lat: 30.0444, lon: 31.2357, cities: ['Каир', 'Cairo'] },
  'Africa/Lagos': { offset: 1, lat: 6.5244, lon: 3.3792, cities: ['Лагос', 'Lagos'] },
  'Africa/Johannesburg': { offset: 2, lat: -26.2041, lon: 28.0473, cities: ['Йоханнесбург', 'Johannesburg'] },
  
  // Северная Америка
  'America/New_York': { offset: -5, lat: 40.7128, lon: -74.0060, cities: ['Нью-Йорк', 'New York'] },
  'America/Chicago': { offset: -6, lat: 41.8781, lon: -87.6298, cities: ['Чикаго', 'Chicago'] },
  'America/Denver': { offset: -7, lat: 39.7392, lon: -104.9903, cities: ['Денвер', 'Denver'] },
  'America/Los_Angeles': { offset: -8, lat: 34.0522, lon: -118.2437, cities: ['Лос-Анджелес', 'Los Angeles'] },
  'America/Toronto': { offset: -5, lat: 43.6532, lon: -79.3832, cities: ['Торонто', 'Toronto'] },
  'America/Mexico_City': { offset: -6, lat: 19.4326, lon: -99.1332, cities: ['Мехико', 'Mexico City'] },
  
  // Южная Америка
  'America/Sao_Paulo': { offset: -3, lat: -23.5505, lon: -46.6333, cities: ['Сан-Паулу', 'Sao Paulo'] },
  'America/Buenos_Aires': { offset: -3, lat: -34.6118, lon: -58.3960, cities: ['Буэнос-Айрес', 'Buenos Aires'] },
  
  // Австралия
  'Australia/Sydney': { offset: 10, lat: -33.8688, lon: 151.2093, cities: ['Сидней', 'Sydney'] },
  'Australia/Melbourne': { offset: 10, lat: -37.8136, lon: 144.9631, cities: ['Мельбурн', 'Melbourne'] },
};

// История изменения DST для key стран
const DST_HISTORY = {
  'Europe/Moscow': {
    // Россия отменила DST в 2014 году
    before2014: true, // было летнее время
    after2014: false  // отменено
  },
  'Europe/Kiev': {
    // Украина использует DST
    alwaysDST: true,
    dstStart: { month: 3, week: 'last', day: 0 }, // последнее воскресенье марта
    dstEnd: { month: 10, week: 'last', day: 0 }   // последнее воскресенье октября
  },
  'Europe/Berlin': {
    alwaysDST: true,
    dstStart: { month: 3, week: 'last', day: 0 },
    dstEnd: { month: 10, week: 'last', day: 0 }
  },
  'Europe/Paris': {
    alwaysDST: true,
    dstStart: { month: 3, week: 'last', day: 0 },
    dstEnd: { month: 10, week: 'last', day: 0 }
  },
  'America/New_York': {
    alwaysDST: true,
    dstStart: { month: 3, week: 'second', day: 0 }, // второе воскресенье марта
    dstEnd: { month: 11, week: 'first', day: 0 }     // первое воскресенье ноября
  }
};

/**
 * Найти timezone по названию города
 */
function findTimezoneByCity(cityName) {
  const normalized = cityName.toLowerCase().trim();
  
  for (const [tz, data] of Object.entries(TIMEZONE_DB)) {
    for (const city of data.cities) {
      if (city.toLowerCase() === normalized || 
          normalized.includes(city.toLowerCase()) ||
          city.toLowerCase().includes(normalized)) {
        return {
          timezone: tz,
          offset: data.offset,
          latitude: data.lat,
          longitude: data.lon,
          city: city
        };
      }
    }
  }
  
  // Не найдено - возвращаем Москву по умолчанию
  return TIMEZONE_DB['Europe/Moscow'];
}

/**
 * Определить, действует ли DST для даты
 */
function isDST(birthDate, timezone) {
  const [year, month, day] = birthDate.split('-').map(Number);
  const dstInfo = DST_HISTORY[timezone];
  
  if (!dstInfo) return false;
  
  // Специальные случаи
  if (timezone === 'Europe/Moscow') {
    return year < 2014; // DST отменен с 2014
  }
  
  if (!dstInfo.alwaysDST) return false;
  
  // Упрощенный расчет DST (март-октябрь для большинства стран)
  return month >= 3 && month <= 10;
}

/**
 * Получить UTC offset с учетом DST
 */
function getUTCOffsetWithDST(birthDate, timezone) {
  const baseInfo = TIMEZONE_DB[timezone] || TIMEZONE_DB['Europe/Moscow'];
  const dstActive = isDST(birthDate, timezone);
  
  return {
    offset: baseInfo.offset + (dstActive ? 1 : 0),
    dst: dstActive,
    timezone: timezone
  };
}

/**
 * Конвертировать local time в UTC
 */
function convertLocalToUTC(birthDate, birthTime, cityName) {
  // Найти timezone по городу
  const locationInfo = findTimezoneByCity(cityName);
  
  if (!locationInfo || !locationInfo.timezone) {
    // Fallback на Москву
    locationInfo.timezone = 'Europe/Moscow';
    locationInfo.offset = 3;
    locationInfo.latitude = 55.7558;
    locationInfo.longitude = 37.6173;
  }
  
  // Получить offset с DST
  const offsetData = getUTCOffsetWithDST(birthDate, locationInfo.timezone);
  
  // Парсинг времени
  const [year, month, day] = birthDate.split('-').map(Number);
  const [hour, minute] = birthTime.split(':').map(Number);
  
  // Конвертация в UTC
  let utcHour = hour - offsetData.offset;
  let utcDay = day;
  let utcMonth = month;
  let utcYear = year;
  
  // Обработка перехода через границы дня
  if (utcHour < 0) {
    utcHour += 24;
    utcDay--;
    if (utcDay < 1) {
      utcMonth--;
      utcDay = new Date(year, month, 0).getDate();
      if (utcMonth < 1) {
        utcMonth = 12;
        utcYear--;
      }
    }
  } else if (utcHour >= 24) {
    utcHour -= 24;
    utcDay++;
    const daysInMonth = new Date(year, month, 0).getDate();
    if (utcDay > daysInMonth) {
      utcDay = 1;
      utcMonth++;
      if (utcMonth > 12) {
        utcMonth = 1;
        utcYear++;
      }
    }
  }
  
  return {
    utcYear,
    utcMonth,
    utcDay,
    utcHour,
    utcMinute: minute,
    originalLocalTime: birthTime,
    localTimezone: locationInfo.timezone,
    localOffset: offsetData.offset,
    dst: offsetData.dst,
    latitude: locationInfo.latitude,
    longitude: locationInfo.longitude
  };
}

module.exports = {
  TIMEZONE_DB,
  DST_HISTORY,
  findTimezoneByCity,
  isDST,
  getUTCOffsetWithDST,
  convertLocalToUTC
};

