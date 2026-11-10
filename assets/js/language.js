(function () {
  'use strict';

  const translations = {
    'Home': 'ပင်မစာမျက်နှာ', 'About Us': 'ကျွန်ုပ်တို့အကြောင်း', 'Our Services': 'ဝန်ဆောင်မှုများ',
    'Contact Us': 'ဆက်သွယ်ရန်', 'Get Quotation': 'ဈေးနှုန်းတောင်းရန်', 'Contact Info': 'ဆက်သွယ်ရန် အချက်အလက်',
    'Our Location': 'လိပ်စာ', 'Phone Number': 'ဖုန်းနံပါတ်', 'Email Address': 'အီးမေးလ်လိပ်စာ',
    'Get In Touch': 'ဆက်သွယ်မေးမြန်းရန်', 'Send Message': 'စာပို့ရန်', 'Loading': 'ပေးပို့နေသည်',
    'Your message has been sent. Thank you!': 'သင့်စာကို ပေးပို့ပြီးပါပြီ။ ကျေးဇူးတင်ပါသည်။',
    'For Any Inquiries': 'သိလိုသည်များအတွက်', 'MORE ABOUT US': 'ကျွန်ုပ်တို့အကြောင်း ပိုမိုသိရှိရန်',
    'Years': 'နှစ်', 'Of experience in business service': 'လုပ်ငန်းဝန်ဆောင်မှု အတွေ့အကြုံ',
    'Email us any inquiries': 'သိလိုသည်များ အီးမေးလ်ပို့ပါ', 'Call us anytime': 'အချိန်မရွေး ဖုန်းဆက်ပါ',
    'Copyright': 'မူပိုင်ခွင့်', 'All Rights Reserved': 'မူပိုင်ခွင့်အားလုံး ရယူထားသည်', 'Developed by': 'ရေးဆွဲသူ',
    'Have a question or need help? Send us a message—we’ll respond as soon as possible.': 'မေးမြန်းလိုသည် သို့မဟုတ် အကူအညီလိုပါသလား။ စာပို့ထားပါ၊ အမြန်ဆုံး ပြန်လည်ဖြေကြားပေးပါမည်။',
    'မိတ်ဆွေတို့ လုပ်ငန်းအတွက် အချိန်နဲ့ ငွေကြေးကုန်ကျမှုကို ကျွန်တော်တို့ရဲ့ ဝန်ဆောင်မှုကနေတစ်ဆင့် ချွေတာလိုက်ပါ။': 'Save time and money for your business with our complete sourcing service.',
    'China Sourcing (တရုတ်ကုန်ပစ္စည်း ဝယ်ယူတင်သွင်းခြင်း ဝန်ဆောင်မှု)': 'China Sourcing (Purchasing and Import Services)',
    'Lucky San Tun ဟာ တရုတ် E-commerce လုပ်ငန်းများအပြင် Alibaba website ကနေတစ်ဆင့် ပစ္စည်း မှာယူလိုတဲ့ လုပ်ငန်းရှင်များအတွက်  ပစ္စည်းမှာယူခြင်း လုပ်ငန်းစဉ် အစ/အဆုံးကို စနစ်တကျ ဝန်ဆောင်မှု ပေးလျက်ရှိပါတယ်။': 'Lucky San Tun provides an organized, end-to-end purchasing service for businesses ordering from Chinese e-commerce platforms and Alibaba.',
    'Lucky San Tun ရဲ့ ဝန်ဆောင်မှုတွေကတော့ - ကုန်ပစ္စည်း ရှာဖွေပေးခြင်း (Sourcing)၊ ကိုယ်ပိုင် လိုဂိုတပ်ဆင်ခြင်းနဲ့ ထုပ်ပိုးခြင်း တို့အပြင် ပစ္စည်း သိမ်းဆည်းပေးခြင်း၊ လေကြောင်း၊ ရေကြောင်းတို့မှတစ်ဆင့် ကုန်စည်ပို့ဆောင်ပေးခြင်းအထိ ပါဝင်ပါတယ်ခင်ဗျာ။': 'Our services include product sourcing, custom branding and packaging, warehousing, and delivery by air or sea.',
    'ကျွန်တော်တို့ရဲ့ ဝန်ဆောင်မှု အစ-အဆုံးအတွက် နှုန်းထားအနည်းငယ်သာ ကျသင့်မှာဖြစ်လို့ မိတ်ဆွေရဲ့ လုပ်ငန်းအတွက် ငွေကြေးအမြတ်အစွန်းလည်း ချန်နိုင်မှာပါ။': 'Our affordable end-to-end service helps you protect your margins and grow your business.',
    'ကျွန်တော်တို့ဟာ တရုတ်နိုင်ငံမှ အရည်အသွေးမြင့် ကုန်ပစ္စည်းများကို တိုက်ရိုက်ဝယ်ယူလိုသူ မိတ်ဆွေများအတွက် ယုံကြည်စိတ်ချရတဲ့ ဝန်ဆောင်မှုကို ပေးမဲ့ အဝယ်တော်များဖြစ်ပါတယ်။ လက်ကားဝယ်ယူခြင်း ဖြစ်စေ၊ တစ်နိုင်တစ်ပိုင်ဖြစ်စေ မိတ်ဆွေတို့အတွက် - တရုတ်ကုန်သည်များနဲ့ ချိတ်ဆက်ပေးခြင်း၊ ပစ္စည်း အော်ဒါတင်ပေးခြင်း၊ ငွေပေးချေခြင်းတို့အပြင် မိတ်ဆွေရဲ့ ဂိုထောင်ထဲ ပစ္စည်းရောက်သည်အထိ ချောမွေ့စွာ ပို့ဆောင်ပေးလျက်ရှိပါတယ်ခင်ဗျာ။': 'We are a trusted buying partner for customers who want quality products directly from China. From supplier communication, ordering, and payment to smooth delivery to your warehouse, we handle the entire process for wholesale and small businesses alike.',
    'ကျွန်တော်တို့ရဲ့ ရည်မှန်းချက်ကတော့ နိုင်ငံရပ်ခြားကနေ စက်ပစ္စည်းတွေ မှာယူတဲ့အခါ ရိုးရှင်းလွယ်ကူဖို့၊ ယုံကြည်စိတ်ချရစေဖို့နဲ့ လူတိုင်း ချိုသာတဲ့ နှုန်းထားနဲ့ ဝယ်ယူနိုင်စေဖို့ ဖြစ်ပါတယ်။ မိတ်ဆွေတို့ တရုတ်ပြည်ကနေ ဈေးဝယ်ယူတဲ့အခါ လွယ်ကူအဆင်ပြေစေဖို့ ကျွန်တော်တို့ရဲ့ အဝယ်တော် အတွေ့အကြုံတွေကို အသုံးပြုပြီး အကောင်းဆုံး ဝန်ဆောင်မှု ပေးနိုင်ကြောင်း အာမခံနိုင်ပါတယ်။': 'Our goal is to make overseas purchasing simple, reliable, and affordable. We use our sourcing experience to give you a smooth and dependable buying experience from China.',
    'ဝန်ဆောင်မှုများ': 'Our Services', 'တရုတ်နိုင်ငံမှ ကုန်ပစ္စည်းများ ဝယ်ယူပေးခြင်း': 'Purchasing products from China',
    'ရောင်းချသူ (Suppliers) များနှင့် ဆက်သွယ်ပြောဆိုပေးခြင်း': 'Communicating with suppliers', 'ငွေပေးချေမှုများ စီမံဆောင်ရွက်ပေးခြင်း': 'Managing payments',
    'သယ်ယူပို့ဆောင်ရေးအတွက် ချောမွေ့အောင် စီစဉ်ပေးခြင်း': 'Coordinating smooth transportation', 'ဝယ်ယူခြင်းလုပ်ငန်းစဉ်အတွင်း မိတ်ဆွေတို့ လိုအပ်ချက်တိုင်းကို ကူညီပေးခြင်း': 'Supporting you throughout the purchasing process',
    'ကုန်ပစ္စည်း ရှာဖွေပေးခြင်း': 'Product Sourcing', 'အလုံးစုံ ပြည့်စုံသော ဝန်ဆောင်မှု': 'Complete End-to-End Service', 'သယ်ယူပို့ဆောင်ရေး ဝန်ဆောင်မှု': 'Shipping & Logistics',
    'မိတ်ဆွေတို့ ဝယ်ယူလိုတဲ့ ပစ္စည်းအမျိုးအစားအကြောင်း ကျွန်တော်တို့ဆီကို Email ကနေတစ်ဆင့် ဆက်သွယ်စုံစမ်းနိုင်သလို တရုတ် ဝက်(ဘ) ဆိုက်များမှာလည်း ကိုယ်တိုင် ရှာဖွေနိုင်ပါတယ်။': 'Tell us what products you need by email, or browse Chinese marketplaces yourself and send us the details.',
    'Lucky San Tun မှာ ကုန်ပစ္စည်း စစ်ဆေးခြင်း၊ ဝယ်ယူမှု စာချုပ်ချုပ်ဆိုခြင်းနဲ့ ဈေးနှုန်း နှိုင်းယှဉ်ခြင်း တို့အပါအဝင် တရုတ်ပြည်မှ ပစ္စည်းမှာယူတဲ့အခါ ပါဝင်တဲ့ လုပ်ငန်းစဉ် အဆင့်တိုင်းအတွက် ဝန်ဆောင်မှုပေးလျက်ရှိပါတယ်။': 'Lucky San Tun supports every step of buying from China, including inspection, purchase agreements, and price comparison.',
    'သင်္ဘောလိုင်း၊ လေကြောင်းလိုင်း များစွာနဲ့ ချိတ်ဆက် အလုပ်လုပ်လျက်ရှိတဲ့အပြင် တရုတ်နှင့် မြန်မာ နှစ်နိုင်ငံစလုံးအတွက် အကောက်ခွန် ရှင်းလင်းရေး (Customs Declaration) လုပ်ငန်းစဉ်များကိုလည်း မိတ်ဆွေအတွက် ဆောင်ရွက်ပေးပါတယ်။': 'We work with multiple sea and air carriers and can arrange customs declarations in both China and Myanmar.',
    'တရုတ်နိုင်ငံမှ ပစ္စည်းများ ဝယ်ယူခြင်း လုပ်ငန်းစဉ်အဆင့်ဆင့်': 'How to Purchase Products from China',
    'ဖော်ပြပါ အဆင့်များကို လိုက်နာခြင်းဖြင့် မြန်မာနိုင်ငံမှ တရုတ်နိုင်ငံသို့ ပစ္စည်းများ ဝယ်ယူပို့ဆောင်မှုကို အောင်မြင်စွာ ဆောင်ရွက်နိုင်မည်ဖြစ်ပါသည်။': 'Follow these steps to purchase and ship products from China to Myanmar successfully.',
    'အဆင့် (၁) -': 'Step 1 —', 'ပစ္စည်းရွေးချယ်ခြင်းနှင့် ဝယ်ယူခြင်း': 'Product Selection & Purchasing', 'အဆင့် (၂) -': 'Step 2 —', 'သယ်ယူပို့ဆောင်ရေး': 'Transportation',
    'အဆင့် (၃) -': 'Step 3 —', 'အကောက်ခွန်နှင့် ဥပဒေရေးရာ': 'Customs & Legal Requirements', 'အဆင့် (၄) မှ (၆) -': 'Steps 4–6 —', 'လက်ခံရရှိခြင်းနှင့် နောက်ဆုံးအဆင့်များ': 'Receiving & Final Steps',
    'ပစ္စည်းရွေးချယ်ခြင်း -': 'Product selection —', 'စျေးနှုန်းညှိနှိုင်းခြင်း -': 'Price negotiation —', 'ငွေပေးချေခြင်း -': 'Payment —',
    'ပို့ဆောင်မှုနည်းလမ်း -': 'Shipping method —', 'ပို့ဆောင်မှု ကုမ္ပဏီ ရွေးချယ်ခြင်း -': 'Choosing a carrier —', 'အကောက်ခွန်လုပ်ငန်းစဉ် -': 'Customs process —', 'စာရွက်စာတမ်းများ -': 'Documents —',
    'ပစ္စည်းစစ်ဆေးခြင်း -': 'Product inspection —', 'အခွန်ပေးဆောင်ခြင်း -': 'Tax payment —', 'ပစ္စည်းပျောက်ဆုံးခြင်း သို့မဟုတ် ပျက်စီးခြင်း -': 'Lost or damaged goods —', 'ပစ္စည်းလက်ခံရယူခြင်း -': 'Receiving goods —', 'ပစ္စည်းများကို အသုံးပြုခြင်း သို့မဟုတ် ရောင်းချခြင်း-': 'Using or selling the goods —',
    'မိတ်ဆွေဝယ်ယူလိုတဲ့ ပစ္စည်းကို ရွေးချယ်ရှာဖွေပါ။ Alibaba, Made-in-China တို့လို အွန်လိုင်းပလက်ဖောင်းတွေက တစ်ဆင့် ကိုယ်တိုင် ဝင်ရောက် ရှာဖွေနိုင်ပါတယ်ခင်ဗျာ။': 'Choose the product you want to buy. You can search directly on platforms such as Alibaba and Made-in-China.',
    'ရောင်းချသူ (supplier) နဲ့ ဈေးနှုန်းညှိနှိုင်းပါ။ ပစ္စည်းအရေအတွက်၊ အရည်အသွေးနဲ့ ပို့ဆောင်ခများကို သေချာစွာ ဆွေးနွေးသင့်ပါတယ်။': 'Negotiate with the supplier and confirm the quantity, quality, and shipping costs carefully.',
    'ဘဏ်လွှဲငွေ၊ Credit Card (သို့) PayPal စသည်ဖြင့် မိတ်ဆွေတို့ နှစ်သက်ရာ နည်းလမ်းနဲ့ ငွေပေးချေနိုင်ပါတယ်ခင်ဗျာ။': 'Pay using your preferred method, such as bank transfer, credit card, or PayPal.',
    'ကြာချိန်ပိုနိုင်ပေမဲ့ ပစ္စည်းများများကို စရိတ်သက်သာစွာ ပို့ရန် -  ရေကြောင်း၊ ကုန်ကျစရိတ် မြင့်ပေမဲ့ အရေးကြီးပစ္စည်းတွေကို အမြန်ဆုံး ပို့ရန် -  လေကြောင်း၊ မြန်မာ - တရုတ် နယ်စပ်ဂိတ်တွေကတစ်ဆင့် ပို့ပေးရန် - ကုန်းကြောင်း စသည်ဖြင့် မိတ်ဆွေတို့ရဲ့ လိုအပ်ချက်အလိုက် နှစ်သက်ရာကို ရွေးချယ်နိုင်ပါတယ်ခင်ဗျာ။': 'Choose sea freight for economical bulk shipping, air freight for urgent goods, or land transport through the Myanmar–China border according to your needs.',
    'မိတ်ဆွေတို့ ယုံကြည်စိတ်ချရတဲ့ ပို့ဆောင်မှု လုပ်ငန်း (cargo) တွေအပြင် DHL, FedEx, UPS စတဲ့ နိုင်ငံတကာကုမ္ပဏီများကိုလည်း ရွေးချယ် အသုံးပြုနိုင်ပါတယ်။': 'Choose a trusted cargo service or an international carrier such as DHL, FedEx, or UPS.',
    'မြန်မာနိုင်ငံသို့ ပစ္စည်းရောက်ရှိတဲ့အခါ ကုန်ပစ္စည်းအမျိုးအစားအပေါ်  မူတည်ပြီး သတ်မှတ်ထားတဲ့ အကောက်ခွန်လုပ်ငန်းစဉ်များကို လုပ်ဆောင်ရပါမယ်။': 'When the goods arrive in Myanmar, complete the required customs procedures based on the product category.',
    'ကုန်သွယ်မှုလိုင်စင်၊ ပစ္စည်းစာရင်း (Packing List)၊ အကောက်ခွန် ကြေညာလွှာ (Declaration) စသည်ဖြင့် ပစ္စည်းတင်သွင်းမှုအတွက် လိုအပ်တဲ့ စာရွက်စာတမ်းတွေကို ပြင်ဆင်ထားရပါမယ်။': 'Prepare the required import documents, including the trade licence, packing list, and customs declaration.',
    'မှာယူထားတဲ့ ပစ္စည်း ရောက်လာတဲ့အခါ အရေအတွက်၊ ပျက်စီးမှု ရှိ/မရှိ စတဲ့ အချက်တွေကို စစ်ဆေးပါ။': 'When your order arrives, check the quantity and inspect it for damage.',
    'ပစ္စည်းများအတွက် အခွန်အခ ပေးဆောင်ပါ။': 'Pay the applicable duties and taxes.',
    'အကယ်၍ ပစ္စည်းပျောက်ဆုံးခြင်း/ပျက်စီးခြင်း ရှိပါက ပို့ဆောင်ရေးကုမ္ပဏီကို ချက်ချင်းဆက်သွယ်ပြီး (အာမခံထားရှိပါက) လျော်ကြေးတောင်းခံပါ။': 'If goods are lost or damaged, contact the carrier immediately and file an insurance claim where applicable.',
    'ပစ္စည်းများကို လက်ခံရယူပြီး လိုအပ်ပါက အကောက်ခွန်ဆိုင်ရာ လုပ်ငန်းစဉ်များကို ဆောင်ရွက်ပါ။': 'Receive the goods and complete any remaining customs formalities.',
    'ပစ္စည်းများကို လက်ခံရယူပြီးပါက စတင် အသုံးပြုနိုင်၊ ရောင်းချနိုင်ပါပြီခင်ဗျာ။': 'Once received, the goods are ready to use or sell.',
    'တရုတ်ကနေ ပစ္စည်းမှာချင်လို့ပဲဖြစ်ဖြစ်၊ ပို့ဆောင်ခတွေအကြောင်း သိချင်လို့ပဲဖြစ်ဖြစ်၊ မှာထားတဲ့ အော်ဒါအတွက် အကူအညီလိုလို့ပဲဖြစ်ဖြစ်—ကျွန်တော်တို့ဆီကို အချိန်မရွေး ဆက်သွယ်နိုင်ပါတယ်ခင်ဗျာ။': 'Whether you want to order from China, ask about shipping costs, or need help with an order, contact us anytime.',
    'ဆက်သွယ်ရန်': 'Contact Us', 'တရုတ်နိုင်ငံမှ ပစ္စည်းမှာယူပုံ၊ ပို့ဆောင်ခနှုန်းထားများ (သို့) မှာယူထားသော အော်ဒါများနှင့် ပတ်သက်၍ သိရှိလိုသည်များရှိပါက ကျွန်တော်တို့ကို အချိန်မရွေး ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်ခင်ဗျာ။': 'Contact us anytime with questions about ordering from China, shipping rates, or an existing order.',
    'အောက်ဖော်ပြပါ အချက်အလက်များမှတစ်ဆင့် ကျွန်ုပ်တို့ထံ အချိန်မရွေး ဆက်သွယ်နိုင်ပါသည်။ လူကြီးမင်း၏ အော်ဒါများနှင့် သိလိုသမျှ မေးမြန်းချက်များကို ကူညီဖြေကြားပေးရန် ကျွန်ုပ်တို့ အသင့်ရှိနေပါသည်။': 'Reach us anytime using the details below. We are ready to help with your orders and answer your questions.',
    'အမှတ် ၆၉၄၊ ၇၂ လမ်း၊': 'No. 694, 72nd Street,', '၃၉ လမ်းနှင့် ၄၀ လမ်းကြား၊ မန္တလေးမြို့။': 'between 39th and 40th Streets, Mandalay.'
  };

  const placeholders = {
    'Your Name': 'အမည်', 'Your Email': 'အီးမေးလ်', 'Subject': 'အကြောင်းအရာ', 'Message': 'ရေးသားလိုသည့်စာ'
  };
  const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([en, my]) => [my, en]));
  const reversePlaceholders = Object.fromEntries(Object.entries(placeholders).map(([en, my]) => [my, en]));
  const textNodes = [];

  function collectTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tag = node.parentElement && node.parentElement.tagName;
        return tag !== 'SCRIPT' && tag !== 'STYLE' && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    while (walker.nextNode()) textNodes.push({ node: walker.currentNode, original: walker.currentNode.nodeValue });
  }

  function translateNode(value, lang) {
    const trimmed = value.trim();
    const isMyanmar = /[\u1000-\u109f\uaa60-\uaa7f]/.test(trimmed);
    const shouldTranslate = (lang === 'en' && isMyanmar) || (lang === 'my' && !isMyanmar);
    const translated = shouldTranslate ? (translations[trimmed] || reverseTranslations[trimmed] || trimmed) : trimmed;
    return value.replace(trimmed, translated);
  }

  function setLanguage(lang, animate) {
    if (animate) document.body.classList.add('language-changing');
    textNodes.forEach(item => { item.node.nodeValue = translateNode(item.original, lang); });
    document.querySelectorAll('[placeholder]').forEach(field => {
      const original = field.dataset.originalPlaceholder || field.placeholder;
      field.dataset.originalPlaceholder = original;
      field.placeholder = lang === 'my' ? (placeholders[original] || original) : (reversePlaceholders[original] || original);
    });
    document.documentElement.lang = lang === 'my' ? 'my' : 'en';
    const switcher = document.querySelector('.language-switcher');
    switcher.dataset.active = lang;
    switcher.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    localStorage.setItem('luckySanTunLanguage', lang);
    if (animate) window.setTimeout(() => document.body.classList.remove('language-changing'), 180);
  }

  collectTextNodes();
  document.querySelectorAll('.language-option').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang, true)));
  setLanguage(localStorage.getItem('luckySanTunLanguage') || 'my', false);
})();
