"use client";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Users,
  Camera,
  Mountain,
  CheckCircle,
  Play,
  Instagram,
  MessageCircle,
  MapPinIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "../public/logo.svg";
import { useState, useEffect } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

// Translation object for Uzbek and Russian
const translations = {
  uz: {
    language: "Til",
    uzbek: "O'zbekcha",
    russian: "Ruscha",
    phone: "Telefon",
    email: "Email",
    availableTours: "Bir Nechta Tur Variantlari Mavjud",
    discoverIssykKul: "Issiq Ko'lni Kashf Eting",
    chooseAdventure: "O'zingizga Mos Sarguzashtni Tanlang",
    heroDesc:
      "Dam olish sayohatlaridan tortib to mukammal dam olish paketlarigacha - O'rta Osiyoning marvaridini bizning moslashuvchan tur variantlarimiz bilan his eting.",
    viewTours: "Turlarni Ko'rish - $180 dan",
    bookTour: "Turingizni Bron Qiling",
    selectPerfectTour: "Mukammal Turingizni Tanlang",
    selectPerfectTourDesc:
      "Issiq Ko'lda noyob tajribalar taqdim etish uchun ehtiyotkorlik bilan yaratilgan tur paketlarimizdan birini tanlang.",
    compareAll: "Barcha Paketlarni Solishtiring",
    compareAllDesc: "Barcha tur variantlarimizning qisqacha ko'rinishi",
    promoEndsIn: "Aksiya tugashiga {time} qoldi!",
    promoEnded: "Aksiya muddati tugadi",
    dayProgram: "Kun-Kunlik Dastur",
    dayProgramDesc: "{duration} sarguzashtingiz uchun batafsil jadval",
    included: "Nima Kiritilgan",
    includedDesc: "Barcha paketlar ushbu muhim xizmatlarni o'z ichiga oladi",
    includedList: [
      "Borish kelish transport",
      "Spalniy avtobus",
      "Gid hizmati yo'l boshlovchi",
      "Mehmonxona turar joyi",
      "Kuniga 3 marta ovqatlanish",
      "Professional gid",
      "Barcha transferlar",
      "Yaxta kruizi",
      "Qaynar buloqqa kirish",
      "Grigorskiy tog'lariga sayohat",
      "Har hil plyajlarga olib borish",
    ],
    notIncluded: "Kiritilmagan",
    notIncludedList: [
      "Ko'ngilochar xizmatlar",
      "Forel baliqchiligi",
      "Yo'lda ovqatlanish",
      "Suv ateraksionlaridan foydalanish:4$-20$",
      "Tog'da kvadratsikl uchish:5$",
      "Farel baliqlari bilan taomlanish:1kg 15$",
      "Ot minish:5$",
      "Burgut bilan rasmga tushish:3$",
    ],
    tourMemories: "Tur Xotiralari",
    tourMemoriesDesc:
      "Sayohatchilarimizning ko'zlari orqali Issiq Ko'lning sehrini his eting. Hayratlanarli manzaralar, qiziqarli faoliyatlar va turlarimizdan unutilmas lahzalarni ko'ring.",
    photoGallery: "Foto Galereya",
    landscapes: "Manzaralar",
    activities: "Faoliyatlar",
    hotels: "Mehmonxonalar",
    food: "Mahalliy Taomlar",
    memories: "Xotiralar",
    requirements: "Tur Talablari va Shartlari",
    requirementsDesc:
      "Tur tajribangiz xavfsiz, qulay va esda qolarli bo'lishini ta'minlash uchun muhim ma'lumotlar.",
    readyForAdventure: "Sarguzashtingizga Tayyormisiz?",
    readyForAdventureDesc:
      "Mukammal Issiq Ko'l turingizni tanlang va umr bo'yi esda qoladigan xotiralar yarating.",
    call: "Qo'ng'iroq Qiling",
    address: "Ofis Manzili",
    workTime: "Ish Vaqti",
    bookNow: "Hoziroq Turingizni Bron Qiling",
    companyDesc:
      "Issiq Ko'lga eng yaxshi turlarni taklif qiluvchi ishonchli sayohat kompaniyasi.",
    contactInfo: "Aloqa Ma'lumotlari",
    website: "Vebsayt",
    day: "Kun",
    return: "Qaytish",
    july: "Iyul",
    august: "Avgust",
    promoPrice: "Aksiya narxi",
    night: "kecha",
    select: "Tanlash",
    barchaPaketlargaKiritilgan: "Barcha Paketlarga Kiritilgan",
    shaxsiyXarajatlari: "Shaxsiy xarajatlariz",
    turTalablari: "Tur Talablari",
    haqiqiyPasportTalabQilinadi: "Haqiqiy Pasport Talab Qilinadi",
    passportRequiredDuringTour: "Tur davomida pasportingiz doimo yoningizda bo'lishi kerak",
    ageLimit: "Yosh Chegarasi",
    yosh: "yosh",
    toursForAllAges: "Turlar chaqaloqlardan keksalargacha barcha yoshlar uchun mos",
    basicPhysicalPreparation: "Asosiy Jismoniy Tayyorgarlik",
    someActivitiesRequireModerateFitness: "Ba'zi faoliyatlar o'rtacha jismoniy faollikni talab qiladi",
    swimmingAbilityOptional: "Suzish Qobiliyati (Ixtiyoriy)",
    lifeJacketsProvidedForWaterActivities: "Suv faoliyatlari uchun, garchi qutqaruv jiletlari beriladi",
    travelInsuranceRecommended: "Sayohat Sug'urtasi Tavsiya Etiladi",
    weRecommendComprehensiveTravelInsurance: "Biz keng qamrovli sayohat sug'urtasini tavsiya qilamiz",
    whatToBring: "Nima Olib Kelish Kerak",
    comfortableClothing: "Qulay Kiyimlar",
    layeredClothingForMountainWeather: "O'zgaruvchan tog' ob-havosi uchun qatlamli kiyimlar",
    swimwearAndBeachGear: "Suzish Kiyimlari va Plyaj Jihozlari",
    forLakeAndBeachActivities: "Ko'l faoliyatlari va plyajda dam olish uchun",
    sunProtection: "Quyoshdan Himoya",
    sunscreenHatSunglassesForMountains: "Baland tog'lar uchun quyosh kremi, shlyapa va ko'zoynak",
    comfortableWalkingShoes: "Qulay Yurish Oyoq Kiyimlari",
    forWalkingAndOutdoorActivities: "Piyoda yurish va ochiq havo faoliyatlari uchun",
    personalMedications: "Shaxsiy Dorilar",
    necessaryPrescriptionOrPersonalMedications: "Kerakli retseptli yoki shaxsiy dorilar",
    termsAndConditions: "Shartlar va Qoidalar",
    bookingAndPayment: "Bron Qilish va To'lov",
    fullPaymentRequiredAfterBookingConfirmation: "Bron tasdiqlangandan keyin to'liq to'lov talab qilinadi",
    tourPackagesNonRefundable: "Tur paketlari qaytarilmaydi",
    pricesMayVaryByGroupSizeAndSeason: "Narxlar guruh hajmi va mavsumga qarab o'zgarishi mumkin",
    cancellationPolicy: "Bekor Qilish Siyosati",
    toursMayBeRescheduledIfNotEnoughParticipants: "Ishtirokchilar yetarli bo'lmasa turlar qayta rejalashtirilishi mumkin",
    weatherRelatedCancellationsRescheduled: "Ob-havo bilan bog'liq bekor qilinishlar qayta rejalashtiriladi",
    companyMayChangeRouteIfNecessary: "Kompaniya kerak bo'lsa marshrutni o'zgartirish huquqini saqlab qoladi",
    accommodation: "Turar Joy",
    hotelListMayChange: "Mehmonxonalar ro'yxati taxminiy va o'zgarishi mumkin",
    hotelsMayBeReplacedWithSimilarOrBetter: "Mehmonxonalar bir xil yoki yuqori toifadagi bilan almashtirilishi mumkin",
    hotelsLocatedAlongTourRoute: "Mehmonxonalar tur marshrutidagi hududlarda joylashgan",
    liability: "Javobgarlik",
    companyNotResponsibleForLostItems: "Kompaniya yo'qolgan yoki tashlab ketilgan buyumlar uchun javobgar emas",
    helpFindingLostItems: "Yo'qolgan narsalarni topishda yordam beriladi",
    participantsResponsibleForOwnSafety: "Ishtirokchilar shaxsiy xavfsizlik uchun javobgar",
    importantNote: "Muhim Eslatma",
    companyReservesRightToChangeProgramRouteDatesHotelsIfNotEnoughParticipants: "Kompaniya dasturga o'zgartirishlar kiritish, marshrutni, jo'nash sanalari va vaqtlarini o'zgartirish, shuningdek dasturda ko'rsatilgan mehmonxonalarni o'zgartirish huquqini o'zida saqlab qoladi. Agar guruhdagi ishtirokchilar soni yetarli bo'lmasa tur keyingi mavjud sanaga ko'chirilishi yoki bekor qilinishi mumkin. Barcha ishtirokchilar tur davomida pasportlarini olib yurishlari kerak.",
    instagram: "Instagram",
    telegram: "Telegram",
    telegramGuruh: "Telegram Guruh",
    barchaHuquqlarHimoyalangan: "Barcha huquqlar himoyalangan",
    turlar: "Turlar",
    pasportTalabQilinadi: "Pasport talab qilinadi",
    // ... add more as needed ...
  },
  ru: {
    language: "Язык",
    uzbek: "Узбекский",
    russian: "Русский",
    phone: "Телефон",
    email: "Эл. почта",
    availableTours: "Доступно несколько туров",
    discoverIssykKul: "Откройте для себя Иссык-Куль",
    chooseAdventure: "Выберите свое приключение",
    heroDesc:
      "От отдыха до идеальных турпакетов — почувствуйте жемчужину Средней Азии с нашими гибкими турами.",
    viewTours: "Смотреть туры - от $180",
    bookTour: "Забронировать тур",
    selectPerfectTour: "Выберите идеальный тур",
    selectPerfectTourDesc:
      "Выберите один из наших турпакетов, созданных для уникальных впечатлений на Иссык-Куле.",
    compareAll: "Сравните все пакеты",
    compareAllDesc: "Краткий обзор всех наших туров",
    promoEndsIn: "До конца акции осталось {time}!",
    promoEnded: "Срок акции истек",
    dayProgram: "Дневная программа",
    dayProgramDesc: "Подробное расписание для вашего приключения на {duration}",
    included: "Что включено",
    includedDesc: "Все пакеты включают эти важные услуги",
    includedList: [
      "Трансфер туда-обратно",
      "Спальный автобус",
      "Услуги гида",
      "Проживание в отеле",
      "3-разовое питание в день",
      "Профессиональный гид",
      "Все трансферы",
      "Круиз на яхте",
      "Вход в горячие источники",
      "Экскурсия в горы Григорьевские",
      "Посещение различных пляжей",
    ],
    notIncluded: "Не включено",
    notIncludedList: [
      "Развлекательные услуги",
      "Рыбалка на форель",
      "Питание в дороге",
      "Водные аттракционы: 4$-20$",
      "Катание на квадроцикле в горах: 5$",
      "Ужин с форелью: 1кг 15$",
      "Верховая езда: 5$",
      "Фото с беркутом: 3$",
    ],
    tourMemories: "Воспоминания о туре",
    tourMemoriesDesc:
      "Почувствуйте магию Иссык-Куля глазами наших путешественников. Смотрите незабываемые моменты, потрясающие виды и интересные активности.",
    photoGallery: "Фотогалерея",
    landscapes: "Пейзажи",
    activities: "Активности",
    hotels: "Отели",
    food: "Местная кухня",
    memories: "Воспоминания",
    requirements: "Требования и условия тура",
    requirementsDesc:
      "Важная информация для вашей безопасности, комфорта и незабываемых впечатлений.",
    readyForAdventure: "Готовы к приключению?",
    readyForAdventureDesc:
      "Выберите идеальный тур на Иссык-Куль и создайте воспоминания на всю жизнь.",
    call: "Позвонить",
    address: "Адрес офиса",
    workTime: "Время работы",
    bookNow: "Забронируйте сейчас",
    companyDesc:
      "Надежная туристическая компания, предлагающая лучшие туры на Иссык-Куль.",
    contactInfo: "Контактная информация",
    website: "Веб-сайт",
    day: "День",
    return: "Возврат",
    july: "Июль",
    august: "Август",
    promoPrice: "Цена по акции",
    night: "ночь",
    select: "Выбрать",
    barchaPaketlargaKiritilgan: "Включено во все пакеты",
    shaxsiyXarajatlari: "Личные расходы",
    turTalablari: "Требования к туру",
    haqiqiyPasportTalabQilinadi: "Требуется действующий паспорт",
    passportRequiredDuringTour: "Во время тура паспорт всегда должен быть при себе",
    ageLimit: "Возрастное ограничение",
    yosh: "лет",
    toursForAllAges: "Туры подходят для всех возрастов от младенцев до пожилых",
    basicPhysicalPreparation: "Базовая физическая подготовка",
    someActivitiesRequireModerateFitness: "Некоторые активности требуют средней физической активности",
    swimmingAbilityOptional: "Умение плавать (необязательно)",
    lifeJacketsProvidedForWaterActivities: "Для водных активностей выдаются спасательные жилеты",
    travelInsuranceRecommended: "Рекомендуется туристическая страховка",
    weRecommendComprehensiveTravelInsurance: "Мы рекомендуем комплексную туристическую страховку",
    whatToBring: "Что взять с собой",
    comfortableClothing: "Удобная одежда",
    layeredClothingForMountainWeather: "Многослойная одежда для переменчивой горной погоды",
    swimwearAndBeachGear: "Купальники и пляжные принадлежности",
    forLakeAndBeachActivities: "Для активностей на озере и отдыха на пляже",
    sunProtection: "Защита от солнца",
    sunscreenHatSunglassesForMountains: "Солнцезащитный крем, шляпа и очки для высокогорья",
    comfortableWalkingShoes: "Удобная обувь для прогулок",
    forWalkingAndOutdoorActivities: "Для пеших прогулок и активного отдыха на свежем воздухе",
    personalMedications: "Личные лекарства",
    necessaryPrescriptionOrPersonalMedications: "Необходимые рецептурные или личные лекарства",
    termsAndConditions: "Условия и правила",
    bookingAndPayment: "Бронирование и оплата",
    fullPaymentRequiredAfterBookingConfirmation: "После подтверждения бронирования требуется полная оплата",
    tourPackagesNonRefundable: "Турпакеты не подлежат возврату",
    pricesMayVaryByGroupSizeAndSeason: "Цены могут меняться в зависимости от размера группы и сезона",
    cancellationPolicy: "Политика отмены",
    toursMayBeRescheduledIfNotEnoughParticipants: "Если участников недостаточно, туры могут быть перенесены",
    weatherRelatedCancellationsRescheduled: "Отмены из-за погоды переносятся",
    companyMayChangeRouteIfNecessary: "Компания оставляет за собой право изменить маршрут при необходимости",
    accommodation: "Проживание",
    hotelListMayChange: "Список отелей примерный и может меняться",
    hotelsMayBeReplacedWithSimilarOrBetter: "Отели могут быть заменены на аналогичные или более высокого класса",
    hotelsLocatedAlongTourRoute: "Отели расположены в районах маршрута тура",
    liability: "Ответственность",
    companyNotResponsibleForLostItems: "Компания не несет ответственности за утерянные или оставленные вещи",
    helpFindingLostItems: "Помощь в поиске утерянных вещей",
    participantsResponsibleForOwnSafety: "Участники несут личную ответственность за свою безопасность",
    importantNote: "Важное примечание",
    companyReservesRightToChangeProgramRouteDatesHotelsIfNotEnoughParticipants: "Компания оставляет за собой право вносить изменения в программу, маршрут, даты и время отправления, а также менять отели, указанные в программе. Если в группе недостаточно участников, тур может быть перенесен на другую доступную дату или отменен. Все участники должны иметь при себе паспорт на протяжении всего тура.",
    instagram: "Инстаграм",
    telegram: "Телеграм",
    telegramGuruh: "Группа в Телеграм",
    barchaHuquqlarHimoyalangan: "Все права защищены",
    turlar: "Туры",
    pasportTalabQilinadi: "Требуется паспорт",
    // ... add more as needed ...
  },
};

// Fix getTranslation types
type Lang = keyof typeof translations;
type TranslationKey = keyof (typeof translations)["uz"];
function getTranslation(
  lang: Lang,
  key: TranslationKey,
  params?: Record<string, string | number>
): string {
  let value = translations[lang][key] || translations.uz[key] || (key as string);
  if (Array.isArray(value)) {
    // If the translation is an array, join with ", " for display
    return value.join(", ");
  }
  let str = value as string;
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, String(v));
    });
  }
  return str;
}

function useCountdown(minutes = 15): string {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev: number) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutesLeft = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secondsLeft = String(timeLeft % 60).padStart(2, "0");

  return `${minutesLeft}:${secondsLeft}`;
}

// Add types for i18n tour package fields

type I18nString = { uz: string; ru: string };
type I18nActivity = { uz: string; ru: string };
type I18nHotel = { uz: string; ru: string };

type TourItineraryDay = {
  day: number;
  title: I18nString;
  activities: I18nActivity[];
};

type TourPackage = {
  id: string;
  title: I18nString;
  duration: I18nString;
  departure: I18nString;
  departureTime: I18nString;
  returnTime: I18nString;
  priceJuly: number;
  priceAugust: number;
  hotels: I18nHotel[];
  nights: number;
  itinerary: TourItineraryDay[];
};

export default function IssykKulTour() {
  const countdown = useCountdown(15);
  const tourPackages: TourPackage[] = [
    {
      id: "2-day",
      title: { uz: "Dam Olish Sayohati", ru: "Тур для отдыха" },
      duration: { uz: "2 Kun / 1 Kecha", ru: "2 дня / 1 ночь" },
      departure: { uz: "Har Juma Kunlari", ru: "Каждую пятницу" },
      departureTime: { uz: "18:00 - 19:00", ru: "18:00 - 19:00" },
      returnTime: { uz: "Dushanba 06:00", ru: "Понедельник 06:00" },
      priceJuly: 180,
      priceAugust: 160,
      hotels: [
        { uz: "ESAL Mehmonxona", ru: "Отель ESAL" },
        { uz: "MANAS ATA Mehmonxona", ru: "Отель MANAS ATA" }
      ],
      nights: 1,
      itinerary: [
        {
          day: 1,
          title: { uz: "Kelish va Kashf Etish", ru: "Прибытие и знакомство" },
          activities: [
            { uz: "Chegaradan o'tish (Qirg'iziston Respublikasi)", ru: "Пересечение границы (Кыргызская Республика)" },
            { uz: "Valyuta almashtirish", ru: "Обмен валюты" },
            { uz: "Issiq Ko'lga tashrif", ru: "Посещение озера Иссык-Куль" },
            { uz: "Cho'lpon-Ota bog'iga tashrif", ru: "Посещение парка Чолпон-Ата" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Plyajda dam olish (18:00 gacha)", ru: "Отдых на пляже (до 18:00)" },
            { uz: "Qaynar buloqqa chiqish", ru: "Посещение горячих источников" },
            { uz: "Kechki ovqat", ru: "Ужин" },
            { uz: "Diskoteka", ru: "Дискотека" }
          ]
        },
        {
          day: 2,
          title: { uz: "Jo'nash Kuni", ru: "День отъезда" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Plyajga chiqish", ru: "Выход на пляж" },
            { uz: "Mehmonxona xonalarini topshirish", ru: "Сдача номеров в отеле" },
            { uz: "Grigorievskoe darasi (ixtiyoriy)", ru: "Григорьевское ущелье (по желанию)" },
            { uz: "Yoki plyajda qolish (teploxod vaqtigacha)", ru: "Или остаться на пляже (до времени теплохода)" },
            { uz: "Teploxod sayohati", ru: "Прогулка на теплоходе" },
            { uz: "Bishkekdan jo'nash (19:00)", ru: "Отправление из Бишкека (19:00)" },
            { uz: "Toshkentga qaytish", ru: "Возвращение в Ташкент" }
          ]
        }
      ]
    },
    {
      id: "4-day",
      title: { uz: "Klassik Tajriba", ru: "Классический опыт" },
      duration: { uz: "4 Kun / 3 Kecha", ru: "4 дня / 3 ночи" },
      departure: { uz: "Har Chorshanba Kunlari", ru: "Каждую среду" },
      departureTime: { uz: "18:00 - 19:00", ru: "18:00 - 19:00" },
      returnTime: { uz: "Dushanba 06:00", ru: "Понедельник 06:00" },
      priceJuly: 260,
      priceAugust: 240,
      hotels: [
        { uz: "ESAL Mehmonxona", ru: "Отель ESAL" },
        { uz: "AVGUST Mehmonxona", ru: "Отель AVGUST" }
      ],
      nights: 3,
      itinerary: [
        {
          day: 1,
          title: { uz: "Kelish va Kutib Olish", ru: "Прибытие и встреча" },
          activities: [
            { uz: "Chegaradan o'tish (Qirg'iziston Respublikasi)", ru: "Пересечение границы (Кыргызская Республика)" },
            { uz: "Valyuta almashtirish", ru: "Обмен валюты" },
            { uz: "Issiq Ko'lga tashrif", ru: "Посещение озера Иссык-Куль" },
            { uz: "Mehmonxonaga joylashish", ru: "Размещение в отеле" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Bo'sh vaqt (Suzish yoki Plyaj)", ru: "Свободное время (купание или пляж)" },
            { uz: "Qaynar buloqqa chiqish", ru: "Посещение горячих источников" },
            { uz: "Kechki ovqat", ru: "Ужин" },
            { uz: "Diskoteka", ru: "Дискотека" }
          ]
        },
        {
          day: 2,
          title: { uz: "Tog' Sarguzashtlari", ru: "Горные приключения" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Tog'lar orasida sayohat (Grigorievskoe darasi)", ru: "Экскурсия в горы (Григорьевское ущелье)" },
            { uz: "Baliqchilik", ru: "Рыбалка" },
            { uz: "Ot minish", ru: "Верховая езда" },
            { uz: "Mahalliy taomlardan degustatsiya", ru: "Дегустация местных блюд" },
            { uz: "Kvadratsikl", ru: "Квадроциклы" },
            { uz: "Mehmonxonada tushlik", ru: "Обед в отеле" },
            { uz: "Issiq ko'l bo'ylab kemada sayohat", ru: "Прогулка на катере по Иссык-Кулю" },
            { uz: "Prezident bo'g'iga sayohat", ru: "Экскурсия в Президентский парк" },
            { uz: "Kechki ovqat va Dam olish", ru: "Ужин и отдых" }
          ]
        },
        {
          day: 3,
          title: { uz: "Plyaj va Ko'ngilochar", ru: "Пляж и развлечения" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Plyaj kuni", ru: "День на пляже" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Suv atraktsionlarida uchish", ru: "Водные аттракционы" },
            { uz: "Kechki ovqat", ru: "Ужин" },
            { uz: "Cho'lpon Ota bog'ida kechki sayr", ru: "Вечерняя прогулка в парке Чолпон-Ата" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 4,
          title: { uz: "Jo'nash", ru: "Отъезд" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Plyaj kuni", ru: "День на пляже" },
            { uz: "Issiq Ko'ldan chiqib ketish (12:00)", ru: "Выезд с Иссык-Куля (12:00)" },
            { uz: "Bishkekdan chiqib ketish", ru: "Отправление из Бишкека" },
            { uz: "Esdalik uchun suvenirlar olish", ru: "Покупка сувениров" },
            { uz: "Chegaradan chiqib ketish", ru: "Пересечение границы" },
            { uz: "Uyga qaytish (22:00)", ru: "Возвращение домой (22:00)" }
          ]
        }
      ]
    },
    {
      id: "5-day",
      title: { uz: "To'liq Sarguzasht", ru: "Полное приключение" },
      duration: { uz: "5 Kun / 4 Kecha", ru: "5 дней / 4 ночи" },
      departure: { uz: "Har Shanba Kunlari", ru: "Каждую субботу" },
      departureTime: { uz: "18:00 - 19:00", ru: "18:00 - 19:00" },
      returnTime: { uz: "Juma 06:00", ru: "Пятница 06:00" },
      priceJuly: 290,
      priceAugust: 270,
      hotels: [
        { uz: "ESAL Mehmonxona", ru: "Отель ESAL" },
        { uz: "AVGUST Mehmonxona", ru: "Отель AVGUST" }
      ],
      nights: 4,
      itinerary: [
        {
          day: 1,
          title: { uz: "Kelish va Birinchi Taassurotlar", ru: "Прибытие и первые впечатления" },
          activities: [
            { uz: "Chegaradan o'tish (Qirg'iziston Respublikasi)", ru: "Пересечение границы (Кыргызская Республика)" },
            { uz: "Valyuta almashtirish", ru: "Обмен валюты" },
            { uz: "Issiq Ko'lga tashrif", ru: "Посещение озера Иссык-Куль" },
            { uz: "Mehmonxonaga joylashish", ru: "Размещение в отеле" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Bo'sh vaqt (Suzish yoki Plyaj)", ru: "Свободное время (купание или пляж)" },
            { uz: "Qaynar buloqqa chiqish", ru: "Посещение горячих источников" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 2,
          title: { uz: "Tog' Sarguzashtlari", ru: "Горные приключения" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Tog'lar orasida sayohat (Grigorievskoe darasi)", ru: "Экскурсия в горы (Григорьевское ущелье)" },
            { uz: "Baliqchilik", ru: "Рыбалка" },
            { uz: "Ot minish", ru: "Верховая езда" },
            { uz: "Mahalliy taomlardan degustatsiya", ru: "Дегустация местных блюд" },
            { uz: "Kvadratsikl", ru: "Квадроциклы" },
            { uz: "Mehmonxonada tushlik", ru: "Обед в отеле" },
            { uz: "Issiq ko'l bo'ylab kemada sayohat", ru: "Прогулка на катере по Иссык-Кулю" },
            { uz: "Prezident bo'g'iga sayohat", ru: "Экскурсия в Президентский парк" },
            { uz: "Kechki ovqat va Dam olish", ru: "Ужин и отдых" }
          ]
        },
        {
          day: 3,
          title: { uz: "Plyaj va Suv O'yinlari", ru: "Пляж и водные развлечения" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Plyaj kuni", ru: "День на пляже" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Suv atraktsionlarida uchish", ru: "Водные аттракционы" },
            { uz: "Kechki ovqat", ru: "Ужин" },
            { uz: "Cho'lpon Ota bog'ida kechki sayr", ru: "Вечерняя прогулка в парке Чолпон-Ата" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 4,
          title: { uz: "Dam Olish Kuni", ru: "День отдыха" },
          activities: [
            { uz: "Mehmonxonada nonushta", ru: "Завтрак в отеле" },
            { uz: "Plyajda dam olish", ru: "Отдых на пляже" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 5,
          title: { uz: "Jo'nash", ru: "Отъезд" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Plyaj kuni", ru: "День на пляже" },
            { uz: "Issiq Ko'ldan chiqib ketish (12:00)", ru: "Выезд с Иссык-Куля (12:00)" },
            { uz: "Bishkekdan chiqib ketish", ru: "Отправление из Бишкека" },
            { uz: "Esdalik uchun suvenirlar olish", ru: "Покупка сувениров" },
            { uz: "Chegaradan chiqib ketish", ru: "Пересечение границы" },
            { uz: "Uyga qaytish (22:00)", ru: "Возвращение домой (22:00)" }
          ]
        }
      ]
    },
    {
      id: "7-day",
      title: { uz: "Mukammal Dam Olish", ru: "Идеальный отдых" },
      duration: { uz: "7 Kun / 6 Kecha", ru: "7 дней / 6 ночей" },
      departure: { uz: "Har Shanba Kunlari", ru: "Каждую субботу" },
      departureTime: { uz: "18:00 - 19:00", ru: "18:00 - 19:00" },
      returnTime: { uz: "Yakshanba 05:00", ru: "Воскресенье 05:00" },
      priceJuly: 370,
      priceAugust: 350,
      hotels: [
        { uz: "ESAL Mehmonxona", ru: "Отель ESAL" },
        { uz: "MANAS ATA Mehmonxona", ru: "Отель MANAS ATA" }
      ],
      nights: 6,
      itinerary: [
        {
          day: 1,
          title: { uz: "Kelish va Kutib Olish", ru: "Прибытие и встреча" },
          activities: [
            { uz: "Chegaradan o'tish (Qirg'iziston Respublikasi)", ru: "Пересечение границы (Кыргызская Республика)" },
            { uz: "Valyuta almashtirish", ru: "Обмен валюты" },
            { uz: "Issiq Ko'lga tashrif", ru: "Посещение озера Иссык-Куль" },
            { uz: "Mehmonxonaga joylashish", ru: "Размещение в отеле" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Bo'sh vaqt (Suzish yoki Plyaj)", ru: "Свободное время (купание или пляж)" },
            { uz: "Qaynar buloqqa chiqish", ru: "Посещение горячих источников" },
            { uz: "Kechki ovqat", ru: "Ужин" },
            { uz: "Kechki plyajda sayr", ru: "Вечерняя прогулка по пляжу" }
          ]
        },
        {
          day: 2,
          title: { uz: "Madaniyat va Kruiz", ru: "Культура и круиз" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Plyajda dam olish", ru: "Отдых на пляже" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Teploxodda sayr", ru: "Прогулка на теплоходе" },
            { uz: "Kechki ovqat", ru: "Ужин" },
            { uz: "Prezident bo'g'iga sayohat", ru: "Экскурсия в Президентский парк" },
            { uz: "Diskoteka", ru: "Дискотека" }
          ]
        },
        {
          day: 3,
          title: { uz: "Tabiat va Sarguzasht", ru: "Природа и приключения" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Daralarga sayohat", ru: "Экскурсия по ущельям" },
            { uz: "Ot minish", ru: "Верховая езда" },
            { uz: "Sharshara ko'rish", ru: "Посещение водопада" },
            { uz: "Forel balig'idan degustatsiya", ru: "Дегустация форели" },
            { uz: "Baliqchilik", ru: "Рыбалка" },
            { uz: "Kvadratsikl", ru: "Квадроциклы" },
            { uz: "Mehmonxonada tushlik", ru: "Обед в отеле" },
            { uz: "Erkin vaqt", ru: "Свободное время" },
            { uz: "Plyaj", ru: "Пляж" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 4,
          title: { uz: "Sof Dam Olish", ru: "День полного отдыха" },
          activities: [
            { uz: "Mehmonxonada nonushta", ru: "Завтрак в отеле" },
            { uz: "Plyajda dam olish", ru: "Отдых на пляже" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 5,
          title: { uz: "Plyaj Kuni", ru: "День на пляже" },
          activities: [
            { uz: "Mehmonxonada nonushta", ru: "Завтрак в отеле" },
            { uz: "Plyajda dam olish", ru: "Отдых на пляже" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 6,
          title: { uz: "Oxirgi Plyaj Kuni", ru: "Последний день на пляже" },
          activities: [
            { uz: "Mehmonxonada nonushta", ru: "Завтрак в отеле" },
            { uz: "Plyajda dam olish", ru: "Отдых на пляже" },
            { uz: "Tushlik", ru: "Обед" },
            { uz: "Kechki ovqat", ru: "Ужин" }
          ]
        },
        {
          day: 7,
          title: { uz: "Jo'nash", ru: "Отъезд" },
          activities: [
            { uz: "Nonushta", ru: "Завтрак" },
            { uz: "Issiq Ko'ldan chiqib ketish (12:00)", ru: "Выезд с Иссык-Куля (12:00)" },
            { uz: "Esdalik uchun suvenirlar olish", ru: "Покупка сувениров" },
            { uz: "Chegaradan chiqib ketish", ru: "Пересечение границы" },
            { uz: "Shimkentga kelish (19:00)", ru: "Прибытие в Шымкент (19:00)" }
        ]
      }
    ]
  }
  ];

  const included = [
    "Borish kelish transport",
    "Spalniy avtobus",
    "Gid hizmati yo'l boshlovchi",
    "Mehmonxona turar joyi",
    "Kuniga 3 marta ovqatlanish",
    "Professional gid",
    "Barcha transferlar",
    "Yaxta kruizi",
    "Qaynar buloqqa kirish",
    "Grigorskiy tog'lariga sayohat",
    "Har hil plyajlarga olib borish",
  ];

  const notIncluded = [
    "Ko'ngilochar xizmatlar",
    "Forel baliqchiligi",
    "Yo'lda ovqatlanish",
    "Suv ateraksionlaridan foydalanish:4$-20$",
    "Tog'da kvadratsikl uchish:5$",
    "Farel baliqlari bilan taomlanish:1kg 15$",
    "Ot minish:5$",
    "Burgut bilan rasmga tushish:3$",
  ];

  // Refactor gallery arrays for i18n
  const landscapeImages = [
    { src: "/images/foto1.jpg", alt: { uz: "Issiq Ko'lning toza suvlari", ru: "Чистые воды Иссык-Куля" } },
    { src: "/images/foto2.jpg", alt: { uz: "Issiq Ko'lning toza suvlari", ru: "Чистые воды Иссык-Куля" } },
    { src: "/images/foto3.jpg", alt: { uz: "Issiq Ko'lning toza suvlari", ru: "Чистые воды Иссык-Куля" } },
    { src: "/images/foto4.jpg", alt: { uz: "Ulug'vor tog' tizmalari", ru: "Величественные горные хребты" } },
    { src: "/images/foto5.jpg", alt: { uz: "Ulug'vor tog' tizmalari", ru: "Величественные горные хребты" } },
    { src: "/images/foto6.jpg", alt: { uz: "Ulug'vor tog' tizmalari", ru: "Величественные горные хребты" } },
    { src: "/images/foto7.jpg", alt: { uz: "Qor bilan qoplangan cho'qqilar", ru: "Заснеженные вершины" } },
    { src: "/images/foto8.jpg", alt: { uz: "Billur toza ko'l suvlari", ru: "Кристально чистые воды озера" } },
    { src: "/images/lake-view-4.jpg", alt: { uz: "Issiq Ko'lda quyosh botishi", ru: "Закат на Иссык-Куле" } },
    { src: "/images/mountains-2.jpg", alt: { uz: "Alp manzaralari", ru: "Альпийские пейзажи" } },
  ];

  const activityImages = [
    {
      src: "/images/activities/horse-riding.png",
      alt: { uz: "Ot Minish", ru: "Верховая езда" },
      title: { uz: "Ot Minish", ru: "Верховая езда" },
    },
    {
      src: "/images/foto2.jpg",
      alt: { uz: "Sohil(plyaj)", ru: "Пляж" },
      title: { uz: "Sohil(plyaj)", ru: "Пляж" },
    },
    {
      src: "/quadracycle.png",
      alt: { uz: "Kvadratsikl", ru: "Квадроцикл" },
      title: { uz: "Kvadratsikl", ru: "Квадроцикл" },
    },
    {
      src: "/images/activities/boat-cruise.png",
      alt: { uz: "Qayiq Kruizi", ru: "Прогулка на лодке" },
      title: { uz: "Qayiq Kruizi", ru: "Прогулка на лодке" },
    },
    {
      src: "/swing.png",
      alt: { uz: "Arg`imchoqlar", ru: "Качели" },
      title: { uz: "Arg`imchoqlar", ru: "Качели" },
    },
    {
      src: "/images/activities/bitch.png",
      alt: { uz: "Plyaj Faoliyatlari", ru: "Пляжные активности" },
      title: { uz: "Plyaj Faoliyatlari", ru: "Пляжные активности" },
    },
  ];

  const hotelImages = [
    {
      src: "/images/esal-hotel.jpg",
      name: { uz: "ESAL Mehmonxona", ru: "Отель ESAL" },
      features: { uz: "Ko'l bo'yidagi xonalar, Zamonaviy qulayliklar", ru: "Номера у озера, современные удобства" },
    },
    {
      src: "/images/avgust-hotel.jpg",
      name: { uz: "AVGUST Mehmonxona", ru: "Отель AVGUST" },
      features: { uz: "Premium qulaylik, Ajoyib joylashuv", ru: "Премиум комфорт, отличное расположение" },
    },
    {
      src: "/images/manas-ata-hotel.jpg",
      name: { uz: "MANAS ATA Mehmonxona", ru: "Отель MANAS ATA" },
      features: { uz: "An'anaviy uslub, A'lo xizmat", ru: "Традиционный стиль, отличный сервис" },
    },
  ];

  const foodImages = [
    { src: "/images/dishes/manti.png", alt: { uz: "Manti", ru: "Манты" }, title: { uz: "Manti", ru: "Манты" } },
    { src: "/images/dishes/beshbarmak.png", alt: { uz: "Beshbarmoq", ru: "Бешбармак" }, title: { uz: "Beshbarmoq", ru: "Бешбармак" } },
  ];

  const memoryImages = [
    {
      src: "/images/sunset-lake.jpg",
      title: { uz: "Ko'lda Quyosh Botishi", ru: "Закат на озере" },
      description: { uz: "Issiq Ko'lda oltin soat sehri", ru: "Магия золотого часа на Иссык-Куле" },
    },
    {
      src: "/images/group-adventures.jpg",
      title: { uz: "Guruh Sarguzashtlari", ru: "Групповые приключения" },
      description: { uz: "Dunyo bo'ylab do'stlar orttirish", ru: "Завести друзей со всего мира" },
    },
    {
      src: "/images/cultural-exchange.jpg",
      title: { uz: "Madaniy Almashish", ru: "Культурный обмен" },
      description: { uz: "Qirg'iz an'analarini o'rganish", ru: "Знакомство с традициями Кыргызстана" },
    },
    {
      src: "/images/beach-relaxation.jpg",
      title: { uz: "Plyajda Dam Olish", ru: "Отдых на пляже" },
      description: { uz: "Suv yonida mukammal lahzalar", ru: "Идеальные моменты у воды" },
    },
    {
      src: "/images/local-markets.jpg",
      title: { uz: "Mahalliy Bozorlar", ru: "Местные рынки" },
      description: { uz: "Asl suvenirlar xarid qilish", ru: "Покупка настоящих сувениров" },
    },
  ];

  const videos = [
    {
      src: "/videos/lake-views.mp4",
      title: { uz: "Billur Toza Suvlar", ru: "Кристально чистые воды" },
      description: { uz: "Issiq Ko'lning toza suvlarining ajoyib havo manzaralari", ru: "Потрясающие виды с воздуха на чистые воды Иссык-Куля" },
      thumbnail: "/images/lake-view-1.jpg",
    },
    {
      src: "/videos/mountain-adventures.mp4",
      title: { uz: "Tog' Sarguzashtlari", ru: "Горные приключения" },
      description: { uz: "Ot minish va kvadratsikl sarguzashtlari", ru: "Верховая езда и приключения на квадроциклах" },
      thumbnail: "/images/mountains-1.jpg",
    },
    {
      src: "/videos/cultural-experiences.mp4",
      title: { uz: "Madaniy Tajribalar", ru: "Культурные впечатления" },
      description: { uz: "Mahalliy taomlarni tatib ko'rish va madaniy faoliyatlar", ru: "Дегустация местных блюд и культурные мероприятия" },
      thumbnail: "/images/cultural-exchange.jpg",
    },
  ];

  // Language state with localStorage persistence
  const [lang, setLang] = useState<Lang>("uz");
  // On mount, set lang from localStorage if available
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("lang") as Lang;
      if (storedLang && storedLang !== lang) {
        setLang(storedLang);
      }
    }
    // eslint-disable-next-line
  }, []); // Only run once on mount

  // Whenever lang changes, update localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              {/* <Mountain className="h-8 w-8 text-blue-600" /> */}
              <span className="text-2xl font-bold text-gray-800">
                <Image
                  style={{ width: "100px", height: "30px" }}
                  src={logo}
                  alt="logo"
                />
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="font-medium">(99)124-42-14</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>moviytravel@gmail.com</span>
              </div>
              {/* Language Select Dropdown */}
              <div className="flex items-center space-x-2">
                <span>{getTranslation(lang, "language")}:</span>
                <Select value={lang} onValueChange={value => setLang(value as Lang)}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uz">{getTranslation(lang, "uzbek")}</SelectItem>
                    <SelectItem value="ru">{getTranslation(lang, "russian")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center object-cover"
          style={{
            backgroundImage: `url('/images/issyk-kul-lake.jpg')`,
          }}
        ></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {getTranslation(lang, "availableTours")}
            </Badge>
            <h1
              className="text-5xl bg-[#00c9c7]/80 font-bold mb-6"
              style={{
                maxWidth: "550px",
                padding: "4px 5px 4px 5px",
                borderRadius: "5px",
              }}
            >
              {getTranslation(lang, "discoverIssykKul")}
            </h1>
            <span
              style={{
                maxWidth: "515px",
                padding: "4px 5px 4px 5px",
                borderRadius: "5px",
                marginBottom: "100px",
              }}
              className="5block text-3xl  mb-2  bg-[#00c9c7]/80 text-blue-200 mt-2"
            >
              {getTranslation(lang, "chooseAdventure")}
            </span>
            <p
              style={{
                maxWidth: "800px",
                padding: "4px 5px 4px 5px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
              className="text-xl bg-[#00c9c7]/80 mb-8 text-white "
            >
              {getTranslation(lang, "heroDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                {getTranslation(lang, "viewTours")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00c9c7]/80 bg-[#00c9c7]/80 text-white hover:bg-white/10 "
                asChild
              >
                <a href="tel:+998991244214">
                  <Phone className="h-4 w-4 mr-2" />
                  {getTranslation(lang, "bookTour")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {getTranslation(lang, "selectPerfectTour")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation(lang, "selectPerfectTourDesc")}
            </p>
          </div>

          <Tabs defaultValue="2-day" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {tourPackages.map((tour) => (
                <TabsTrigger key={tour.id} value={tour.id}>
                  {tour.duration[lang].split(" ")[0]} {getTranslation(lang, "day")}
                </TabsTrigger>
              ))}
            </TabsList>

            {tourPackages.map((tour) => (
              <TabsContent key={tour.id} value={tour.id}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Tour Overview */}
                  <div className="lg:col-span-1">
                    <Card className="h-fit">
                      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <CardTitle className="text-2xl">{tour.title[lang]}</CardTitle>
                        <CardDescription className="text-blue-100">
                          {tour.duration[lang]}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6 space-y-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{tour.departure[lang]}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{tour.departureTime[lang]}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">
                            {getTranslation(lang, "return")}: {tour.returnTime[lang]}
                          </span>
                        </div>

                        {/* Narxlar + Taymer */}
                        <div className="border-t pt-4">
                          <div className="text-center space-y-4">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                              {/* Iyul */}
                              <div className="bg-blue-50 px-4 py-2 rounded-md shadow w-full sm:w-auto">
                                <div className="text-sm text-gray-500 mb-1">
                                  {getTranslation(lang, "july")}
                                </div>
                                <div className="flex justify-center items-end space-x-2">
                                  <span className="text-gray-400 line-through text-lg">
                                    ${tour.priceJuly + 50}
                                  </span>
                                  <span className="text-2xl font-bold text-green-600">
                                    ${tour.priceJuly}
                                  </span>
                                </div>
                                <div className="text-xs text-green-500">
                                  {getTranslation(lang, "promoPrice")}
                                </div>
                              </div>

                              {/* Avgust */}
                              <div className="bg-orange-50 px-4 py-2 rounded-md shadow w-full sm:w-auto">
                                <div className="text-sm text-gray-500 mb-1">
                                  {getTranslation(lang, "august")}
                                </div>
                                <div className="flex justify-center items-end space-x-2">
                                  <span className="text-gray-400 line-through text-lg">
                                    ${tour.priceAugust + 50}
                                  </span>
                                  <span className="text-2xl font-bold text-green-600">
                                    ${tour.priceAugust}
                                  </span>
                                </div>
                                <div className="text-xs text-green-500">
                                  {getTranslation(lang, "promoPrice")}
                                </div>
                              </div>
                            </div>

                            {/* Taymer */}
                            <div className="mt-2">
                              {countdown !== "00:00" ? (
                                <div className="inline-block bg-red-100 text-red-700 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                                  {getTranslation(lang, "promoEndsIn", { time: countdown })}
                                </div>
                              ) : (
                                <div className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                                  {getTranslation(lang, "promoEnded")}
                                </div>
                              )}
                            </div>
                          </div>

                          <Button
                            className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
                            asChild
                          >
                            <a href="tel:+998991244214">
                              <Phone className="h-4 w-4 mr-2" />
                              {getTranslation(lang, "bookTour")} {tour.title[lang]}
                            </a>
                          </Button>
                        </div>

                        {/* Mehmonxonalar */}
                        <div className="border-t pt-4">
                          <h4 className="font-semibold mb-2">{getTranslation(lang, "hotels")}:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {tour.hotels.map((hotel, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span>{hotel[lang]}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Kunlik Dastur */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>{getTranslation(lang, "dayProgram")}</CardTitle>
                        <CardDescription>
                          {getTranslation(lang, "dayProgramDesc", { duration: tour.duration[lang] })}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {tour.itinerary.map((day) => (
                          <div
                            key={day.day}
                            className="border-l-4 border-blue-500 pl-4"
                          >
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                {day.day}
                              </div>
                              <h3 className="font-semibold text-lg">
                                {day.title[lang]}
                              </h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {day.activities.map((activity, i) => (
                                <div
                                  key={i}
                                  className="flex items-center space-x-2"
                                >
                                  <Star className="h-3 w-3 text-blue-600 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">
                                    {activity[lang]}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {getTranslation(lang, "compareAll")}
            </h2>
            <p className="text-gray-600">
              {getTranslation(lang, "compareAllDesc")}
            </p>
            <div className="mt-2">
              {countdown !== "00:00" ? (
                <div className="inline-block bg-red-100 text-red-700 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                  {getTranslation(lang, "promoEndsIn", { time: countdown })}
                </div>
              ) : (
                <div className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                  {getTranslation(lang, "promoEnded")}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((tour) => (
              <Card
                key={tour.id}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{tour.title[lang]}</CardTitle>
                  <CardDescription>{tour.duration[lang]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-center items-end space-x-2">
                      <span className="text-gray-400 line-through text-lg">
                        ${tour.priceJuly + 50}
                      </span>
                      <span className="text-2xl font-bold text-green-600">
                        ${tour.priceJuly}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {tour.departure[lang]}
                    </div>
                    <div className="text-sm text-gray-600">
                      {tour.nights} {getTranslation(lang, "night")}
                    </div>
                    <Button size="sm" className="w-full mt-4" asChild>
                      <a href="tel:+998991244214">
                        <Phone className="h-4 w-4 mr-2" />
                        {getTranslation(lang, "select")}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Memories - Photos & Videos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {getTranslation(lang, "tourMemories")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation(lang, "tourMemoriesDesc")}
            </p>
          </div>

          {/* Video Highlights */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Video Diqqatga Sazovor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="bg-white/20 rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <video className="hidden w-full h-full object-cover" controls>
                      <source src={video.src} type="video/mp4" />
                      Brauzeringiz video tegini qo'llab-quvvatlamaydi.
                    </video>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{video.title}</h4>
                    <p className="text-sm text-gray-600">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Photo Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              {getTranslation(lang, "photoGallery")}
            </h3>

            {/* Gallery Categories */}
            <Tabs defaultValue="landscapes" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="landscapes">{getTranslation(lang, "landscapes")}</TabsTrigger>
                <TabsTrigger value="activities">{getTranslation(lang, "activities")}</TabsTrigger>
                <TabsTrigger value="hotels">{getTranslation(lang, "hotels")}</TabsTrigger>
                <TabsTrigger value="food">{getTranslation(lang, "food")}</TabsTrigger>
                <TabsTrigger value="memories">{getTranslation(lang, "memories")}</TabsTrigger>
              </TabsList>

              <TabsContent value="landscapes">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {landscapeImages.map((image, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <div className="relative aspect-square">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt[lang]}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activities">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {activityImages.map((activity, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <div className="relative aspect-square">
                        <img
                          src={activity.src || "/placeholder.svg"}
                          alt={activity.alt[lang]}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <p className="text-white text-sm font-medium">
                            {activity.title[lang]}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="hotels">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hotelImages.map((hotel, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative aspect-video">
                        <img
                          src={hotel.src || "/placeholder.svg"}
                          alt={hotel.name[lang]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">{hotel.name[lang]}</h4>
                        <p className="text-sm text-gray-600">
                          {hotel.features[lang]}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="food">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {foodImages.map((food, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <div className="relative aspect-square">
                        <img
                          src={food.src || "/placeholder.svg"}
                          alt={food.alt[lang]}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <p className="text-white text-sm font-medium">
                            {food.title[lang]}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="memories">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {memoryImages.map((memory, i) => (
                    <Card
                      key={i}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <div className="relative aspect-video">
                        <img
                          src={memory.src || "/placeholder.svg"}
                          alt={memory.title[lang]}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-semibold mb-1">
                            {memory.title[lang]}
                          </h4>
                          <p className="text-white/90 text-sm">
                            {memory.description[lang]}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {getTranslation(lang, "included")}
            </h2>
            <p className="text-gray-600">
              {getTranslation(lang, "includedDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {getTranslation(lang, "barchaPaketlargaKiritilgan")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {translations[lang].includedList.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  {getTranslation(lang, "shaxsiyXarajatlari")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {translations[lang].notIncludedList.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Requirements & Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {getTranslation(lang, "requirements")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {getTranslation(lang, "requirementsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {getTranslation(lang, "turTalablari")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "haqiqiyPasportTalabQilinadi")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "passportRequiredDuringTour")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "ageLimit")}: 0-75 {getTranslation(lang, "yosh")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "toursForAllAges")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "basicPhysicalPreparation")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "someActivitiesRequireModerateFitness")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "swimmingAbilityOptional")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "lifeJacketsProvidedForWaterActivities")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "travelInsuranceRecommended")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "weRecommendComprehensiveTravelInsurance")}
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What to Bring */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  {getTranslation(lang, "whatToBring")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "comfortableClothing")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "layeredClothingForMountainWeather")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "swimwearAndBeachGear")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "forLakeAndBeachActivities")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "sunProtection")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "sunscreenHatSunglassesForMountains")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "comfortableWalkingShoes")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "forWalkingAndOutdoorActivities")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        {getTranslation(lang, "personalMedications")}
                      </span>
                      <p className="text-sm text-gray-600">
                        {getTranslation(lang, "necessaryPrescriptionOrPersonalMedications")}
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Terms & Conditions */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-orange-600 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {getTranslation(lang, "termsAndConditions")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {getTranslation(lang, "bookingAndPayment")}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • {getTranslation(lang, "fullPaymentRequiredAfterBookingConfirmation")}
                        </li>
                        <li>{getTranslation(lang, "tourPackagesNonRefundable")}</li>
                        <li>
                          {getTranslation(lang, "pricesMayVaryByGroupSizeAndSeason")}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {getTranslation(lang, "cancellationPolicy")}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          {getTranslation(lang, "toursMayBeRescheduledIfNotEnoughParticipants")}
                        </li>
                        <li>
                          {getTranslation(lang, "weatherRelatedCancellationsRescheduled")}
                        </li>
                        <li>
                          {getTranslation(lang, "companyMayChangeRouteIfNecessary")}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {getTranslation(lang, "accommodation")}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          {getTranslation(lang, "hotelListMayChange")}
                        </li>
                        <li>
                          {getTranslation(lang, "hotelsMayBeReplacedWithSimilarOrBetter")}
                        </li>
                        <li>
                          {getTranslation(lang, "hotelsLocatedAlongTourRoute")}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {getTranslation(lang, "liability")}
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          {getTranslation(lang, "companyNotResponsibleForLostItems")}
                        </li>
                        <li>{getTranslation(lang, "helpFindingLostItems")}</li>
                        <li>
                          {getTranslation(lang, "participantsResponsibleForOwnSafety")}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 rounded-full p-2 flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">
                      {getTranslation(lang, "importantNote")}
                    </h3>
                    <p className="text-amber-700 text-sm">
                      {getTranslation(lang, "companyReservesRightToChangeProgramRouteDatesHotelsIfNotEnoughParticipants")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {getTranslation(lang, "readyForAdventure")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {getTranslation(lang, "readyForAdventureDesc")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">{getTranslation(lang, "call")}</h3>
              <p className="text-blue-100">(99) 406-42-14</p>
              <p className="text-blue-100">(99) 124-42-14</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">{getTranslation(lang, "email")}</h3>
              <p className="text-blue-100">moviytravel@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">{getTranslation(lang, "address")}</h3>
              <p className="text-blue-100 text-sm">
                {getTranslation(lang, "address")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">{getTranslation(lang, "workTime")}</h3>
              <p className="text-blue-100">Har kuni: 10:00-20:00</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://instagram.com/moviytravel"
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>{getTranslation(lang, "instagram")}</span>
            </a>
            <a
              href="https://t.me/moviytravel"
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{getTranslation(lang, "telegram")}</span>
            </a>
            <a
              href="https://t.me/+rx-hiHcFGh43YTk6"
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>{getTranslation(lang, "telegramGuruh")}</span>
            </a>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
            asChild
          >
            <a href="tel:+998991244214">
              <Phone className="h-4 w-4 mr-2" />
              {getTranslation(lang, "bookNow")}
            </a>
          </Button>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {lang === "uz" ? "Tashrifingizni bron qiling" : "Забронируйте свой тур"}
          </h2>
          <BookingForm lang={lang} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {/* <Mountain className="h-6 w-6" /> */}
                <span className="text-xl font-bold">
                  <Image
                    style={{ width: "100px", height: "30px" }}
                    src={logo}
                    alt="logo"
                  />
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                {getTranslation(lang, "companyDesc")}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/moviytravel"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/moviytravel"
                  className="text-gray-400 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{getTranslation(lang, "contactInfo")}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{getTranslation(lang, "phone")}: (99) 406-42-14</p>
                <p>{getTranslation(lang, "phone")}: (99) 124-42-14</p>
                <p>{getTranslation(lang, "email")}: moviytravel@gmail.com</p>
                <p>{getTranslation(lang, "website")}: www.moviy-travel.uz</p>
                <p>{getTranslation(lang, "address")}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{getTranslation(lang, "workTime")}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>{getTranslation(lang, "workTime")}: 10:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Moviy Travel. {getTranslation(lang, "barchaHuquqlarHimoyalangan")}.
            </p>
            <p className="text-gray-400 text-sm">
              {getTranslation(lang, "turlar")}: 0-75 {getTranslation(lang, "yosh")}. {getTranslation(lang, "pasportTalabQilinadi")}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add BookingForm component before main export
function BookingForm({ lang }: { lang: Lang }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    days: "",
    language: lang,
    region: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Prepare message text
    const commLang = form.language === "uz" ? "O'zbekcha" : "Русский";
    const message =
      (lang === "uz"
        ? `Yangi bron so'rovi:\n\n`
        : `Новая заявка на тур:\n\n`) +
      `${lang === "uz" ? "Ism, familiya" : "ФИО"}: ${form.name}\n` +
      `${lang === "uz" ? "Telefon raqami" : "Телефон"}: ${form.phone}\n` +
      `${lang === "uz" ? "Kunlar soni" : "Количество дней"}: ${form.days}\n` +
      `${lang === "uz" ? "Aloqa tili" : "Язык общения"}: ${commLang}\n` +
      `${lang === "uz" ? "Hudud" : "Регион"}: ${form.region}\n` +
      `Website: issykkul.moviy-travel.uz`;
    const token = "7522239457:AAHTSgzT2n48lnDU4RhwYTsLysoLIelkbSI";
    const chatId = "-1002180572908";
    try {
      const res = await (window.fetch || fetch)(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );
      if (!res.ok) throw new Error("Telegram API error");
      setSubmitted(true);
    } catch (err: unknown) {
      setError(lang === "uz" ? "Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring." : "Произошла ошибка. Пожалуйста, попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  // Reset form on language change
  useEffect(() => {
    setForm((prev) => ({ ...prev, language: lang }));
  }, [lang]);

  if (submitted) {
    return (
      <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center font-semibold">
        {lang === "uz"
          ? "So'rovingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz."
          : "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время."}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          {lang === "uz" ? "To'liq ismingiz" : "ФИО"}
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={lang === "uz" ? "Ismingizni kiriting" : "Введите ваше имя"}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          {lang === "uz" ? "Telefon raqamingiz" : "Номер телефона"}
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={lang === "uz" ? "+998 99 123-45-67" : "+998 99 123-45-67"}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          {lang === "uz" ? "Necha kunlik tur?" : "Сколько дней тур?"}
        </label>
        <select
          name="days"
          value={form.days}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">{lang === "uz" ? "Tanlang" : "Выберите"}</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          {lang === "uz" ? "Aloqa tili" : "Язык общения"}
        </label>
        <select
          name="language"
          value={form.language}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="uz">O'zbekcha</option>
          <option value="ru">Русский</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          {lang === "uz" ? "Hudud (viloyat/shahar)" : "Регион (область/город)"}
        </label>
        <input
          type="text"
          name="region"
          value={form.region}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={lang === "uz" ? "Masalan: Toshkent" : "Например: Ташкент"}
        />
      </div>
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded text-center font-medium">{error}</div>
      )}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading
          ? (lang === "uz" ? "Yuborilmoqda..." : "Отправка...")
          : (lang === "uz" ? "Yuborish" : "Отправить")}
      </button>
    </form>
  );
}
