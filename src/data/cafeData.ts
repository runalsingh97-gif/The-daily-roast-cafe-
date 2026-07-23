import { MenuItem, GalleryItem } from '../types';

export const CAFE_INFO = {
  name: "The Daily Roast Cafe",
  tagline: "Crafted Coffee, Cozy Moments & Great Conversations",
  description: "Your sanctuary in the city. Work-friendly atmosphere, single-origin artisanal brews, sourdough bakes, and peaceful corners.",
  address: "42 Roasted Bean Boulevard, Artisanal Quarter, Sector 5",
  city: "Downtown Metro",
  phone: "+1 (555) 382-7627",
  whatsappNumber: "15553827627",
  email: "hello@thedailyroastcafe.com",
  openingHours: {
    weekdays: "8:00 AM - 11:00 PM",
    weekends: "8:00 AM - 11:30 PM",
    openHour24: 8,
    closeHour24: 23,
  },
  swiggyUrl: "https://www.swiggy.com",
  zomatoUrl: "https://www.zomato.com",
  spotifyPlaylistUrl: "https://open.spotify.com",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537363153166!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
};

export const USP_LIST = [
  {
    id: "wifi",
    title: "Free High-Speed Wi-Fi",
    description: "Gigabit fiber with dedicated work zones & uninterrupted streaming.",
    iconName: "Wifi"
  },
  {
    id: "outlets",
    title: "Power Outlets at Every Table",
    description: "Built-in AC sockets & USB-C fast charging stations throughout.",
    iconName: "Zap"
  },
  {
    id: "pet-friendly",
    title: "Pet Friendly Patio",
    description: "Paws welcome! Complimentary pup-cups and shaded garden seating.",
    iconName: "Dog"
  },
  {
    id: "organic-beans",
    title: "100% Organic Beans",
    description: "Direct-trade, single-origin Arabica beans roasted in small batches weekly.",
    iconName: "Coffee"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // HOT COFFEE
  {
    id: "hc-1",
    title: "Signature Velvet Cappuccino",
    description: "Rich double shot espresso topped with silky micro-foam and a dust of single-origin dark cocoa.",
    category: "hot-coffee",
    price: 4.80,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    isBestseller: true,
    calories: "140 kcal"
  },
  {
    id: "hc-2",
    title: "Salted Caramel Oat Milk Latte",
    description: "Smooth espresso blended with creamy oat milk and house-made Himalayan pink salt caramel sauce.",
    category: "hot-coffee",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    isBestseller: true,
    calories: "190 kcal"
  },
  {
    id: "hc-3",
    title: "Artisanal Flat White",
    description: "Steamed whole milk poured over a ristretto shot for a velvety coffee-forward experience.",
    category: "hot-coffee",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    calories: "120 kcal"
  },
  {
    id: "hc-4",
    title: "Spiced Hazelnut Mocha",
    description: "Earthy dark chocolate ganache, roasted hazelnut syrup, double espresso & warm oat milk.",
    category: "hot-coffee",
    price: 5.80,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    calories: "230 kcal"
  },

  // COLD BREWS
  {
    id: "cb-1",
    title: "24-Hour Nitro Cold Brew",
    description: "Infused with nitrogen for a creamy cascading head and natural sweetness without dairy.",
    category: "cold-brews",
    price: 5.20,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    isBestseller: true,
    calories: "10 kcal"
  },
  {
    id: "cb-2",
    title: "Vanilla Cloud Iced Latte",
    description: "Espresso over chilled milk, ice, and crowned with sweet Madagascar vanilla cold foam.",
    category: "cold-brews",
    price: 5.60,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    isBestseller: true,
    calories: "180 kcal"
  },
  {
    id: "cb-3",
    title: "Espresso Tonic with Rosemary",
    description: "Sparkling artisanal tonic water, double shot espresso, fresh citrus twist, and slapped rosemary sprig.",
    category: "cold-brews",
    price: 5.40,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    calories: "45 kcal"
  },

  // ARTISANAL TEA
  {
    id: "at-1",
    title: "Ceremonial Grade Matcha Latte",
    description: "First-harvest Uji Japanese matcha whisked with warm almond milk and light agave.",
    category: "artisanal-tea",
    price: 5.80,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    isBestseller: true,
    calories: "110 kcal"
  },
  {
    id: "at-2",
    title: "Cardamom Spiced Masala Chai",
    description: "Brewed whole black tea leaves with fresh crushed cardamom, ginger, cinnamon & whole milk.",
    category: "artisanal-tea",
    price: 4.60,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    calories: "130 kcal"
  },
  {
    id: "at-3",
    title: "Peach Blossom Iced Tea",
    description: "Steeped white tea infused with white peach puree, fresh mint leaves, and edible flower blossoms.",
    category: "artisanal-tea",
    price: 4.90,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    calories: "70 kcal"
  },

  // FRESH BAKERY
  {
    id: "fb-1",
    title: "Flaky Almond Butter Croissant",
    description: "Baked daily in-house using French butter, filled with rich almond frangipane & toasted flakes.",
    category: "fresh-bakery",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    isBestseller: true,
    calories: "320 kcal"
  },
  {
    id: "fb-2",
    title: "Triple Chocolate Fudge Brownie",
    description: "Decadent dark chocolate brownie with a shiny crinkle top and gooey molten center.",
    category: "fresh-bakery",
    price: 4.20,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    isGlutenFree: true,
    calories: "290 kcal"
  },
  {
    id: "fb-3",
    title: "Blueberry Lemon Zest Scone",
    description: "Crumbly golden scone packed with wild blueberries, served with clotted cream & house berry jam.",
    category: "fresh-bakery",
    price: 3.90,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    calories: "260 kcal"
  },

  // SNACKS & SAVORY
  {
    id: "sn-1",
    title: "Artisan Sourdough Avocado Toast",
    description: "Thick sourdough, smashed Hass avocado, chili crisp, radish blossoms & microgreens.",
    category: "snacks",
    price: 7.90,
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    isBestseller: true,
    calories: "310 kcal"
  },
  {
    id: "sn-2",
    title: "Truffle Mushroom Panini",
    description: "Sautéed wild mushrooms, melted Gruyère cheese, white truffle oil on pressed ciabatta bread.",
    category: "snacks",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: false,
    calories: "410 kcal"
  },
  {
    id: "sn-3",
    title: "Mediterranean Hummus & Warm Pita",
    description: "House-made creamy chickpea hummus topped with roasted pine nuts, za'atar, served with warm pita pockets.",
    category: "snacks",
    price: 6.80,
    image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&q=80&w=800",
    isVeg: true,
    isVegan: true,
    calories: "280 kcal"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Morning Sun in the Lounge",
    category: "Interiors",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    caption: "Warm natural lighting and plush leather armchairs perfect for long reading sessions."
  },
  {
    id: "g-2",
    title: "Rosetta Latte Art Precision",
    category: "Barista",
    imageUrl: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800",
    caption: "Every cup is crafted with precision, passion, and single-origin beans."
  },
  {
    id: "g-3",
    title: "Fresh Daily Pastry Counter",
    category: "Bakery",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    caption: "Warm croissants, cinnamon knots, and sourdough loaves baked fresh at 7 AM every morning."
  },
  {
    id: "g-4",
    title: "The Quiet Work Nook",
    category: "Atmosphere",
    imageUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800",
    caption: "Dedicated high-speed Wi-Fi and power outlets at every desk for remote creators."
  },
  {
    id: "g-5",
    title: "Garden Patio & Pet Lounge",
    category: "Outdoors",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    caption: "Enjoy your morning cold brew under green foliage with your favorite four-legged friend."
  },
  {
    id: "g-6",
    title: "Artisanal Pour-Over Bar",
    category: "Coffee",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
    caption: "Slow drip V60 brewing showcasing subtle floral & fruity notes of Ethiopian Yirgacheffe."
  }
];
