import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type Language = 'tr' | 'en' | 'de' | 'ru';

const translations = {
  tr: {
    header: {
      brand: 'Focus Prompter',
      location: 'İstanbul · Türkiye',
      nav: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        projects: 'Yaptığımız İşler',
        faq: 'SSS',
        contact: 'İletişim',
      },
    },
    hero: {
      badge: 'Profesyonel Prompter Operatörlük Hizmeti',
      heading: {
        start: 'Etkinliklerinizi',
        highlight: 'yüksek ritimde',
        end: 'yürütün, sunumunuzu profesyonellere emanet edin.',
      },
      description:
        'Kurulumdan canlı yayına kadar uçtan uca prompter hizmeti sunuyoruz. Deneyimli operatörlerimiz ve broadcast standartlarındaki ekipmanlarımızla kusursuz bir deneyim yaratıyoruz.',
      actions: {
        primary: 'Hemen İletişime Geçin',
        secondary: 'Daha Fazla Bilgi',
      },
      features: [
        'Broadcast seviyesinde ekipman parkuru',
        '15+ yıllık canlı yayın deneyimi',
      ],
      readyLabel: 'Hazır Kurulum',
      imageAlt: 'Profesyonel Prompter Sistemi',
    },
    about: {
      title: 'Hakkımızda',
      intro:
        "Broadcast ve etkinlik sektöründe yılların deneyimiyle, profesyonel prompter operatörlük hizmeti sunan Türkiye'nin önde gelen firmalarından biriyiz.",
      missionTitle: 'Misyonumuz',
      missionParagraphs: [
        'Etkinliklerinize, çekimlerinize ve canlı yayınlarınıza profesyonel prompter ekipmanı ve deneyimli operatör desteği sağlamak. Kurulumdan işletmeye, teknik destekten operatör hizmetine kadar her şeyi tek elden sunarak, müşterilerimizin kusursuz sunumlar gerçekleştirmesini sağlıyoruz.',
        'Küçük ölçekli çekimlerden büyük etkinliklere, kurumsal sunumlardan canlı yayınlara kadar her türlü organizasyona hizmet veriyoruz. Profesyonel ekipmanımız ve uzman ekibimizle projenizin başından sonuna kadar yanınızdayız.',
      ],
      whyTitle: 'Neden Biz?',
      reasons: [
        {
          title: 'Profesyonel Ekipman',
          description: 'Broadcast kalitesinde prompter sistemleri ve yedek ekipmanlar',
        },
        {
          title: 'Deneyimli Kadro',
          description: 'Sektörde 15+ yıllık tecrübeye sahip uzman ekibimiz',
        },
        {
          title: '7/24 Teknik Destek',
          description: 'Kesintisiz müşteri hizmetleri ve teknik destek',
        },
        {
          title: 'Hızlı Mobilizasyon',
          description: 'Acil projelerde hızlı ekip ve ekipman temininde uzmanız',
        },
      ],
      stats: {
        customers: { value: '500+', label: 'Mutlu Müşteri' },
        projects: { value: '500+', label: 'Tamamlanan Proje' },
        experience: { value: '20+', label: 'Yıllık Deneyim' },
      },
    },
    projects: {
      badge: 'Seçili Projeler',
      title: 'Yaptığımız İşler',
      description: 'Türkiye genelindeki etkinlikler ve canlı yayınlar için uçtan uca prompter çözümleri.',
      list: [
        { title: 'İstanbul İş Konferansı 2024', description: 'İstanbul’da düzenlenen iş dünyası konferansı.' },
        { title: 'Ankara Teknoloji Zirvesi', description: 'Teknoloji liderleriyle buluşma.' },
        { title: 'İzmir Sağlık Fuarı', description: 'Sağlık sektöründeki yenilikler.' },
        { title: 'Antalya Turizm Çalıştayı', description: 'Turizm sektöründe iş birliği.' },
        { title: 'Bursa Sanayi Günleri', description: 'Sanayi alanındaki gelişmeler.' },
        { title: 'Adana Tarım Fuarı', description: 'Tarım teknolojileri tanıtımı.' },
        { title: 'Trabzon Lojistik Zirvesi', description: 'Lojistik sektöründe yenilikler.' },
        { title: 'Gaziantep Gıda Fuarı', description: 'Gıda sektöründe iş fırsatları.' },
        { title: 'Konya Otomotiv Çalıştayı', description: 'Otomotiv sektöründe iş birliği.' },
        { title: 'Eskişehir Kültür Zirvesi', description: 'Kültür ve sanat etkinlikleri.' },
      ],
    },
    faq: {
      badge: 'Sıkça Sorulan Sorular',
      title: 'Merak Ettikleriniz',
      description: 'Prompter süreçleri ve hizmet kapsamımızla ilgili en çok sorulan soruları yanıtladık.',
      items: [
        {
          question: 'Prompter operatörü nedir?',
          answer:
            'Prompter operatörü, etkinliklerinizde veya çekimlerinizde prompter sistemini kuran, işleten ve yöneten profesyonel kişidir. Konuşmacının metinleri rahatça okuyabilmesi için hızı ayarlar, teknik aksaklıkları giderir ve tüm süreci yönetir. Fokus Prompter olarak, hem ekipmanı hem de deneyimli operatörü bir arada sunuyoruz.',
        },
        {
          question: 'Hangi tip etkinliklere hizmet veriyorsunuz?',
          answer:
            'Kurumsal etkinlikler, konferanslar, canlı yayınlar, panel organizasyonları, kongre ve seminerler, ürün lansmanları, video çekimleri ve tüm profesyonel sunum gereksinimlerinizde hizmet veriyoruz. Küçük ölçekli çekimlerden büyük organizasyonlara kadar her türlü projeye destek sağlıyoruz.',
        },
        {
          question: 'Rezervasyon ne kadar önceden yapılmalı?',
          answer:
            'İdeal olarak etkinliğinizden en az 1 hafta önce rezervasyon yapmanızı öneriyoruz. Ancak acil durumlar için 24-48 saat öncesinde de hizmet verebiliyoruz. Yoğun sezonlarda daha erken rezervasyon yapmanız avantajlı olacaktır. Tarih uygunluğu için hemen bizimle iletişime geçin.',
        },
        {
          question: 'Fiyatlandırma nasıl yapılıyor?',
          answer:
            'Fiyatlandırmamız etkinliğin süresi, lokasyonu, ekipman ihtiyacı ve hizmet kapsamına göre değişmektedir. Detaylı fiyat teklifi için lütfen bizimle iletişime geçin. Size özel paket hazırlamaktan memnuniyet duyarız.',
        },
        {
          question: 'Kurulum ve söküm dahil mi?',
          answer:
            'Evet, hizmetimiz tam paket olarak sunulmaktadır. Ekipmanın etkinlik yerine taşınması, profesyonel kurulumu, etkinlik boyunca operatör desteği ve sonrasında ekipmanın sökümü fiyata dahildir. Siz sadece sunumunuza odaklanın, teknik detaylar bizden.',
        },
        {
          question: 'İstanbul dışına hizmet veriyor musunuz?',
          answer:
            'Evet, Türkiye genelinde hizmet veriyoruz. İstanbul dışındaki lokasyonlar için ulaşım ve konaklama masrafları ayrıca değerlendirilir. Şehir dışı organizasyonlar için ekibimiz profesyonel ekipman ve deneyimli operatörlerle yanınızda olacaktır.',
        },
      ],
    },
    contact: {
      badge: 'İletişime Geçin',
      title: 'Bize Ulaşın',
      description: 'Sorularınız için bize ulaşın. Size en kısa sürede geri dönüş yapalım.',
      infoTitle: 'İletişim Bilgileri',
      mapTitle: 'Konumumuz',
      cards: {
        address: {
          title: 'Adres',
          lines: ['Kaptan Paşa Mahallesi, Zincirlikuyu Caddesi', 'Ün İş Merkezi NO:169, Kasımpaşa / İstanbul'],
        },
        phone: {
          title: 'Telefon',
          lines: ['+90 532 627 26 51', '+90 544 627 26 54'],
        },
        email: {
          title: 'E-posta',
          lines: ['info@focusdestek.com.tr'],
        },
      },
      hoursTitle: 'Çalışma Saatlerimiz',
      hours: ['7/24 Hizmetinizdeyiz.'],
      form: {
        nameLabel: 'Ad Soyad *',
        namePlaceholder: 'Adınız ve soyadınız',
        emailLabel: 'E-posta *',
        emailPlaceholder: 'ornek@email.com',
        phoneLabel: 'Telefon',
        phonePlaceholder: '+90 5XX XXX XX XX',
        messageLabel: 'Mesajınız *',
        messagePlaceholder: 'Mesajınızı buraya yazın...',
        submit: 'Mesaj Gönder',
        loading: 'İşleniyor...',
      },
      successMessage: 'Mesajınız başarıyla gönderildi! Mail olarak en kısa sürede dönüş yapılacaktır.',
      errorMessage: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
    },
    footer: {
      brand: 'Fokus Prompter',
      tagline: 'Profesyonel prompter operatörlük hizmetleriyle etkinliklerinizde güvenilir ortağınız.',
      quickLinksTitle: 'Hızlı Bağlantılar',
      quickLinks: {
        home: 'Ana Sayfa',
        about: 'Hakkımızda',
        faq: 'SSS',
        contact: 'İletişim',
      },
      contactTitle: 'İletişim',
      address: 'Kaptan Paşa Mah., Zincirlikuyu Cad. Ün NO:169 İş Merkezi, Kasımpaşa/İstanbul',
      phones: '+90 532 627 26 51 / +90 544 627 26 54',
      email: 'info@focusdestek.com.tr',
      copyright: 'Tüm hakları saklıdır.',
    },
  },
  en: {
    header: {
      brand: 'Focus Prompter',
      location: 'Istanbul · Turkey',
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        faq: 'FAQ',
        contact: 'Contact',
      },
    },
    hero: {
      badge: 'Professional Teleprompter Operators',
      heading: {
        start: 'Keep your events',
        highlight: 'perfectly in sync',
        end: 'and leave your presentation to the professionals.',
      },
      description:
        'We deliver end-to-end teleprompter services from setup to live broadcast. Our experienced operators and broadcast-grade equipment ensure a flawless delivery every time.',
      actions: {
        primary: 'Contact Us Now',
        secondary: 'Learn More',
      },
      features: [
        'Broadcast-grade equipment fleet',
        '15+ years of live broadcast experience',
      ],
      readyLabel: 'Ready Setup',
      imageAlt: 'Professional teleprompter system',
    },
    about: {
      title: 'About Us',
      intro:
        'With years of experience in broadcast and live events, we are one of Turkey’s leading providers of professional teleprompter operator services.',
      missionTitle: 'Our Mission',
      missionParagraphs: [
        'We provide professional teleprompter systems and seasoned operators for your events, shoots, and live broadcasts. From installation to operation and technical support, we manage the entire workflow so you can deliver a seamless presentation.',
        'We support every type of organization, from boutique shoots to large-scale events, corporate presentations, and live broadcasts. Our expert team and professional gear stay by your side from start to finish.',
      ],
      whyTitle: 'Why Choose Us?',
      reasons: [
        {
          title: 'Professional Equipment',
          description: 'Broadcast-quality teleprompter systems with backup gear',
        },
        {
          title: 'Experienced Team',
          description: 'Experts with 15+ years in the industry',
        },
        {
          title: '24/7 Technical Support',
          description: 'Uninterrupted customer service and technical assistance',
        },
        {
          title: 'Rapid Deployment',
          description: 'Specialists in providing crews and gear for urgent projects',
        },
      ],
      stats: {
        customers: { value: '500+', label: 'Happy Clients' },
        projects: { value: '500+', label: 'Completed Projects' },
        experience: { value: '20+', label: 'Years of Experience' },
      },
    },
    projects: {
      badge: 'Selected Projects',
      title: 'Our Work',
      description: 'End-to-end teleprompter solutions for events and live broadcasts across Turkey.',
      list: [
        { title: 'Istanbul Business Conference 2024', description: 'A flagship conference for the business community.' },
        { title: 'Ankara Technology Summit', description: 'Where technology leaders come together.' },
        { title: 'Izmir Health Expo', description: 'Showcasing innovations in the healthcare sector.' },
        { title: 'Antalya Tourism Workshop', description: 'Collaboration within the tourism industry.' },
        { title: 'Bursa Industry Days', description: 'Exploring advancements in manufacturing.' },
        { title: 'Adana Agriculture Fair', description: 'Presenting the latest in agricultural technology.' },
        { title: 'Trabzon Logistics Summit', description: 'Innovations in logistics and supply chain.' },
        { title: 'Gaziantep Food Expo', description: 'Business opportunities in the food sector.' },
        { title: 'Konya Automotive Workshop', description: 'Partnerships in the automotive industry.' },
        { title: 'Eskişehir Culture Summit', description: 'Celebrating culture and arts initiatives.' },
      ],
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'What You Want to Know',
      description: 'We have answered the most common questions about our teleprompter services and processes.',
      items: [
        {
          question: 'What does a teleprompter operator do?',
          answer:
            'A teleprompter operator installs, manages, and controls the teleprompter during your event or shoot. They adjust scrolling speed so speakers can read comfortably, resolve technical issues, and oversee the entire process. Focus Prompter provides both the equipment and the experienced operator as one package.',
        },
        {
          question: 'What types of events do you support?',
          answer:
            'We work on corporate events, conferences, live broadcasts, panel sessions, congresses, seminars, product launches, video shoots, and any professional presentation you have in mind. From small productions to large events, we cover every kind of project.',
        },
        {
          question: 'How far in advance should we book?',
          answer:
            'Ideally, book at least one week before your event. For urgent needs we can arrange services within 24–48 hours. During peak seasons, earlier reservations are recommended. Contact us to secure your preferred date.',
        },
        {
          question: 'How do you price your services?',
          answer:
            'Pricing depends on the duration, location, equipment requirements, and scope of service. Reach out for a detailed quote—we will be happy to create a custom package for you.',
        },
        {
          question: 'Does the service include setup and teardown?',
          answer:
            'Yes. Our turnkey service covers transporting the equipment, professional installation, operator support throughout the event, and dismantling afterward. You focus on your presentation; we handle the technical side.',
        },
        {
          question: 'Do you work outside Istanbul?',
          answer:
            'Yes, we operate across Turkey. For locations outside Istanbul, travel and accommodation costs are assessed separately. Wherever your event takes place, our team arrives with professional gear and experienced operators.',
        },
      ],
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Contact Us',
      description: 'Send us your questions and we will get back to you as soon as possible.',
      infoTitle: 'Contact Details',
      mapTitle: 'Our Location',
      cards: {
        address: {
          title: 'Address',
          lines: ['Kaptan Paşa Mahallesi, Zincirlikuyu Caddesi', 'Ün İş Merkezi NO:169, Kasımpaşa / Istanbul'],
        },
        phone: {
          title: 'Phone',
          lines: ['+90 532 627 26 51', '+90 544 627 26 54'],
        },
        email: {
          title: 'Email',
          lines: ['info@focusdestek.com.tr'],
        },
      },
      hoursTitle: 'Working Hours',
      hours: ['Available 24/7.'],
      form: {
        nameLabel: 'Full Name *',
        namePlaceholder: 'Enter your name and surname',
        emailLabel: 'Email *',
        emailPlaceholder: 'name@example.com',
        phoneLabel: 'Phone',
        phonePlaceholder: '+90 5XX XXX XX XX',
        messageLabel: 'Your Message *',
        messagePlaceholder: 'Write your message here...',
        submit: 'Send Message',
        loading: 'Processing...',
      },
      successMessage: 'Your message has been sent successfully! We will reply via email as soon as possible.',
      errorMessage: 'Something went wrong while sending your message. Please try again.',
    },
    footer: {
      brand: 'Focus Prompter',
      tagline: 'Your trusted partner for professional teleprompter operator services.',
      quickLinksTitle: 'Quick Links',
      quickLinks: {
        home: 'Home',
        about: 'About',
        faq: 'FAQ',
        contact: 'Contact',
      },
      contactTitle: 'Contact',
      address: 'Kaptan Paşa Mah., Zincirlikuyu Cad. Ün NO:169 İş Merkezi, Kasımpaşa/Istanbul',
      phones: '+90 532 627 26 51 / +90 544 627 26 54',
      email: 'info@focusdestek.com.tr',
      copyright: 'All rights reserved.',
    },
  },
  de: {
    header: {
      brand: 'Focus Prompter',
      location: 'Istanbul · Türkei',
      nav: {
        home: 'Start',
        about: 'Über uns',
        projects: 'Projekte',
        faq: 'FAQ',
        contact: 'Kontakt',
      },
    },
    hero: {
      badge: 'Professionelle Teleprompter-Operatoren',
      heading: {
        start: 'Führen Sie Ihre Events',
        highlight: 'im perfekten Rhythmus',
        end: 'und überlassen Sie die Präsentation den Profis.',
      },
      description:
        'Wir bieten Teleprompter-Services von der Installation bis zur Live-Übertragung. Mit erfahrenen Operatoren und Broadcast-Equipment sorgen wir für einen reibungslosen Ablauf.',
      actions: {
        primary: 'Jetzt kontaktieren',
        secondary: 'Mehr erfahren',
      },
      features: [
        'Broadcast-tauglicher Equipment-Pool',
        'Über 15 Jahre Live-Übertragungs-Erfahrung',
      ],
      readyLabel: 'Bereit aufgebaut',
      imageAlt: 'Professionelles Teleprompter-System',
    },
    about: {
      title: 'Über uns',
      intro:
        'Mit jahrelanger Erfahrung in Broadcast und Live-Events gehören wir zu den führenden Anbietern für Teleprompter-Operatoren in der Türkei.',
      missionTitle: 'Unsere Mission',
      missionParagraphs: [
        'Wir stellen professionelle Teleprompter-Systeme und erfahrene Operatoren für Ihre Events, Aufnahmen und Live-Übertragungen bereit. Von Aufbau über Betrieb bis Support kümmern wir uns um den gesamten Ablauf, damit Ihre Präsentation perfekt gelingt.',
        'Von kleinen Produktionen bis zu großen Veranstaltungen, von Unternehmenspräsentationen bis zu Live-Streams – wir begleiten jedes Projekt mit unserem Expertenteam und hochwertiger Technik.',
      ],
      whyTitle: 'Warum wir?',
      reasons: [
        {
          title: 'Professionelles Equipment',
          description: 'Teleprompter-Systeme in Broadcast-Qualität mit Ersatztechnik',
        },
        {
          title: 'Erfahrenes Team',
          description: 'Experten mit über 15 Jahren Branchenerfahrung',
        },
        {
          title: '24/7 Technik-Support',
          description: 'Rund-um-die-Uhr Kundenservice und technische Unterstützung',
        },
        {
          title: 'Schnelle Mobilisierung',
          description: 'Spezialisten für kurzfristige Einsätze von Team und Technik',
        },
      ],
      stats: {
        customers: { value: '500+', label: 'Zufriedene Kunden' },
        projects: { value: '500+', label: 'Abgeschlossene Projekte' },
        experience: { value: '20+', label: 'Jahre Erfahrung' },
      },
    },
    projects: {
      badge: 'Ausgewählte Projekte',
      title: 'Unsere Arbeiten',
      description: 'Teleprompter-Gesamtlösungen für Veranstaltungen und Live-Übertragungen in der ganzen Türkei.',
      list: [
        { title: 'Istanbul Business Conference 2024', description: 'Leitkonferenz für die Wirtschaft in Istanbul.' },
        { title: 'Ankara Technologie-Gipfel', description: 'Treffpunkt für führende Technologieexperten.' },
        { title: 'Izmir Gesundheitsmesse', description: 'Neuheiten aus dem Gesundheitssektor.' },
        { title: 'Antalya Tourismus-Workshop', description: 'Zusammenarbeit in der Tourismusbranche.' },
        { title: 'Bursa Industrietage', description: 'Fortschritte in der Fertigungsindustrie.' },
        { title: 'Adana Agrarmesse', description: 'Vorstellung moderner Agrartechnologien.' },
        { title: 'Trabzon Logistik-Gipfel', description: 'Innovationen in Logistik und Supply Chain.' },
        { title: 'Gaziantep Lebensmittelmesse', description: 'Geschäftsmöglichkeiten in der Lebensmittelbranche.' },
        { title: 'Konya Automobil-Workshop', description: 'Partnerschaften in der Automobilindustrie.' },
        { title: 'Eskişehir Kultur-Gipfel', description: 'Initiativen aus Kultur und Kunst.' },
      ],
    },
    faq: {
      badge: 'Häufig gestellte Fragen',
      title: 'Was Sie wissen möchten',
      description: 'Wir beantworten die wichtigsten Fragen zu unseren Teleprompter-Leistungen und Abläufen.',
      items: [
        {
          question: 'Was macht ein Teleprompter-Operator?',
          answer:
            'Der Operator installiert, betreibt und steuert das Teleprompter-System während Ihres Events oder Drehs. Er passt die Scroll-Geschwindigkeit an, löst technische Probleme und überwacht den gesamten Ablauf. Focus Prompter liefert sowohl Equipment als auch erfahrene Operatoren aus einer Hand.',
        },
        {
          question: 'Für welche Events bieten Sie Services an?',
          answer:
            'Wir betreuen Firmenveranstaltungen, Konferenzen, Live-Übertragungen, Panels, Kongresse, Seminare, Produktlaunches, Videodrehs und alle professionellen Präsentationen. Von kleinen Produktionen bis zu Großevents sind wir an Ihrer Seite.',
        },
        {
          question: 'Wie früh sollte man buchen?',
          answer:
            'Optimal ist eine Buchung mindestens eine Woche vor dem Event. Für dringende Anfragen organisieren wir Einsätze innerhalb von 24–48 Stunden. In Hochphasen empfehlen wir frühere Reservierungen. Kontaktieren Sie uns, um Ihren Wunschtermin zu sichern.',
        },
        {
          question: 'Wie gestalten Sie die Preise?',
          answer:
            'Die Preise richten sich nach Dauer, Ort, Equipment-Bedarf und Leistungsumfang. Fordern Sie ein individuelles Angebot an – wir erstellen gern ein passendes Paket.',
        },
        {
          question: 'Sind Aufbau und Abbau inklusive?',
          answer:
            'Ja. Unser Rundum-Service umfasst Transport, professionellen Aufbau, Operator-Unterstützung während des Events und anschließenden Abbau. Sie konzentrieren sich auf Ihre Präsentation, wir übernehmen die Technik.',
        },
        {
          question: 'Arbeiten Sie auch außerhalb von Istanbul?',
          answer:
            'Ja, wir sind in der gesamten Türkei tätig. Für Einsätze außerhalb Istanbuls kalkulieren wir Reise- und Unterkunftskosten separat. Unser Team reist mit professionellem Equipment und erfahrenen Operatoren an jeden Ort.',
        },
      ],
    },
    contact: {
      badge: 'Kontakt aufnehmen',
      title: 'Sprechen Sie uns an',
      description: 'Schreiben Sie uns Ihre Fragen – wir melden uns schnellstmöglich zurück.',
      infoTitle: 'Kontaktinformationen',
      mapTitle: 'Unser Standort',
      cards: {
        address: {
          title: 'Adresse',
          lines: ['Kaptan Paşa Mahallesi, Zincirlikuyu Caddesi', 'Ün İş Merkezi NO:169, Kasımpaşa / Istanbul'],
        },
        phone: {
          title: 'Telefon',
          lines: ['+90 532 627 26 51', '+90 544 627 26 54'],
        },
        email: {
          title: 'E-Mail',
          lines: ['info@focusdestek.com.tr'],
        },
      },
      hoursTitle: 'Arbeitszeiten',
      hours: ['Rund um die Uhr erreichbar.'],
      form: {
        nameLabel: 'Vollständiger Name *',
        namePlaceholder: 'Bitte Namen und Nachnamen eingeben',
        emailLabel: 'E-Mail *',
        emailPlaceholder: 'name@beispiel.de',
        phoneLabel: 'Telefon',
        phonePlaceholder: '+90 5XX XXX XX XX',
        messageLabel: 'Ihre Nachricht *',
        messagePlaceholder: 'Nachricht hier eingeben...',
        submit: 'Nachricht senden',
        loading: 'Wird gesendet...',
      },
      successMessage: 'Ihre Nachricht wurde erfolgreich versendet! Wir melden uns schnellstmöglich per E-Mail.',
      errorMessage: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
    },
    footer: {
      brand: 'Focus Prompter',
      tagline: 'Ihr verlässlicher Partner für professionelle Teleprompter-Operatoren.',
      quickLinksTitle: 'Schnellzugriff',
      quickLinks: {
        home: 'Start',
        about: 'Über uns',
        faq: 'FAQ',
        contact: 'Kontakt',
      },
      contactTitle: 'Kontakt',
      address: 'Kaptan Paşa Mah., Zincirlikuyu Cad. Ün NO:169 İş Merkezi, Kasımpaşa/Istanbul',
      phones: '+90 532 627 26 51 / +90 544 627 26 54',
      email: 'info@focusdestek.com.tr',
      copyright: 'Alle Rechte vorbehalten.',
    },
  },
  ru: {
    header: {
      brand: 'Focus Prompter',
      location: 'Стамбул · Турция',
      nav: {
        home: 'Главная',
        about: 'О нас',
        projects: 'Проекты',
        faq: 'FAQ',
        contact: 'Контакты',
      },
    },
    hero: {
      badge: 'Профессиональные операторы телесуфлёра',
      heading: {
        start: 'Проводите мероприятия',
        highlight: 'в идеальном ритме',
        end: 'и доверьте презентацию профессионалам.',
      },
      description:
        'Мы обеспечиваем полный комплекс услуг телесуфлёра — от установки до прямого эфира. Опытные операторы и оборудование вещательного уровня гарантируют безупречный результат.',
      actions: {
        primary: 'Связаться с нами',
        secondary: 'Узнать больше',
      },
      features: [
        'Оборудование вещательного класса',
        'Более 15 лет опыта прямых трансляций',
      ],
      readyLabel: 'Готовый монтаж',
      imageAlt: 'Профессиональная система телесуфлёра',
    },
    about: {
      title: 'О компании',
      intro:
        'Многолетний опыт в сфере вещания и мероприятий делает нас одним из ведущих поставщиков услуг операторов телесуфлёра в Турции.',
      missionTitle: 'Наша миссия',
      missionParagraphs: [
        'Мы предоставляем профессиональное оборудование телесуфлёра и опытных операторов для ваших мероприятий, съёмок и прямых эфиров. От монтажа до технической поддержки мы берем на себя весь процесс, чтобы ваше выступление прошло безупречно.',
        'Мы работаем с проектами любого масштаба: от камерных съёмок до крупных мероприятий, корпоративных презентаций и прямых трансляций. Наша команда и оборудование сопровождают вас на каждом этапе.',
      ],
      whyTitle: 'Почему мы?',
      reasons: [
        {
          title: 'Профессиональное оборудование',
          description: 'Телесуфлёры вещательного уровня и резервные комплекты',
        },
        {
          title: 'Опытная команда',
          description: 'Эксперты с опытом работы более 15 лет',
        },
        {
          title: 'Техническая поддержка 24/7',
          description: 'Круглосуточная поддержка клиентов и оперативное решение вопросов',
        },
        {
          title: 'Быстрая мобилизация',
          description: 'Эксперты по срочному привлечению команды и техники',
        },
      ],
      stats: {
        customers: { value: '500+', label: 'Довольные клиенты' },
        projects: { value: '500+', label: 'Реализованные проекты' },
        experience: { value: '20+', label: 'Лет опыта' },
      },
    },
    projects: {
      badge: 'Избранные проекты',
      title: 'Наши работы',
      description: 'Комплексные решения телесуфлёра для мероприятий и трансляций по всей Турции.',
      list: [
        { title: 'Стамбульская бизнес-конференция 2024', description: 'Ключевая конференция для делового сообщества.' },
        { title: 'Технологический саммит в Анкаре', description: 'Площадка для встречи лидеров индустрии.' },
        { title: 'Измирская выставка здравоохранения', description: 'Новые разработки в сфере медицины.' },
        { title: 'Антальский туристический воркшоп', description: 'Сотрудничество в отрасли туризма.' },
        { title: 'Промышленные дни в Бурсе', description: 'Последние достижения в производстве.' },
        { title: 'Аданская сельскохозяйственная ярмарка', description: 'Современные агротехнологии.' },
        { title: 'Логистический саммит в Трабзоне', description: 'Инновации в логистике и цепях поставок.' },
        { title: 'Пищевая ярмарка в Газиантепе', description: 'Новые возможности в пищевой промышленности.' },
        { title: 'Автомобильный воркшоп в Конье', description: 'Партнёрства в автоиндустрии.' },
        { title: 'Культурный саммит в Эскишехире', description: 'Инициативы в сфере культуры и искусства.' },
      ],
    },
    faq: {
      badge: 'Часто задаваемые вопросы',
      title: 'Всё, что вы хотели узнать',
      description: 'Мы собрали ответы на самые популярные вопросы о наших услугах и процессе работы.',
      items: [
        {
          question: 'Чем занимается оператор телесуфлёра?',
          answer:
            'Оператор устанавливает, настраивает и управляет телесуфлёром во время вашего мероприятия или съёмки. Он регулирует скорость прокрутки текста, решает технические вопросы и контролирует весь процесс. Focus Prompter предоставляет оборудование и опытного оператора в одном пакете.',
        },
        {
          question: 'На каких мероприятиях вы работаете?',
          answer:
            'Мы обслуживаем корпоративные мероприятия, конференции, прямые эфиры, панельные дискуссии, конгрессы, семинары, презентации продуктов, видеосъёмки и любые профессиональные выступления. От небольших проектов до крупных событий мы всегда рядом.',
        },
        {
          question: 'За сколько заранее нужно бронировать?',
          answer:
            'Оптимально бронировать минимум за неделю до мероприятия. В экстренных случаях мы организуем работу в течение 24–48 часов. В сезон высокой загрузки рекомендуем оформлять заказ заранее. Свяжитесь с нами, чтобы уточнить свободные даты.',
        },
        {
          question: 'Как формируется стоимость?',
          answer:
            'Стоимость зависит от продолжительности, локации, необходимого оборудования и объёма услуг. Свяжитесь с нами за подробным предложением — мы подготовим индивидуальный пакет.',
        },
        {
          question: 'Включены ли монтаж и демонтаж?',
          answer:
            'Да, мы работаем «под ключ»: доставляем оборудование, выполняем профессиональный монтаж, обеспечиваем поддержку оператора на протяжении всего события и проводим демонтаж после окончания. Вы сосредотачиваетесь на выступлении, а мы берём на себя технику.',
        },
        {
          question: 'Работаете ли вы за пределами Стамбула?',
          answer:
            'Да, мы работаем по всей Турции. Для городов вне Стамбула расходы на поездку и проживание рассчитываются отдельно. Где бы ни проходило ваше мероприятие, наша команда приедет с оборудованием и опытом.',
        },
      ],
    },
    contact: {
      badge: 'Связаться с нами',
      title: 'Напишите нам',
      description: 'Задайте свой вопрос — мы ответим в ближайшее время.',
      infoTitle: 'Контактная информация',
      mapTitle: 'Наше расположение',
      cards: {
        address: {
          title: 'Адрес',
          lines: ['Kaptan Paşa Mahallesi, Zincirlikuyu Caddesi', 'Ün İş Merkezi NO:169, Kasımpaşa / Istanbul'],
        },
        phone: {
          title: 'Телефон',
          lines: ['+90 532 627 26 51', '+90 544 627 26 54'],
        },
        email: {
          title: 'Email',
          lines: ['info@focusdestek.com.tr'],
        },
      },
      hoursTitle: 'График работы',
      hours: ['Мы на связи 24/7.'],
      form: {
        nameLabel: 'Полное имя *',
        namePlaceholder: 'Введите имя и фамилию',
        emailLabel: 'Email *',
        emailPlaceholder: 'name@example.com',
        phoneLabel: 'Телефон',
        phonePlaceholder: '+90 5XX XXX XX XX',
        messageLabel: 'Сообщение *',
        messagePlaceholder: 'Напишите своё сообщение здесь...',
        submit: 'Отправить сообщение',
        loading: 'Отправка...',
      },
      successMessage: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами по электронной почте в ближайшее время.',
      errorMessage: 'Во время отправки произошла ошибка. Попробуйте ещё раз.',
    },
    footer: {
      brand: 'Focus Prompter',
      tagline: 'Ваш надёжный партнёр по услугам операторов телесуфлёра.',
      quickLinksTitle: 'Быстрые ссылки',
      quickLinks: {
        home: 'Главная',
        about: 'О нас',
        faq: 'FAQ',
        contact: 'Контакты',
      },
      contactTitle: 'Контакты',
      address: 'Kaptan Paşa Mah., Zincirlikuyu Cad. Ün NO:169 İş Merkezi, Kasımpaşa/Istanbul',
      phones: '+90 532 627 26 51 / +90 544 627 26 54',
      email: 'info@focusdestek.com.tr',
      copyright: 'Все права защищены.',
    },
  },
} as const;

export type TranslationShape = typeof translations['tr'];

type TranslationContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: <T = string>(path: string) => T;
};

const LanguageContext = createContext<TranslationContextValue | null>(null);

const getValue = (obj: unknown, path: string): unknown => {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const value = useMemo<TranslationContextValue>(() => {
    const translate = <T,>(path: string): T => {
      const result = getValue(translations[language], path);
      if (result === undefined) {
        console.warn(`Missing translation for "${path}" in language "${language}"`);
        return path as unknown as T;
      }
      return result as T;
    };

    return {
      language,
      setLanguage,
      translate,
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useI18n must be used within LanguageProvider');
  }
  return context;
}

export const availableLanguages = [
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
] as const;
