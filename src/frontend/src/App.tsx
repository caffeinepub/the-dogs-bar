import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  CheckCircle,
  ChevronRight,
  Clock,
  HandCoins,
  Layers,
  MapPin,
  Menu,
  PawPrint,
  Phone,
  ShoppingBag,
  Star,
  ThumbsUp,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";

const PHONE = "07007276295";
const TEL_HREF = `tel:${PHONE}`;

const products = [
  {
    id: 1,
    name: "Dog Food",
    description:
      "Premium dry & wet food for all dog breeds. Vet-approved nutrition.",
    startingPrice: "\u20b9299",
    image: "/assets/generated/product-dog-food.dim_600x400.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Cat Food",
    description: "Balanced meals for cats of all ages. Natural ingredients.",
    startingPrice: "\u20b9199",
    image: "/assets/generated/product-cat-food.dim_600x400.jpg",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Fish Food",
    description: "Specialized flakes and pellets for tropical & goldfish.",
    startingPrice: "\u20b999",
    image: "/assets/generated/product-fish-food.dim_600x400.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "Pet Accessories",
    description: "Leashes, collars, toys, bowls & more for your furry friends.",
    startingPrice: "\u20b9149",
    image: "/assets/generated/product-accessories.dim_600x400.jpg",
    badge: "New",
  },
];

const breeds = [
  {
    id: 1,
    name: "Golden Retriever",
    price: "\u20b915,000 - \u20b940,000",
    image: "/assets/generated/breed-golden-retriever.dim_400x400.jpg",
  },
  {
    id: 2,
    name: "Labrador",
    price: "\u20b98,000 - \u20b920,000",
    image: "/assets/generated/breed-labrador.dim_400x400.jpg",
  },
  {
    id: 3,
    name: "German Shepherd",
    price: "\u20b910,000 - \u20b925,000",
    image: "/assets/generated/breed-german-shepherd.dim_400x400.jpg",
  },
  {
    id: 4,
    name: "Pug",
    price: "\u20b98,000 - \u20b918,000",
    image: "/assets/generated/breed-pug.dim_400x400.jpg",
  },
  {
    id: 5,
    name: "Shih Tzu",
    price: "\u20b920,000 - \u20b945,000",
    image: "/assets/generated/breed-shih-tzu.dim_400x400.jpg",
  },
  {
    id: 6,
    name: "Beagle",
    price: "\u20b912,000 - \u20b930,000",
    image: "/assets/generated/breed-beagle.dim_400x400.jpg",
  },
];

const reviews = [
  {
    id: 1,
    name: "Ramesh Verma",
    location: "Yashoda Nagar, Kanpur",
    rating: 5,
    text: "Best pet food shop in Kanpur! I've been buying dog food for my Labrador here for 2 years. Always fresh stock and great prices. Delivery is super fast.",
    initials: "RV",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Govind Nagar, Kanpur",
    rating: 5,
    text: "Bought cat food and accessories for my Persian. Very helpful staff, they guided me on the right diet. Reasonable prices compared to other shops.",
    initials: "PS",
  },
  {
    id: 3,
    name: "Ankit Gupta",
    location: "Kakadeo, Kanpur",
    rating: 5,
    text: "Excellent service! Called them and they delivered the dog food to my doorstep within an hour. Quality is top-notch. Highly recommend to all pet owners.",
    initials: "AG",
  },
  {
    id: 4,
    name: "Sunita Agarwal",
    location: "Civil Lines, Kanpur",
    rating: 4,
    text: "Good variety of fish food and aquarium supplies. The shop owner is very knowledgeable about different fish breeds. Will definitely visit again.",
    initials: "SA",
  },
];

const galleryImages = [
  {
    id: "gal-dog-food",
    src: "/assets/generated/product-dog-food.dim_600x400.jpg",
    alt: "Dog Food Products",
  },
  {
    id: "gal-golden",
    src: "/assets/generated/breed-golden-retriever.dim_400x400.jpg",
    alt: "Golden Retriever",
  },
  {
    id: "gal-cat-food",
    src: "/assets/generated/product-cat-food.dim_600x400.jpg",
    alt: "Cat Food Products",
  },
  {
    id: "gal-labrador",
    src: "/assets/generated/breed-labrador.dim_400x400.jpg",
    alt: "Labrador",
  },
  {
    id: "gal-accessories",
    src: "/assets/generated/product-accessories.dim_600x400.jpg",
    alt: "Pet Accessories",
  },
  {
    id: "gal-shepherd",
    src: "/assets/generated/breed-german-shepherd.dim_400x400.jpg",
    alt: "German Shepherd",
  },
  {
    id: "gal-fish-food",
    src: "/assets/generated/product-fish-food.dim_600x400.jpg",
    alt: "Fish Food",
  },
  {
    id: "gal-pug",
    src: "/assets/generated/breed-pug.dim_400x400.jpg",
    alt: "Pug",
  },
];

const uspFeatures = [
  {
    id: "usp-price",
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Best Prices",
    desc: "Competitive pricing on all pet food & supplies",
  },
  {
    id: "usp-delivery",
    icon: <Truck className="w-6 h-6" />,
    title: "Free Delivery in Kanpur",
    desc: "Fast home delivery across Kanpur city",
  },
  {
    id: "usp-advice",
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "Expert Advice",
    desc: "Personalized guidance from pet care experts",
  },
  {
    id: "usp-selection",
    icon: <Layers className="w-6 h-6" />,
    title: "All Pet Supplies",
    desc: "Dog, cat, fish food + accessories all in one place",
  },
];

const whyReasons = [
  {
    id: "why-price",
    icon: <Banknote className="w-8 h-8" />,
    title: "Guaranteed Best Prices",
    desc: "We match or beat any competitor's price in Kanpur. Quality pet nutrition should not break the bank.",
  },
  {
    id: "why-delivery",
    icon: <Truck className="w-8 h-8" />,
    title: "Reliable Home Delivery",
    desc: "Order by phone and get your pet supplies delivered to your doorstep quickly across Kanpur.",
  },
  {
    id: "why-service",
    icon: <HandCoins className="w-8 h-8" />,
    title: "Helpful & Knowledgeable Service",
    desc: "Our team genuinely cares about your pets. We provide honest, expert advice - not just sales.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={`star-${n}`}
          className={`w-4 h-4 ${
            n <= rating ? "fill-[#22C55E] text-[#22C55E]" : "text-[#232A34]"
          }`}
        />
      ))}
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Breeds", href: "#breeds" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Header({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "#0B0D10", borderColor: "#232A34" }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <PawPrint className="w-5 h-5 text-[#22C55E]" />
            <span className="font-bold text-lg text-[#E8EDF3]">
              The Dogs Bar
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#9AA6B2] hover:text-[#E8EDF3] text-sm font-medium transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={TEL_HREF} data-ocid="nav.primary_button">
              <Button className="bg-[#22C55E] hover:bg-[#34D399] text-black font-semibold text-sm px-4 py-2">
                <Phone className="w-4 h-4 mr-1.5" />
                Call Now
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-[#9AA6B2] hover:text-[#E8EDF3]"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4"
          style={{ background: "#12161C", borderColor: "#232A34" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#9AA6B2] hover:text-[#E8EDF3] text-sm font-medium"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a href={TEL_HREF} data-ocid="nav.primary_button">
            <Button className="w-full bg-[#22C55E] hover:bg-[#34D399] text-black font-semibold">
              <Phone className="w-4 h-4 mr-1.5" />
              Call Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const highlights = [
    {
      id: "h1",
      icon: <ShoppingBag className="w-4 h-4" />,
      text: "Best Prices",
    },
    {
      id: "h2",
      icon: <Truck className="w-4 h-4" />,
      text: "Free Delivery in Kanpur",
    },
    {
      id: "h3",
      icon: <CheckCircle className="w-4 h-4" />,
      text: "All Pet Supplies Available",
    },
  ];

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center relative"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-pet-shop.dim_1200x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.65)" }}
      />
      <div className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Badge
            className="mb-4 text-xs font-semibold px-3 py-1 inline-flex items-center gap-1"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22C55E",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            <PawPrint className="w-3 h-3" />
            Kanpur's Trusted Pet Shop
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8EDF3] leading-tight mb-4">
            Best Food &amp; Supplies for Your Pets
          </h1>
          <p className="text-lg text-[#C8D4DF] mb-6">
            Premium dog, cat &amp; fish food. Full range of pet accessories.
            Home delivery available across Kanpur.
          </p>

          {/* Highlight chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {highlights.map((h) => (
              <span
                key={h.id}
                className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(34,197,94,0.12)",
                  color: "#22C55E",
                  border: "1px solid rgba(34,197,94,0.25)",
                }}
              >
                {h.icon}
                {h.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <a href={TEL_HREF} data-ocid="hero.primary_button">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#22C55E] hover:bg-[#34D399] text-black font-bold text-base px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="#products" data-ocid="hero.secondary_button">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold text-base px-8"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "#E8EDF3",
                  background: "transparent",
                }}
              >
                View Products
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={TEL_HREF}
              className="flex items-center justify-center gap-2 text-[#C8D4DF] hover:text-[#22C55E] transition-colors"
              data-ocid="hero.link"
            >
              <Phone className="w-4 h-4 text-[#22C55E]" />
              <span className="text-sm font-medium">{PHONE}</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-[#C8D4DF]">
              <MapPin className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
              <span className="text-sm">Yashoda Nagar, Kanpur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function USPStrip() {
  return (
    <section
      className="py-12 border-y"
      style={{ background: "#12161C", borderColor: "#232A34" }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {uspFeatures.map((feat) => (
            <div
              key={feat.id}
              className="flex flex-col items-center text-center p-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E" }}
              >
                {feat.icon}
              </div>
              <h3 className="font-semibold text-[#E8EDF3] text-sm mb-1">
                {feat.title}
              </h3>
              <p className="text-[#9AA6B2] text-xs">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="py-20" style={{ background: "#0B0D10" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            className="mb-3 text-xs px-3 py-1"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22C55E",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            Our Products
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8EDF3] mb-3">
            Everything Your Pet Needs
          </h2>
          <p className="text-[#9AA6B2] max-w-lg mx-auto">
            Quality food and accessories for dogs, cats, fish and more - all at
            the best prices in Kanpur.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "#12161C", border: "1px solid #232A34" }}
              data-ocid={`products.item.${i + 1}`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ background: "#22C55E", color: "#000" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-[#E8EDF3] text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-[#9AA6B2] text-sm mb-3 flex-1">
                  {product.description}
                </p>
                <div
                  className="text-[#22C55E] font-bold text-lg mb-4 py-2 px-3 rounded-lg text-center"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  Starting from {product.startingPrice}
                </div>
                <div className="flex gap-2">
                  <a
                    href={TEL_HREF}
                    className="flex-1"
                    data-ocid={`products.primary_button.${i + 1}`}
                  >
                    <Button
                      size="sm"
                      className="w-full bg-[#22C55E] hover:bg-[#34D399] text-black font-semibold text-xs"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call Now
                    </Button>
                  </a>
                  <a
                    href={TEL_HREF}
                    className="flex-1"
                    data-ocid={`products.secondary_button.${i + 1}`}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs font-semibold"
                      style={{
                        borderColor: "#2A3340",
                        color: "#9AA6B2",
                        background: "transparent",
                      }}
                    >
                      Enquire
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BreedsSection() {
  return (
    <section id="breeds" className="py-20" style={{ background: "#12161C" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            className="mb-3 text-xs px-3 py-1"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22C55E",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            Dog Breeds
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8EDF3] mb-3">
            Popular Dog Breeds
          </h2>
          <p className="text-[#9AA6B2] max-w-lg mx-auto">
            We stock specialized food for all popular breeds. Call us to enquire
            about availability and pricing.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {breeds.map((breed, i) => (
            <div
              key={breed.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: "#0B0D10", border: "1px solid #232A34" }}
              data-ocid={`breeds.item.${i + 1}`}
            >
              <img
                src={breed.image}
                alt={breed.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-[#E8EDF3] text-base mb-2">
                  {breed.name}
                </h3>
                <div
                  className="text-[#22C55E] font-bold text-sm mb-3 py-1.5 px-2 rounded-lg text-center"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  {breed.price}
                </div>
                <a href={TEL_HREF} data-ocid={`breeds.primary_button.${i + 1}`}>
                  <Button
                    size="sm"
                    className="w-full bg-[#22C55E] hover:bg-[#34D399] text-black font-semibold text-xs"
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20" style={{ background: "#0B0D10" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            className="mb-3 text-xs px-3 py-1"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22C55E",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8EDF3] mb-3">
            Why Pet Owners Trust Us
          </h2>
          <p className="text-[#9AA6B2] max-w-lg mx-auto">
            We've been serving Kanpur's pet lovers for years with quality,
            honesty and care.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {whyReasons.map((r) => (
            <div
              key={r.id}
              className="p-6 rounded-2xl"
              style={{ background: "#12161C", border: "1px solid #232A34" }}
            >
              <div className="text-[#22C55E] mb-4">{r.icon}</div>
              <h3 className="font-bold text-[#E8EDF3] text-lg mb-2">
                {r.title}
              </h3>
              <p className="text-[#9AA6B2] text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-20" style={{ background: "#12161C" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            className="mb-3 text-xs px-3 py-1"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22C55E",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            Customer Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8EDF3] mb-3">
            What Our Customers Say
          </h2>
          <p className="text-[#9AA6B2]">
            Trusted by hundreds of pet owners across Kanpur.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl"
              style={{ background: "#0B0D10", border: "1px solid #232A34" }}
              data-ocid={`reviews.item.${i + 1}`}
            >
              <StarRating rating={review.rating} />
              <p className="text-[#9AA6B2] text-sm leading-relaxed mt-3 mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(34,197,94,0.15)",
                    color: "#22C55E",
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="text-[#E8EDF3] text-sm font-semibold">
                    {review.name}
                  </div>
                  <div className="text-[#9AA6B2] text-xs">
                    {review.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-20" style={{ background: "#0B0D10" }}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            className="mb-3 text-xs px-3 py-1"
            style={{
              background: "rgba(34,197,94,0.1)",
              color: "#22C55E",
              border: "1px solid rgba(34,197,94,0.3)",
            }}
          >
            Gallery
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8EDF3] mb-3">
            Our Products &amp; Store
          </h2>
          <p className="text-[#9AA6B2]">
            A look at what we carry - fresh stock, premium brands, happy pets.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="rounded-xl overflow-hidden aspect-square"
              style={{ border: "1px solid #232A34" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #12161C 0%, #0d1f14 100%)",
        borderTop: "1px solid #232A34",
        borderBottom: "1px solid #232A34",
      }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <PawPrint className="w-10 h-10 text-[#22C55E]" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#E8EDF3] mb-4">
          Ready to Order? Let's Get Your Pet Fed!
        </h2>
        <p className="text-[#9AA6B2] text-lg mb-8 max-w-xl mx-auto">
          Call us now or walk into our store at Yashoda Nagar, Kanpur. Home
          delivery available!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={TEL_HREF} data-ocid="cta.primary_button">
            <Button
              size="lg"
              className="bg-[#22C55E] hover:bg-[#34D399] text-black font-bold text-base px-10"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now - {PHONE}
            </Button>
          </a>
          <a href="#products" data-ocid="cta.secondary_button">
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-base px-10"
              style={{
                borderColor: "#2A3340",
                color: "#E8EDF3",
                background: "transparent",
              }}
            >
              Order Now
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="pt-16 pb-8"
      style={{ background: "#0B0D10", borderTop: "1px solid #232A34" }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-5 h-5 text-[#22C55E]" />
              <span className="font-bold text-lg text-[#E8EDF3]">
                The Dogs Bar
              </span>
            </div>
            <p className="text-[#9AA6B2] text-sm leading-relaxed mb-4">
              Kanpur's trusted pet food shop. Premium food &amp; accessories for
              dogs, cats, fish and more.
            </p>
            <a
              href={TEL_HREF}
              className="inline-flex items-center gap-2 text-[#22C55E] font-semibold text-sm hover:text-[#34D399] transition-colors"
              data-ocid="footer.link"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>

          <div>
            <h4 className="font-bold text-[#E8EDF3] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9AA6B2] hover:text-[#22C55E] text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#E8EDF3] mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#9AA6B2] text-xs mb-0.5">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={TEL_HREF}
                    className="text-[#E8EDF3] text-sm font-medium hover:text-[#22C55E] transition-colors"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#9AA6B2] text-xs mb-0.5">Location</div>
                  <div className="text-[#E8EDF3] text-sm">
                    Yashoda Nagar, Kanpur
                  </div>
                  <div className="text-[#9AA6B2] text-xs">
                    Uttar Pradesh, India
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[#9AA6B2] text-xs mb-0.5">
                    Store Hours
                  </div>
                  <div className="text-[#E8EDF3] text-sm">
                    Mon-Sat: 9am - 8pm
                  </div>
                  <div className="text-[#9AA6B2] text-xs">
                    Sunday: 10am - 6pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex items-center justify-center"
          style={{ borderColor: "#232A34" }}
        >
          <p className="text-[#9AA6B2] text-xs">
            &copy; {currentYear} The Dogs Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#0B0D10" }}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <HeroSection />
        <USPStrip />
        <ProductsSection />
        <BreedsSection />
        <WhyChooseUs />
        <ReviewsSection />
        <GallerySection />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
