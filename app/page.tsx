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

function useCountdown(minutes = 15) {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutesLeft = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const secondsLeft = String(timeLeft % 60).padStart(2, "0");

  return `${minutesLeft}:${secondsLeft}`;
}

export default function IssykKulTour() {
  const countdown = useCountdown(15);
  const tourPackages = [
    {
      id: "2-day",
      title: "Dam Olish Sayohati",
      duration: "2 Kun / 1 Kecha",
      departure: "Har Juma Kunlari",
      departureTime: "18:00 - 19:00",
      returnTime: "Dushanba 06:00",
      priceJuly: 180,
      priceAugust: 160,
      hotels: ["ESAL Mehmonxona", "MANAS ATA Mehmonxona"],
      nights: 1,
      itinerary: [
        {
          day: 1,
          title: "Kelish va Kashf Etish",
          activities: [
            "Chegaradan o'tish (Qirg'iziston Respublikasi)",
            "Valyuta almashtirish",
            "Issiq Ko'lga tashrif",
            "Cho'lpon-Ota bog'iga tashrif",
            "Tushlik",
            "Plyajda dam olish (18:00 gacha)",
            "Qaynar buloqqa chiqish",
            "Kechki ovqat",
            "Diskoteka",
          ],
        },
        {
          day: 2,
          title: "Jo'nash Kuni",
          activities: [
            "Nonushta",
            "Plyajga chiqish",
            "Mehmonxona xonalarini topshirish",
            "Grigorievskoe darasi (ixtiyoriy)",
            "Yoki plyajda qolish (teploxod vaqtigacha)",
            "Teploxod sayohati",
            "Bishkekdan jo'nash (19:00)",
            "Toshkentga qaytish",
          ],
        },
      ],
    },
    {
      id: "4-day",
      title: "Klassik Tajriba",
      duration: "4 Kun / 3 Kecha",
      departure: "Har Chorshanba Kunlari",
      departureTime: "18:00 - 19:00",
      returnTime: "Dushanba 06:00",
      priceJuly: 260,
      priceAugust: 240,
      hotels: ["ESAL Mehmonxona", "AVGUST Mehmonxona"],
      nights: 3,
      itinerary: [
        {
          day: 1,
          title: "Kelish va Kutib Olish",
          activities: [
            "Chegaradan o'tish (Qirg'iziston Respublikasi)",
            "Valyuta almashtirish",
            "Issiq Ko'lga tashrif",
            "Mehmonxonaga joylashish",
            "Tushlik",
            "Bo'sh vaqt (Suzish yoki Plyaj)",
            "Qaynar buloqqa chiqish",
            "Kechki ovqat",
            "Diskoteka",
          ],
        },
        {
          day: 2,
          title: "Tog' Sarguzashtlari",
          activities: [
            "Nonushta",
            "Tog'lar orasida sayohat (Grigorievskoe darasi)",
            "Baliqchilik",
            "Ot minish",
            "Mahalliy taomlardan degustatsiya",
            "Kvadratsikl",
            "Mehmonxonada tushlik",
            "Issiq ko'l bo'ylab kemada sayohat",
            "Prezident bo'g'iga sayohat",
            "Kechki ovqat va Dam olish",
          ],
        },
        {
          day: 3,
          title: "Plyaj va Ko'ngilochar",
          activities: [
            "Nonushta",
            "Plyaj kuni",
            "Tushlik",
            "Suv atraktsionlarida uchish",
            "Kechki ovqat",
            "Cho'lpon Ota bog'ida kechki sayr",
            "Kechki ovqat",
          ],
        },
        {
          day: 4,
          title: "Jo'nash",
          activities: [
            "Nonushta",
            "Plyaj kuni",
            "Issiq Ko'ldan chiqib ketish (12:00)",
            "Bishkekdan chiqib ketish",
            "TsUM xarid qilish",
            "Esdalik uchun suvenirlar olish",
            "Chegaradan chiqib ketish",
            "Uyga qaytish (22:00)",
          ],
        },
      ],
    },
    {
      id: "5-day",
      title: "To'liq Sarguzasht",
      duration: "5 Kun / 4 Kecha",
      departure: "Har Shanba Kunlari",
      departureTime: "18:00 - 19:00",
      returnTime: "Juma 06:00",
      priceJuly: 290,
      priceAugust: 270,
      hotels: ["ESAL Mehmonxona", "AVGUST Mehmonxona"],
      nights: 4,
      itinerary: [
        {
          day: 1,
          title: "Kelish va Birinchi Taassurotlar",
          activities: [
            "Chegaradan o'tish (Qirg'iziston Respublikasi)",
            "Valyuta almashtirish",
            "Issiq Ko'lga tashrif",
            "Mehmonxonaga joylashish",
            "Tushlik",
            "Bo'sh vaqt (Suzish yoki Plyaj)",
            "Qaynar buloqqa chiqish",
            "Kechki ovqat",
          ],
        },
        {
          day: 2,
          title: "Tog' Sarguzashtlari",
          activities: [
            "Nonushta",
            "Tog'lar orasida sayohat (Grigorievskoe darasi)",
            "Baliqchilik",
            "Ot minish",
            "Mahalliy taomlardan degustatsiya",
            "Kvadratsikl",
            "Mehmonxonada tushlik",
            "Issiq ko'l bo'ylab kemada sayohat",
            "Prezident bo'g'iga sayohat",
            "Kechki ovqat va Dam olish",
          ],
        },
        {
          day: 3,
          title: "Plyaj va Suv O'yinlari",
          activities: [
            "Nonushta",
            "Plyaj kuni",
            "Tushlik",
            "Suv atraktsionlarida uchish",
            "Kechki ovqat",
            "Cho'lpon Ota bog'ida kechki sayr",
            "Kechki ovqat",
          ],
        },
        {
          day: 4,
          title: "Dam Olish Kuni",
          activities: [
            "Mehmonxonada nonushta",
            "Plyajda dam olish",
            "Tushlik",
            "Kechki ovqat",
          ],
        },
        {
          day: 5,
          title: "Jo'nash",
          activities: [
            "Nonushta",
            "Plyaj kuni",
            "Issiq Ko'ldan chiqib ketish (12:00)",
            "Bishkekdan chiqib ketish",
            "TsUM xarid qilish",
            "Esdalik uchun suvenirlar olish",
            "Chegaradan chiqib ketish",
            "Uyga qaytish (22:00)",
          ],
        },
      ],
    },
    {
      id: "7-day",
      title: "Mukammal Dam Olish",
      duration: "7 Kun / 6 Kecha",
      departure: "Har Shanba Kunlari",
      departureTime: "18:00 - 19:00",
      returnTime: "Yakshanba 05:00",
      priceJuly: 370,
      priceAugust: 350,
      hotels: ["ESAL Mehmonxona", "MANAS ATA Mehmonxona"],
      nights: 6,
      itinerary: [
        {
          day: 1,
          title: "Kelish va Kutib Olish",
          activities: [
            "Chegaradan o'tish (Qirg'iziston Respublikasi)",
            "Valyuta almashtirish",
            "Issiq Ko'lga tashrif",
            "Mehmonxonaga joylashish",
            "Tushlik",
            "Bo'sh vaqt (Suzish yoki Plyaj)",
            "Qaynar buloqqa chiqish",
            "Kechki ovqat",
            "Kechki plyajda sayr",
          ],
        },
        {
          day: 2,
          title: "Madaniyat va Kruiz",
          activities: [
            "Nonushta",
            "Plyajda dam olish",
            "Tushlik",
            "Teploxodda sayr",
            "Kechki ovqat",
            "Prezident bo'g'iga sayohat",
            "Diskoteka",
          ],
        },
        {
          day: 3,
          title: "Tabiat va Sarguzasht",
          activities: [
            "Nonushta",
            "Daralarga sayohat",
            "Ot minish",
            "Sharshara ko'rish",
            "Forel balig'idan degustatsiya",
            "Baliqchilik",
            "Kvadratsikl",
            "Mehmonxonada tushlik",
            "Erkin vaqt",
            "Plyaj",
            "Kechki ovqat",
          ],
        },
        {
          day: 4,
          title: "Sof Dam Olish",
          activities: [
            "Mehmonxonada nonushta",
            "Plyajda dam olish",
            "Tushlik",
            "Kechki ovqat",
          ],
        },
        {
          day: 5,
          title: "Plyaj Kuni",
          activities: [
            "Mehmonxonada nonushta",
            "Plyajda dam olish",
            "Tushlik",
            "Kechki ovqat",
          ],
        },
        {
          day: 6,
          title: "Oxirgi Plyaj Kuni",
          activities: [
            "Mehmonxonada nonushta",
            "Plyajda dam olish",
            "Tushlik",
            "Kechki ovqat",
          ],
        },
        {
          day: 7,
          title: "Jo'nash",
          activities: [
            "Nonushta",
            "Issiq Ko'ldan chiqib ketish (12:00)",
            "Esdalik uchun suvenirlar olish",
            "Chegaradan chiqib ketish",
            "Shimkentga kelish (19:00)",
          ],
        },
      ],
    },
  ];

  const included = [
    "Borish kelish transport",
    "Spalniy avtobus",
    "Gid hizmati yo’l boshlovchi",
    "Mehmonxona turar joyi",
    "Kuniga 3 marta ovqatlanish",
    "Professional gid",
    "Barcha transferlar",
    "Yaxta kruizi",
    "Qaynar buloqqa kirish",
    "Grigorskiy tog’lariga sayohat",
    "Har hil plyajlarga olib borish",
  ];

  const notIncluded = [
    "Ko'ngilochar xizmatlar",
    "Forel baliqchiligi",
    "Ot minish",
    "Yo’lda ovqatlanish",
    "Suv ateraksionlaridan foydalanish:4$-20$",
    "Tog’da kvadratsikl uchish:5$",
    "Farel baliqlari bilan taomlanish:1kg 15$",
    "Ot minish:5$",
    "Burgut bilan rasmga tushish:3$",
  ];

  const landscapeImages = [
    { src: "/images/foto1.jpg", alt: "Issiq Ko'lning toza suvlari" },
    { src: "/images/foto2.jpg", alt: "Issiq Ko'lning toza suvlari" },
    // { src: "/images/lake-view-2.jpg", alt: "Ko'lda tog'larning aksi" },
    { src: "/images/foto3.jpg", alt: "Issiq Ko'lning toza suvlari" },
    { src: "/images/foto4.jpg", alt: "Ulug'vor tog' tizmalari" },
    { src: "/images/foto5.jpg", alt: "Ulug'vor tog' tizmalari" },
    { src: "/images/foto6.jpg", alt: "Ulug'vor tog' tizmalari" },
    { src: "/images/foto7.jpg", alt: "Qor bilan qoplangan cho'qqilar" },
    { src: "/images/foto8.jpg", alt: "Billur toza ko'l suvlari" },
    // { src: "/images/mountains-3.jpg", alt: "Dramatik tog' manzaralari" },
    { src: "/images/lake-view-4.jpg", alt: "Issiq Ko'lda quyosh botishi" },
    { src: "/images/mountains-2.jpg", alt: "Alp manzaralari" },
  ];

  const activityImages = [
    {
      src: "/images/activities/horse-riding.png",
      alt: "Ot Minish",
      title: "Ot Minish",
    },
    {
      src: "/images/foto2.jpg",
      alt: "Sohil(plyaj)",
      title: "Sohil(plyaj)",
    },
    {
      src: "/images/activities/quadracycle.png",
      alt: "Kvadratsikl",
      title: "Kvadratsikl",
    },
    {
      src: "/images/activities/boat-cruise.png",
      alt: "Qayiq Kruizi",
      title: "Qayiq Kruizi",
    },
    // { src: "/images/hot-springs.jpg", alt: "Qaynar Buloqlar", title: "Qaynar Buloqlar" },
    {
      src: "/images/activities/swing.png",
      alt: "Arg`imchoqlar",
      title: "Arg`imchoqlar",
    },
    // { src: "/images/water-sports.jpg", alt: "Suv Sporti", title: "Suv Sporti" },
    // { src: "/images/mountain-hiking.jpg", alt: "Tog'ga Chiqish", title: "Tog'ga Chiqish" },
    {
      src: "/images/activities/bitch.png",
      alt: "Plyaj Faoliyatlari",
      title: "Plyaj Faoliyatlari",
    },
  ];

  const hotelImages = [
    {
      src: "/images/esal-hotel.jpg",
      name: "ESAL Mehmonxona",
      features: "Ko'l bo'yidagi xonalar, Zamonaviy qulayliklar",
    },
    {
      src: "/images/avgust-hotel.jpg",
      name: "AVGUST Mehmonxona",
      features: "Premium qulaylik, Ajoyib joylashuv",
    },
    {
      src: "/images/manas-ata-hotel.jpg",
      name: "MANAS ATA Mehmonxona",
      features: "An'anaviy uslub, A'lo xizmat",
    },
  ];

  const foodImages = [
    { src: "/images/dishes/manti.png", alt: "Manti", title: "Manti" },
    {
      src: "/images/dishes/beshbarmak.png",
      alt: "Beshbarmoq",
      title: "Beshbarmoq",
    },
    // { src: "/images/dishes/boortsog.png", alt: "Bo`vursoq", title: "Bo`vursoq" },
    // { src: "/images/mountain-honey.jpg", alt: "Tog' Asali", title: "Tog' Asali" },
    // { src: "/images/dairy-products.jpg", alt: "Sut Mahsulotlari", title: "Sut Mahsulotlari" },
    // { src: "/images/grilled-meat.jpg", alt: "Panjara Go'sht", title: "Panjara Go'sht" },
    // { src: "/images/local-fruits.jpg", alt: "Mahalliy Mevalar", title: "Mahalliy Mevalar" },
    // { src: "/images/tea-culture.jpg", alt: "Choy Madaniyati", title: "Choy Madaniyati" },
  ];

  const memoryImages = [
    {
      src: "/images/sunset-lake.jpg",
      title: "Ko'lda Quyosh Botishi",
      description: "Issiq Ko'lda oltin soat sehri",
    },
    {
      src: "/images/group-adventures.jpg",
      title: "Guruh Sarguzashtlari",
      description: "Dunyo bo'ylab do'stlar orttirish",
    },
    {
      src: "/images/cultural-exchange.jpg",
      title: "Madaniy Almashish",
      description: "Qirg'iz an'analarini o'rganish",
    },
    // {
    //   src: "/images/mountain-peaks.jpg",
    //   title: "Tog' Cho'qqilari",
    //   description: "Daralardan hayratlanarli manzaralar",
    // },
    {
      src: "/images/beach-relaxation.jpg",
      title: "Plyajda Dam Olish",
      description: "Suv yonida mukammal lahzalar",
    },
    {
      src: "/images/local-markets.jpg",
      title: "Mahalliy Bozorlar",
      description: "Asl suvenirlar xarid qilish",
    },
  ];

  const videos = [
    {
      src: "/videos/lake-views.mp4",
      title: "Billur Toza Suvlar",
      description: "Issiq Ko'lning toza suvlarining ajoyib havo manzaralari",
      thumbnail: "/images/lake-view-1.jpg",
    },
    {
      src: "/videos/mountain-adventures.mp4",
      title: "Tog' Sarguzashtlari",
      description: "Ot minish va kvadratsikl sarguzashtlari",
      thumbnail: "/images/mountains-1.jpg",
    },
    {
      src: "/videos/cultural-experiences.mp4",
      title: "Madaniy Tajribalar",
      description: "Mahalliy taomlarni tatib ko'rish va madaniy faoliyatlar",
      thumbnail: "/images/cultural-exchange.jpg",
    },
  ];

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
              Bir Nechta Tur Variantlari Mavjud
            </Badge>
            <h1
              className="text-5xl bg-[#00c9c7]/80 font-bold mb-6"
              style={{
                maxWidth: "550px",
                padding: "4px 5px 4px 5px",
                borderRadius: "5px",
              }}
            >
              Issiq Ko'lni Kashf Eting
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
              O'zingizga Mos Sarguzashtni Tanlang
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
              Dam olish sayohatlaridan tortib to mukammal dam olish
              paketlarigacha - O'rta Osiyoning marvaridini bizning moslashuvchan
              tur variantlarimiz bilan his eting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Turlarni Ko'rish - $180 dan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#00c9c7]/80 bg-[#00c9c7]/80 text-white hover:bg-white/10 "
                asChild
              >
                <a href="tel:+998991244214">
                  <Phone className="h-4 w-4 mr-2" />
                  Turingizni Bron Qiling
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
              Mukammal Turingizni Tanlang
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Issiq Ko'lda noyob tajribalar taqdim etish uchun ehtiyotkorlik
              bilan yaratilgan tur paketlarimizdan birini tanlang.
            </p>
          </div>

          <Tabs defaultValue="2-day" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {tourPackages.map((tour) => (
                <TabsTrigger key={tour.id} value={tour.id}>
                  {tour.duration.split(" ")[0]} Kun
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
                        <CardTitle className="text-2xl">{tour.title}</CardTitle>
                        <CardDescription className="text-blue-100">
                          {tour.duration}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6 space-y-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{tour.departure}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">{tour.departureTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span className="text-sm">
                            Qaytish: {tour.returnTime}
                          </span>
                        </div>

                        {/* Narxlar + Taymer */}
                        <div className="border-t pt-4">
                          <div className="text-center space-y-4">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                              {/* Iyul */}
                              <div className="bg-blue-50 px-4 py-2 rounded-md shadow w-full sm:w-auto">
                                <div className="text-sm text-gray-500 mb-1">
                                  Iyul
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
                                  Aksiya narxi
                                </div>
                              </div>

                              {/* Avgust */}
                              <div className="bg-orange-50 px-4 py-2 rounded-md shadow w-full sm:w-auto">
                                <div className="text-sm text-gray-500 mb-1">
                                  Avgust
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
                                  Aksiya narxi
                                </div>
                              </div>
                            </div>

                            {/* Taymer */}
                            <div className="mt-2">
                              {countdown !== "00:00" ? (
                                <div className="inline-block bg-red-100 text-red-700 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                                  Aksiya tugashiga {countdown} qoldi!
                                </div>
                              ) : (
                                <div className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                                  Aksiya muddati tugadi
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
                              {tour.title} Bron Qilish
                            </a>
                          </Button>
                        </div>

                        {/* Mehmonxonalar */}
                        <div className="border-t pt-4">
                          <h4 className="font-semibold mb-2">Mehmonxonalar:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {tour.hotels.map((hotel, index) => (
                              <li
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                <span>{hotel}</span>
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
                        <CardTitle>Kun-Kunlik Dastur</CardTitle>
                        <CardDescription>
                          {tour.duration} sarguzashtingiz uchun batafsil jadval
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
                                {day.title}
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
                                    {activity}
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
              Barcha Paketlarni Solishtiring
            </h2>
            <p className="text-gray-600">
              Barcha tur variantlarimizning qisqacha ko'rinishi
            </p>
            <div className="mt-2">
              {countdown !== "00:00" ? (
                <div className="inline-block bg-red-100 text-red-700 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                  Aksiya tugashiga {countdown} qoldi!
                </div>
              ) : (
                <div className="inline-block bg-gray-100 text-gray-600 text-sm px-4 py-1 rounded-full font-medium shadow-sm">
                  Aksiya muddati tugadi
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
                  <CardTitle className="text-lg">{tour.title}</CardTitle>
                  <CardDescription>{tour.duration}</CardDescription>
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
                      {tour.departure}
                    </div>
                    <div className="text-sm text-gray-600">
                      {tour.nights} kecha
                    </div>
                    <Button size="sm" className="w-full mt-4" asChild>
                      <a href="tel:+998991244214">
                        <Phone className="h-4 w-4 mr-2" />
                        Tanlash
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
              Tur Xotiralari
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sayohatchilarimizning ko'zlari orqali Issiq Ko'lning sehrini his
              eting. Hayratlanarli manzaralar, qiziqarli faoliyatlar va
              turlarimizdan unutilmas lahzalarni ko'ring.
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
              Foto Galereya
            </h3>

            {/* Gallery Categories */}
            <Tabs defaultValue="landscapes" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="landscapes">Manzaralar</TabsTrigger>
                <TabsTrigger value="activities">Faoliyatlar</TabsTrigger>
                <TabsTrigger value="hotels">Mehmonxonalar</TabsTrigger>
                <TabsTrigger value="food">Mahalliy Taomlar</TabsTrigger>
                <TabsTrigger value="memories">Xotiralar</TabsTrigger>
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
                          alt={image.alt}
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
                          alt={activity.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <p className="text-white text-sm font-medium">
                            {activity.title}
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
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">{hotel.name}</h4>
                        <p className="text-sm text-gray-600">
                          {hotel.features}
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
                          alt={food.alt}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                          <p className="text-white text-sm font-medium">
                            {food.title}
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
                          alt={memory.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="text-white font-semibold mb-1">
                            {memory.title}
                          </h4>
                          <p className="text-white/90 text-sm">
                            {memory.description}
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
              Nima Kiritilgan
            </h2>
            <p className="text-gray-600">
              Barcha paketlar ushbu muhim xizmatlarni o'z ichiga oladi
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Barcha Paketlarga Kiritilgan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {included.map((item, index) => (
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
                  Shaxsiy xarajatlariz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {notIncluded.map((item, index) => (
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
              Tur Talablari va Shartlari
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tur tajribangiz xavfsiz, qulay va esda qolarli bo'lishini
              ta'minlash uchun muhim ma'lumotlar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Tur Talablari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Haqiqiy Pasport Talab Qilinadi
                      </span>
                      <p className="text-sm text-gray-600">
                        Tur davomida pasportingiz doimo yoningizda bo'lishi
                        kerak
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Yosh Chegarasi: 0-75 Yosh
                      </span>
                      <p className="text-sm text-gray-600">
                        Turlar chaqaloqlardan keksalargacha barcha yoshlar uchun
                        mos
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Asosiy Jismoniy Tayyorgarlik
                      </span>
                      <p className="text-sm text-gray-600">
                        Ba'zi faoliyatlar o'rtacha jismoniy faollikni talab
                        qiladi
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Suzish Qobiliyati (Ixtiyoriy)
                      </span>
                      <p className="text-sm text-gray-600">
                        Suv faoliyatlari uchun, garchi qutqaruv jiletlari
                        beriladi
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Sayohat Sug'urtasi Tavsiya Etiladi
                      </span>
                      <p className="text-sm text-gray-600">
                        Biz keng qamrovli sayohat sug'urtasini tavsiya qilamiz
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
                  Nima Olib Kelish Kerak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Qulay Kiyimlar
                      </span>
                      <p className="text-sm text-gray-600">
                        O'zgaruvchan tog' ob-havosi uchun qatlamli kiyimlar
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Suzish Kiyimlari va Plyaj Jihozlari
                      </span>
                      <p className="text-sm text-gray-600">
                        Ko'l faoliyatlari va plyajda dam olish uchun
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Quyoshdan Himoya
                      </span>
                      <p className="text-sm text-gray-600">
                        Baland tog'lar uchun quyosh kremi, shlyapa va ko'zoynak
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Qulay Yurish Oyoq Kiyimlari
                      </span>
                      <p className="text-sm text-gray-600">
                        Piyoda yurish va ochiq havo faoliyatlari uchun
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Shaxsiy Dorilar
                      </span>
                      <p className="text-sm text-gray-600">
                        Kerakli retseptli yoki shaxsiy dorilar
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
                  Shartlar va Qoidalar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Bron Qilish va To'lov
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • Bron tasdiqlangandan keyin to'liq to'lov talab
                          qilinadi
                        </li>
                        <li>• Tur paketlari qaytarilmaydi</li>
                        <li>
                          • Narxlar guruh hajmi va mavsumga qarab o'zgarishi
                          mumkin
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Bekor Qilish Siyosati
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • Ishtirokchilar yetarli bo'lmasa turlar qayta
                          rejalashtirilishi mumkin
                        </li>
                        <li>
                          • Ob-havo bilan bog'liq bekor qilinishlar qayta
                          rejalashtiriladi
                        </li>
                        <li>
                          • Kompaniya kerak bo'lsa marshrutni o'zgartirish
                          huquqini saqlab qoladi
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Turar Joy
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • Mehmonxonalar ro'yxati taxminiy va o'zgarishi mumkin
                        </li>
                        <li>
                          • Mehmonxonalar bir xil yoki yuqori toifadagi bilan
                          almashtirilishi mumkin
                        </li>
                        <li>
                          • Mehmonxonalar tur marshrutidagi hududlarda
                          joylashgan
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Javobgarlik
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                          • Kompaniya yo'qolgan yoki tashlab ketilgan buyumlar
                          uchun javobgar emas
                        </li>
                        <li>• Yo'qolgan narsalarni topishda yordam beriladi</li>
                        <li>
                          • Ishtirokchilar shaxsiy xavfsizlik uchun javobgar
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
                      Muhim Eslatma
                    </h3>
                    <p className="text-amber-700 text-sm">
                      Kompaniya dasturga o'zgartirishlar kiritish, marshrutni,
                      jo'nash sanalari va vaqtlarini o'zgartirish, shuningdek
                      dasturda ko'rsatilgan mehmonxonalarni o'zgartirish
                      huquqini o'zida saqlab qoladi. Agar guruhdagi
                      ishtirokchilar soni yetarli bo'lmasa tur keyingi mavjud
                      sanaga ko'chirilishi yoki bekor qilinishi mumkin. Barcha
                      ishtirokchilar tur davomida pasportlarini olib yurishlari
                      kerak.
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
            Sarguzashtingizga Tayyormisiz?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mukammal Issiq Ko'l turingizni tanlang va umr bo'yi esda qoladigan
            xotiralar yarating.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Qo'ng'iroq Qiling</h3>
              <p className="text-blue-100">(99) 406-42-14</p>
              <p className="text-blue-100">(99) 124-42-14</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-blue-100">moviytravel@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Ofis Manzili</h3>
              <p className="text-blue-100 text-sm">
                Chilonzor tumani Neus biznes center
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 mb-2" />
              <h3 className="font-semibold mb-1">Ish Vaqti</h3>
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
              <span>Instagram</span>
            </a>
            <a
              href="https://t.me/moviytravel"
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Telegram</span>
            </a>
            <a
              href="https://t.me/moviytravel_group"
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>Telegram Guruh</span>
            </a>
          </div>

          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
            asChild
          >
            <a href="tel:+998991244214">
              <Phone className="h-4 w-4 mr-2" />
              Hoziroq Turingizni Bron Qiling
            </a>
          </Button>
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
                Issiq Ko'lga eng yaxshi turlarni taklif qiluvchi ishonchli
                sayohat kompaniyasi.
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
              <h3 className="font-semibold mb-4">Aloqa Ma'lumotlari</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📞 (99) 406-42-14</p>
                <p>📞 (99) 124-42-14</p>
                <p>✉️ moviytravel@gmail.com</p>
                <p>🌐 www.moviy-travel.uz</p>
                <p>📍 Chilonzor tumani Neus biznes center</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ish Vaqti</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Har kuni: 10:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Moviy Travel. Barcha huquqlar himoyalangan.
            </p>
            <p className="text-gray-400 text-sm">
              Turlar 0-75 yosh uchun mavjud. Pasport talab qilinadi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
