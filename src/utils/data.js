const products = [
  {
    id: 1,
    title: "Escalante 3",
    subtitle:
      "The Escalante 3 refreshes the classic road runner you know and love",
    type: "Road",
    price: 149.99,
    stock: 11,
    img: [
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044660/Next-Mile/Escalante3-0_edemig.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044660/Next-Mile/Escalante3-1_gcrwir.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044660/Next-Mile/Escalante3-2_zp6ohh.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044660/Next-Mile/Escalante3-3_c1q453.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044660/Next-Mile/Escalante3-4_ctbuiw.webp",
    ],
    description:
      "Introducing the new Escalante 3. This Altra classic gets a style refresh with an all-new modern look. These design updates offer an improved fit for your foot with our updated, sock-like upper material and added elastic throughout. Versatility meet comfort with this road shoe favorite with our Altra EGO™ foam midsole and our Standard FootShape™ Fit designed to take you from your morning run to your morning meeting.",
  },
  {
    id: 2,
    title: "Torin 6",
    subtitle: "The Torin 6 is made to work as hard as you do.",
    type: "Road",
    price: 129.99,
    stock: 4,
    img: [
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044882/Next-Mile/Torin6-0_iczr75.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044882/Next-Mile/Torin6-1_itinys.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044882/Next-Mile/Torin6-2_topmm5.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044882/Next-Mile/Torin6-3_yfrpbd.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044882/Next-Mile/Torin6-4_ngkhih.webp",
    ],
    description:
      "The new Torin 6 is ready to work as hard as you do. This best-selling road shoe is equipped with our Altra EGO™ MAX midsole foam, an improved plush tongue construction, and an updated molded heel collar that keeps up for mile after mile. This everyday road shoe is made for any road, any run, and any distance with our Standard FootShape™ fit designed for performance.",
  },
  {
    id: 3,
    title: "Paradigm 6",
    subtitle:
      "The first Altra shoe inspired by and developed with an Altra athlete.",
    type: "Road",
    price: 119.99,
    stock: 3,
    img: [
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045130/Next-Mile/Paradigm6-0_lgv8s0.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045130/Next-Mile/Paradigm6-1_rszdbk.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045130/Next-Mile/Paradigm6-2_whhyue.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045130/Next-Mile/Paradigm6-3_aixlgd.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045130/Next-Mile/Paradigm6-4_enupgq.webp",
    ],
    description:
      "Meet the Paradigm 6, a shoe that is blurring the line between support shoe and everyday trainer. Altra Elite Athlete and two-time Olympian Kara Goucher’s input helped us take this shoe to the next level, adding an Altra EGO™ MAX midsole and slimming down the overall design while maintaining its key support features.",
  },
  {
    id: 4,
    title: "Superior 5",
    subtitle: "Trailblaze your trail days with the new Superior 5",
    type: "Trail",
    price: 139.99,
    stock: 10,
    img: [
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044371/Next-Mile/Superior5-0_xxrlia.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044371/Next-Mile/Superior5-1_q4fr52.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044371/Next-Mile/Superior5-2_fqep7b.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044371/Next-Mile/Superior5-3_ylme0x.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683044371/Next-Mile/Superior5-4_fokn5z.webp",
    ],
    description:
      "It’s light, it’s fast, and it’s trail-running-ready with a MaxTrac™ outsole and a multi-directional lug pattern for traction on any terrain. The updated removeable StoneGuard™ uses less material and is lighter weight and the “burrito” style wrap-around tongue provides a locked-in feel. Lace up and take off with the Superior 5.",
  },
  {
    id: 5,
    title: "Mont Blanc BOA",
    subtitle:
      "Dial in your perfect fit with the Mont Blanc BOA® ultimate trail running shoe",
    type: "Trail",
    price: 149.99,
    stock: 8,
    img: [
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045366/Next-Mile/Mont0_po41hh.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045366/Next-Mile/Mont1_loefiz.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045366/Next-Mile/Mont2_kg42ju.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045366/Next-Mile/Mont3_m6su5f.webp",
      "https://res.cloudinary.com/duavnrhnp/image/upload/v1683045366/Next-Mile/Mont4_wb6fxu.webp",
    ],
    description:
      "All the same Mont Blanc features you know and love with a dual-dial BOA® Fit System, which allows for micro-adjustments when you’re on the run. Two distinct adjustment zones give you a truly personalized fit. Tackle your toughest long-distance trail miles but keep them comfortable with our Standard FootShape™ Fit and Altra EGO™ MAX midsole foam. Whether you’re toeing the line at an ultramarathon or setting out on a hometown trail running adventure, the Mont Blanc BOA® is ready to fly over the most rugged terrain.",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 500);
  });
};
