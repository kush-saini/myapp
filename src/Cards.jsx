import React, { useState } from "react";
import Card from "./Card";
import cards from "./cards.json";
const Cards = () => {
  const garments = [
    {
      id: 1,
      title: "Classic White T-Shirt",
      subtitle: "Men • Casual Wear",
      description:
        "Soft cotton white t-shirt perfect for everyday comfort and style.",
      image:
        "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/T-shirt",
    },
    {
      id: 2,
      title: "Blue Denim Jeans",
      subtitle: "Men • Bottom Wear",
      description:
        "Slim-fit blue denim jeans with a modern cut and durable fabric.",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Jeans",
    },
    {
      id: 3,
      title: "Black Leather Jacket",
      subtitle: "Men • Winter Wear",
      description: "Premium black leather jacket for a bold and stylish look.",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Leather_jacket",
    },
    {
      id: 4,
      title: "Floral Summer Dress",
      subtitle: "Women • Casual Wear",
      description:
        "Lightweight floral dress ideal for summer outings and vacations.",
      image:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Dress",
    },
    {
      id: 5,
      title: "Red Party Gown",
      subtitle: "Women • Party Wear",
      description:
        "Elegant red gown designed for special occasions and evening events.",
      image:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Gown",
    },
    {
      id: 6,
      title: "Grey Hooded Sweatshirt",
      subtitle: "Unisex • Winter Wear",
      description:
        "Cozy grey hoodie with soft lining for cold weather comfort.",
      image:
        "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Hoodie",
    },
    {
      id: 7,
      title: "Formal Black Blazer",
      subtitle: "Men • Formal Wear",
      description:
        "Tailored black blazer suitable for office and formal occasions.",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Blazer",
    },
    {
      id: 8,
      title: "Cotton Kurti",
      subtitle: "Women • Ethnic Wear",
      description:
        "Comfortable cotton kurti with traditional prints and patterns.",
      image:
        "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fHww",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Kurti",
    },
    {
      id: 9,
      title: "Blue Saree",
      subtitle: "Women • Ethnic Wear",
      description:
        "Elegant blue saree with subtle embroidery for festive occasions.",
      image: "https://source.unsplash.com/400x400/?saree,blue",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Sari",
    },
    {
      id: 10,
      title: "Checked Casual Shirt",
      subtitle: "Men • Casual Wear",
      description: "Stylish checked shirt made from breathable cotton fabric.",
      image: "https://source.unsplash.com/400x400/?checked,shirt",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Shirt",
    },
    {
      id: 11,
      title: "Skinny Fit Jeans",
      subtitle: "Women • Bottom Wear",
      description:
        "Trendy skinny-fit jeans with stretchable fabric for all-day comfort.",
      image: "https://source.unsplash.com/400x400/?skinny,jeans",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Jeans",
    },
    {
      id: 12,
      title: "Printed Crop Top",
      subtitle: "Women • Casual Wear",
      description: "Stylish printed crop top perfect for summer fashion.",
      image: "https://source.unsplash.com/400x400/?crop,top",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Crop_top",
    },
    {
      id: 13,
      title: "Formal White Shirt",
      subtitle: "Men • Formal Wear",
      description:
        "Classic white formal shirt for office and business meetings.",
      image: "https://source.unsplash.com/400x400/?white,formal,shirt",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Dress_shirt",
    },
    {
      id: 14,
      title: "Pleated Skirt",
      subtitle: "Women • Casual Wear",
      description: "Elegant pleated skirt with a modern and chic design.",
      image: "https://source.unsplash.com/400x400/?pleated,skirt",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Skirt",
    },
    {
      id: 15,
      title: "Navy Blue Suit",
      subtitle: "Men • Formal Wear",
      description: "Smart navy blue suit tailored for professional settings.",
      image: "https://source.unsplash.com/400x400/?navy,suit",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Suit_(clothing)",
    },
    {
      id: 16,
      title: "Woolen Cardigan",
      subtitle: "Women • Winter Wear",
      description: "Soft woolen cardigan to keep you warm during chilly days.",
      image: "https://source.unsplash.com/400x400/?cardigan",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Cardigan",
    },
    {
      id: 17,
      title: "Track Pants",
      subtitle: "Men • Sports Wear",
      description: "Comfortable track pants ideal for workouts and lounging.",
      image: "https://source.unsplash.com/400x400/?trackpants",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Sweatpants",
    },
    {
      id: 18,
      title: "Yoga Leggings",
      subtitle: "Women • Sports Wear",
      description:
        "Stretchable yoga leggings designed for flexibility and comfort.",
      image: "https://source.unsplash.com/400x400/?yoga,leggings",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Leggings",
    },
    {
      id: 19,
      title: "Denim Jacket",
      subtitle: "Unisex • Casual Wear",
      description: "Classic denim jacket for a cool and trendy appearance.",
      image: "https://source.unsplash.com/400x400/?denim,jacket",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Denim_jacket",
    },
    {
      id: 20,
      title: "Silk Saree",
      subtitle: "Women • Ethnic Wear",
      description: "Luxurious silk saree with rich texture and shine.",
      image: "https://source.unsplash.com/400x400/?silk,saree",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Sari",
    },

    // 21–60 (keeping variety)
    {
      id: 21,
      title: "Printed Kurta",
      subtitle: "Men • Ethnic Wear",
      description: "Traditional printed kurta for festive occasions.",
      image: "https://source.unsplash.com/400x400/?kurta",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Kurta",
    },
    {
      id: 22,
      title: "Palazzo Pants",
      subtitle: "Women • Bottom Wear",
      description: "Flowy palazzo pants with a relaxed and stylish fit.",
      image: "https://source.unsplash.com/400x400/?palazzo,pants",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Palazzo_pants",
    },
    {
      id: 23,
      title: "Bomber Jacket",
      subtitle: "Men • Casual Wear",
      description: "Trendy bomber jacket for a sporty casual look.",
      image: "https://source.unsplash.com/400x400/?bomber,jacket",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Bomber_jacket",
    },
    {
      id: 24,
      title: "Anarkali Dress",
      subtitle: "Women • Ethnic Wear",
      description: "Graceful Anarkali dress with traditional design.",
      image: "https://source.unsplash.com/400x400/?anarkali,dress",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Anarkali_salwar_kameez",
    },
    {
      id: 25,
      title: "Cargo Shorts",
      subtitle: "Men • Casual Wear",
      description: "Comfortable cargo shorts with multiple utility pockets.",
      image: "https://source.unsplash.com/400x400/?cargo,shorts",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Cargo_shorts",
    },
    {
      id: 26,
      title: "Tank Top",
      subtitle: "Men • Sports Wear",
      description: "Breathable tank top perfect for gym and workouts.",
      image: "https://source.unsplash.com/400x400/?tank,top",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Tank_top",
    },
    {
      id: 27,
      title: "Maxi Dress",
      subtitle: "Women • Casual Wear",
      description: "Long flowing maxi dress for relaxed summer days.",
      image: "https://source.unsplash.com/400x400/?maxi,dress",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Maxi_dress",
    },
    {
      id: 28,
      title: "Formal Trousers",
      subtitle: "Men • Formal Wear",
      description: "Well-fitted formal trousers for office wear.",
      image: "https://source.unsplash.com/400x400/?formal,trousers",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Trousers",
    },
    {
      id: 29,
      title: "Chiffon Dupatta",
      subtitle: "Women • Ethnic Wear",
      description: "Lightweight chiffon dupatta with elegant finish.",
      image: "https://source.unsplash.com/400x400/?dupatta",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Dupatta",
    },
    {
      id: 30,
      title: "Polo T-Shirt",
      subtitle: "Men • Casual Wear",
      description: "Classic polo t-shirt with collar and button placket.",
      image: "https://source.unsplash.com/400x400/?polo,shirt",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Polo_shirt",
    },
    {
      id: 31,
      title: "Sweater Dress",
      subtitle: "Women • Winter Wear",
      description: "Warm sweater dress for cozy winter fashion.",
      image: "https://source.unsplash.com/400x400/?sweater,dress",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Sweater",
    },
    {
      id: 32,
      title: "Raincoat",
      subtitle: "Unisex • Outerwear",
      description: "Waterproof raincoat to keep you dry during monsoon.",
      image: "https://source.unsplash.com/400x400/?raincoat",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Raincoat",
    },
    {
      id: 33,
      title: "Sherwani",
      subtitle: "Men • Wedding Wear",
      description: "Royal sherwani designed for weddings and grand events.",
      image: "https://source.unsplash.com/400x400/?sherwani",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Sherwani",
    },
    {
      id: 34,
      title: "Lehenga Choli",
      subtitle: "Women • Wedding Wear",
      description: "Beautiful lehenga choli with rich embroidery work.",
      image: "https://source.unsplash.com/400x400/?lehenga",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Lehenga",
    },
    {
      id: 35,
      title: "Waistcoat",
      subtitle: "Men • Formal Wear",
      description: "Stylish waistcoat to complete your formal look.",
      image: "https://source.unsplash.com/400x400/?waistcoat",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Waistcoat",
    },
    {
      id: 36,
      title: "Cape Top",
      subtitle: "Women • Party Wear",
      description: "Trendy cape top with a modern silhouette.",
      image: "https://source.unsplash.com/400x400/?cape,top",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Cape",
    },
    {
      id: 37,
      title: "Dungarees",
      subtitle: "Unisex • Casual Wear",
      description: "Comfortable dungarees with a relaxed fit.",
      image: "https://source.unsplash.com/400x400/?dungarees",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Dungarees",
    },
    {
      id: 38,
      title: "Night Suit",
      subtitle: "Women • Sleepwear",
      description: "Soft and cozy night suit for comfortable sleep.",
      image: "https://source.unsplash.com/400x400/?nightwear",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Nightwear",
    },
    {
      id: 39,
      title: "Boxer Shorts",
      subtitle: "Men • Sleepwear",
      description: "Lightweight boxer shorts for everyday comfort.",
      image: "https://source.unsplash.com/400x400/?boxer,shorts",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Boxer_shorts",
    },
    {
      id: 40,
      title: "Jumpsuit",
      subtitle: "Women • Party Wear",
      description: "Stylish jumpsuit for a chic party look.",
      image: "https://source.unsplash.com/400x400/?jumpsuit",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Jumpsuit",
    },
    {
      id: 41,
      title: "Beanie Cap",
      subtitle: "Unisex • Winter Wear",
      description: "Warm beanie cap for cold winter days.",
      image: "https://source.unsplash.com/400x400/?beanie,cap",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Beanie",
    },
    {
      id: 42,
      title: "Scarf",
      subtitle: "Unisex • Accessories",
      description: "Soft scarf to add style and warmth.",
      image: "https://source.unsplash.com/400x400/?scarf",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Scarf",
    },
    {
      id: 43,
      title: "Poncho",
      subtitle: "Women • Winter Wear",
      description: "Stylish poncho with comfortable fit.",
      image: "https://source.unsplash.com/400x400/?poncho",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Poncho",
    },
    {
      id: 44,
      title: "Overcoat",
      subtitle: "Men • Winter Wear",
      description: "Long overcoat for extra warmth and elegance.",
      image: "https://source.unsplash.com/400x400/?overcoat",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Overcoat",
    },
    {
      id: 45,
      title: "Kaftan Dress",
      subtitle: "Women • Casual Wear",
      description: "Loose-fit kaftan dress with vibrant prints.",
      image: "https://source.unsplash.com/400x400/?kaftan",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Kaftan",
    },
    {
      id: 46,
      title: "Formal Skirt",
      subtitle: "Women • Formal Wear",
      description: "Elegant formal skirt suitable for office wear.",
      image: "https://source.unsplash.com/400x400/?formal,skirt",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Skirt",
    },
    {
      id: 47,
      title: "Henley T-Shirt",
      subtitle: "Men • Casual Wear",
      description: "Henley neck t-shirt with buttoned placket.",
      image: "https://source.unsplash.com/400x400/?henley,shirt",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Henley_shirt",
    },
    {
      id: 48,
      title: "Wrap Dress",
      subtitle: "Women • Casual Wear",
      description: "Flattering wrap dress with adjustable fit.",
      image: "https://source.unsplash.com/400x400/?wrap,dress",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Wrap_dress",
    },
    {
      id: 49,
      title: "Gym Shorts",
      subtitle: "Men • Sports Wear",
      description: "Lightweight gym shorts for intense workouts.",
      image: "https://source.unsplash.com/400x400/?gym,shorts",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Shorts",
    },
    {
      id: 50,
      title: "Sports Wear",
      subtitle: "Women • Sports Wear",
      description: "Supportive sports wear for active lifestyle.",
      image: "https://source.unsplash.com/400x400/?sports,bra",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Sports_bra",
    },
    {
      id: 51,
      title: "Tunic Top",
      subtitle: "Women • Casual Wear",
      description: "Long tunic top with elegant patterns.",
      image: "https://source.unsplash.com/400x400/?tunic,top",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Tunic",
    },
    {
      id: 52,
      title: "Fleece Jacket",
      subtitle: "Men • Winter Wear",
      description: "Warm fleece jacket for outdoor activities.",
      image: "https://source.unsplash.com/400x400/?fleece,jacket",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Fleece_jacket",
    },
    {
      id: 53,
      title: "Peplum Top",
      subtitle: "Women • Party Wear",
      description: "Stylish peplum top with flared hem.",
      image: "https://source.unsplash.com/400x400/?peplum,top",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Peplum",
    },
    {
      id: 54,
      title: "Lounge Pants",
      subtitle: "Unisex • Home Wear",
      description: "Soft lounge pants for relaxing at home.",
      image: "https://source.unsplash.com/400x400/?lounge,pants",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Sweatpants",
    },
    {
      id: 55,
      title: "Bandana",
      subtitle: "Unisex • Accessories",
      description: "Colorful bandana for style and utility.",
      image: "https://source.unsplash.com/400x400/?bandana",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Bandana",
    },
    {
      id: 56,
      title: "Shrug",
      subtitle: "Women • Casual Wear",
      description: "Light shrug to layer over dresses and tops.",
      image: "https://source.unsplash.com/400x400/?shrug,clothing",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Shrug_(clothing)",
    },
    {
      id: 57,
      title: "Thermal Wear Set",
      subtitle: "Unisex • Winter Wear",
      description: "Thermal innerwear set for extra warmth.",
      image: "https://source.unsplash.com/400x400/?thermal,wear",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Thermal_underwear",
    },
    {
      id: 58,
      title: "Vest Top",
      subtitle: "Women • Casual Wear",
      description: "Sleeveless vest top for summer days.",
      image: "https://source.unsplash.com/400x400/?vest,top",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Vest",
    },
    {
      id: 59,
      title: "Chinos",
      subtitle: "Men • Casual Wear",
      description: "Smart casual chinos for everyday use.",
      image: "https://source.unsplash.com/400x400/?chinos,pants",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Chino_cloth",
    },
    {
      id: 60,
      title: "Harem Pants",
      subtitle: "Women • Casual Wear",
      description: "Loose-fit harem pants with relaxed comfort.",
      image: "https://source.unsplash.com/400x400/?harem,pants",
      buttonText: "Learn More",
      readMore: "https://en.wikipedia.org/wiki/Harem_pants",
    },
  ];
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container  br-3 pt-5">
      <h1>Enter your search query</h1>
      <input
        type="text"
        className="form-control mb-2"
        onChange={(e) => {
          handleSearch(e);
        }}
      />
      <div className="row flex flex-wrap">
        {cards
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((card) => (
            <Card
              title={card.title}
              id={card.id}
              subtitle={card.subtitle}
              description={card.description}
              readMore={card.readMore}
              buttonText={card.buttonText}
              image={card.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Cards;
