export interface Product {
  id: number;
  name: string;
  productImg: string;
  ficheImg: string;
}

export interface Category {
  id: number;
  categorie: string;
  color: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    id: 2,
    categorie: "Gastro entérologie",
    color: "#009688", // Example color, change if needed
    products: [
      {
        id: 1,
        name: "Carbosorb®",
        productImg: require("../images/product/carbosorb.png"),
        ficheImg: require("../images/fiche/carbosorb.jpg"),
      },
      {
        id: 2,
        name: "Carbosorb® Transit",
        productImg: require("../images/product/carbosorb_transit.png"),
        ficheImg: require("../images/fiche/carbosorb_transit.jpg"),
      },
      {
        id: 3,
        name: "Kalmagas®",
        productImg: require("../images/product/kalmagas.png"),
        ficheImg: require("../images/fiche/kalmagas.jpg"),
      },
      {
        id: 4,
        name: "Kalmagas® Transit",
        productImg: require("../images/product/kalmagas_transit.png"),
        ficheImg: require("../images/fiche/kalmagas_transit.jpg"),
      },
      {
        id: 5,
        name: "Carboxane®",
        productImg: require("../images/product/carboxane.png"),
        ficheImg: require("../images/fiche/carboxane.jpg"),
      },
      {
        id: 6,
        name: "Oxantin®",
        productImg: require("../images/product/oxantin.png"),
        ficheImg: require("../images/fiche/oxantin.jpg"),
      },
      {
        id: 7,
        name: "Isilax®",
        productImg: require("../images/product/isilax.png"),
        ficheImg: require("../images/fiche/isilax.jpg"),
      },
      {
        id: 8,
        name: "Isilax® Forte",
        productImg: require("../images/product/isilax_forte.png"),
        ficheImg: require("../images/fiche/isilax_forte.jpg"),
      },
      {
        id: 9,
        name: "Zetalax®",
        productImg: require("../images/product/zetalax.png"),
        ficheImg: require("../images/fiche/zetalax.jpg"),
      },
      {
        id: 10,
        name: "Ircolax®",
        productImg: require("../images/product/ircolax.png"),
        ficheImg: require("../images/fiche/ircolax.jpg"),
      },
      {
        id: 11,
        name: "Rectolax® Microlavement",
        productImg: require("../images/product/rectolax_microlavement.png"),
        ficheImg: require("../images/fiche/rectolax_microlavement.jpg"),
      },
      {
        id: 12,
        name: "Rectolax® Lavement",
        productImg: require("../images/product/rectolax_lavement.png"),
        ficheImg: require("../images/fiche/rectolax_lavement.jpg"),
      },
      {
        id: 13,
        name: "Gingerax®",
        productImg: require("../images/product/gingerax.png"),
        ficheImg: require("../images/fiche/gingerax.jpg"),
      },
      {
        id: 14,
        name: "Vagadys®",
        productImg: require("../images/product/vagadys.png"),
        ficheImg: require("../images/fiche/vagadys.jpg"),
      },
      {
        id: 15,
        name: "Carbosorb® Digest",
        productImg: require("../images/product/carbosorb_digest.png"),
        ficheImg: require("../images/fiche/carbosorb_digest.jpg"),
      },
      {
        id: 16,
        name: "Depurattiva®",
        productImg: require("../images/product/depurattiva.png"),
        ficheImg: require("../images/fiche/depurattiva.jpg"),
      },
      {
        id: 17,
        name: "Neobiline®",
        productImg: require("../images/product/neobiline.png"),
        ficheImg: require("../images/fiche/neobiline.jpg"),
      },
      {
        id: 18,
        name: "Neobiline® Digest",
        productImg: require("../images/product/neobiline_digest.png"),
        ficheImg: require("../images/fiche/neobiline_digest.jpg"),
      },
      {
        id: 19,
        name: "Carboxane® Flora",
        productImg: require("../images/product/carboxane_flora.png"),
        ficheImg: require("../images/fiche/carboxane_flora.jpg"),
      },
      {
        id: 20,
        name: "Adiaflor®",
        productImg: require("../images/product/adiaflor.png"),
        ficheImg: require("../images/fiche/adiaflor.jpg"),
      },
      {
        id: 21,
        name: "Curaflor®",
        productImg: require("../images/product/curaflor.png"),
        ficheImg: require("../images/fiche/curaflor.jpg"),
      },
      {
        id: 22,
        name: "Kalmacol®",
        productImg: require("../images/product/kalmacol.png"),
        ficheImg: require("../images/fiche/kalmacol.jpg"),
      },
      {
        id: 23,
        name: "Curcol®",
        productImg: require("../images/product/curcol.png"),
        ficheImg: require("../images/fiche/curcol.jpg"),
      },
      {
        id: 24,
        name: "Colixane®",
        productImg: require("../images/product/colixane.png"),
        ficheImg: require("../images/fiche/colixane.jpg"),
      },
    ],
  },
  {
    id: 3,
    categorie: "Métabolisme & Énergie",
    color: "#ff9800",
    products: [
      {
        id: 1,
        name: "Nurax®",
        productImg: require("../images/product/nurax.png"),
        ficheImg: require("../images/fiche/nurax.jpg"),
      },
      {
        id: 2,
        name: "Apenat®",
        productImg: require("../images/product/apenat.png"),
        ficheImg: require("../images/fiche/apenat.jpg"),
      },
      {
        id: 3,
        name: "Maxitone®",
        productImg: require("../images/product/maxitone.png"),
        ficheImg: require("../images/fiche/maxitone.jpg"),
      },
      {
        id: 4,
        name: "Maxitone® Comprimés effervescents",
        productImg: require("../images/product/maxitone_eff.png"),
        ficheImg: require("../images/fiche/maxitone_eff.jpg"),
      },
      {
        id: 5,
        name: "Nurax® Tonus",
        productImg: require("../images/product/nurax_tonus.png"),
        ficheImg: require("../images/fiche/nurax_tonus.jpg"),
      },
      {
        id: 6,
        name: "Dynatens®",
        productImg: require("../images/product/dynatens.png"),
        ficheImg: require("../images/fiche/dynatens.jpg"),
      },
      {
        id: 7,
        name: "Fitofer®",
        productImg: require("../images/product/fitofer.png"),
        ficheImg: require("../images/fiche/fitofer.jpg"),
      },
      {
        id: 8,
        name: "Memotone®",
        productImg: require("../images/product/memotone.png"),
        ficheImg: require("../images/fiche/memotone.jpg"),
      },
    ],
  },
  {
    id: 4,
    categorie: "Système respiratoire",
    color: "#4caf50",
    products: [
      {
        id: 1,
        name: "Apixol® Sirop",
        productImg: require("../images/product/apixol_sirop.png"),
        ficheImg: require("../images/fiche/apixol_sirop.jpg"),
      },
      {
        id: 2,
        name: "Apixol® Comprimés à sucer",
        productImg: require("../images/product/apixol_cps.png"),
        ficheImg: require("../images/fiche/apixol_cps.jpg"),
      },
      {
        id: 3,
        name: "Apixol® Spray gorge",
        productImg: require("../images/product/apixol_spray_gorge.png"),
        ficheImg: require("../images/fiche/apixol_spray_gorge.jpg"),
      },
      {
        id: 4,
        name: "Apixol® Spray nasal",
        productImg: require("../images/product/apixol_spray_nasal.png"),
        ficheImg: require("../images/fiche/apixol_spray_nasal.jpg"),
      },
      {
        id: 5,
        name: "Fitopolis® Sirop",
        productImg: require("../images/product/fitopolis_sirop.png"),
        ficheImg: require("../images/fiche/fitopolis_sirop.jpg"),
      },
      {
        id: 6,
        name: "Fitopolis® Spray gorge",
        productImg: require("../images/product/fitopolis_spray_gorge.png"),
        ficheImg: require("../images/fiche/fitopolis_spray_gorge.jpg"),
      },
      {
        id: 7,
        name: "Fitopolis® Comprimés à sucer",
        productImg: require("../images/product/fitopolis_cps.png"),
        ficheImg: require("../images/fiche/fitopolis_cps.jpg"),
      },
      {
        id: 8,
        name: "Tossedyl®",
        productImg: require("../images/product/tossedyl.png"),
        ficheImg: require("../images/fiche/tossedyl.jpg"),
      },
      {
        id: 9,
        name: "Fitorax® Sirop",
        productImg: require("../images/product/fitorax_sirop.png"),
        ficheImg: require("../images/fiche/fitorax_sirop.jpg"),
      },
      {
        id: 10,
        name: "Fitorax® Spray gorge",
        productImg: require("../images/product/fitorax_spray_gorge.png"),
        ficheImg: require("../images/fiche/fitorax_spray_gorge.jpg"),
      },
      {
        id: 11,
        name: "Fitorax® Comprimés à sucer",
        productImg: require("../images/product/fitorax_cps.png"),
        ficheImg: require("../images/fiche/fitorax_cps.jpg"),
      },
      {
        id: 12,
        name: "Curaler® Sirop",
        productImg: require("../images/product/curaler_sirop.png"),
        ficheImg: require("../images/fiche/curaler_sirop.jpg"),
      },
      {
        id: 13,
        name: "Curaler® Gellules",
        productImg: require("../images/product/curaler_gellules.png"),
        ficheImg: require("../images/fiche/curaler_gellules.jpg"),
      },
      {
        id: 14,
        name: "Curaler® Spray nasal",
        productImg: require("../images/product/curaler_spray_nasal.png"),
        ficheImg: require("../images/fiche/curaler_spray_nasal.jpg"),
      },
      {
        id: 15,
        name: "Rhinolaya®",
        productImg: require("../images/product/rhinolaya.png"),
        ficheImg: require("../images/fiche/rhinolaya.jpg"),
      },
      {
        id: 16,
        name: "Otolaya®",
        productImg: require("../images/product/otolaya.png"),
        ficheImg: require("../images/fiche/otolaya.jpg"),
      },
      {
        id: 17,
        name: "Nobios® Comprimés",
        productImg: require("../images/product/nobios_comprimes.png"),
        ficheImg: require("../images/fiche/nobios_comprimes.jpg"),
      },
      {
        id: 18,
        name: "Nobios® Sirop",
        productImg: require("../images/product/nobios_sirop.png"),
        ficheImg: require("../images/fiche/nobios_sirop.jpg"),
      },
      {
        id: 19,
        name: "Biotinax®",
        productImg: require("../images/product/biotinax.png"),
        ficheImg: require("../images/fiche/biotinax.jpg"),
      },
      {
        id: 20,
        name: "Neovizinc®",
        productImg: require("../images/product/neovizinc.png"),
        ficheImg: require("../images/fiche/neovizinc.jpg"),
      },
      {
        id: 21,
        name: "Maxitone® Vitamine C",
        productImg: require("../images/product/maxitone_vitc.png"),
        ficheImg: require("../images/fiche/maxitone_vitc.jpg"),
      },
    ],
  },
  {
    id: 5,
    categorie: "Rhumatologie",
    color: "#9c27b0",
    products: [
      {
        id: 1,
        name: "D3Norm®",
        productImg: require("../images/product/d3norm.png"),
        ficheImg: require("../images/fiche/d3norm.jpg"),
      },
      {
        id: 2,
        name: "Curogyl® D3",
        productImg: require("../images/product/curogyl.png"),
        ficheImg: require("../images/fiche/curogyl.jpg"),
      },
      {
        id: 3,
        name: "Curarti® Forte",
        productImg: require("../images/product/curarti_forte.png"),
        ficheImg: require("../images/fiche/curarti_forte.jpg"),
      },
      {
        id: 4,
        name: "Curarti® Gel",
        productImg: require("../images/product/curarti_gel.png"),
        ficheImg: require("../images/fiche/curarti_gel.jpg"),
      },
      {
        id: 5,
        name: "Curaflex®",
        productImg: require("../images/product/curaflex.png"),
        ficheImg: require("../images/fiche/curaflex.jpg"),
      },
      {
        id: 6,
        name: "Neuraxone®",
        productImg: require("../images/product/neuraxone.png"),
        ficheImg: require("../images/fiche/neuraxone.jpg"),
      },
      {
        id: 7,
        name: "Cartigen®",
        productImg: require("../images/product/cartigen.png"),
        ficheImg: require("../images/fiche/cartigen.jpg"),
      },
      {
        id: 8,
        name: "Cartigen® Protect",
        productImg: require("../images/product/cartigen_protect.png"),
        ficheImg: require("../images/fiche/cartigen_protect.jpg"),
      },
      {
        id: 9,
        name: "Ainat® Comprimés",
        productImg: require("../images/product/ainat_comprimes.png"),
        ficheImg: require("../images/fiche/ainat_comprimes.jpg"),
      },
      {
        id: 10,
        name: "Ainat® Roll-on",
        productImg: require("../images/product/ainat_rollon.png"),
        ficheImg: require("../images/fiche/ainat_rollon.jpg"),
      },
      {
        id: 11,
        name: "Duorelax®",
        productImg: require("../images/product/duorelax.png"),
        ficheImg: require("../images/fiche/duorelax.jpg"),
      },
      {
        id: 12,
        name: "Vegebom®",
        productImg: require("../images/product/vegebom.png"),
        ficheImg: require("../images/fiche/vegebom.jpg"),
      },
      {
        id: 13,
        name: "Neovical®",
        productImg: require("../images/product/neovical.png"),
        ficheImg: require("../images/fiche/neovical.jpg"),
      },
      {
        id: 14,
        name: "Fitoflex®",
        productImg: require("../images/product/fitoflex.png"),
        ficheImg: require("../images/fiche/fitoflex.jpg"),
      },
    ],
  },
  {
    id: 6,
    categorie: "Gynécologie",
    color: "#e91e63",
    products: [
      {
        id: 1,
        name: "Candidax® Ovules",
        productImg: require("../images/product/candidax_ovules.png"),
        ficheImg: require("../images/fiche/candidax_ovules.jpg"),
      },
      {
        id: 2,
        name: "Candidax®",
        productImg: require("../images/product/candidax.png"),
        ficheImg: require("../images/fiche/candidax.jpg"),
      },
      {
        id: 3,
        name: "Dermasept® Gel lavant",
        productImg: require("../images/product/dermasept_gel.png"),
        ficheImg: require("../images/fiche/dermasept_gel.jpg"),
      },
      {
        id: 4,
        name: "Dermasept® PH8",
        productImg: require("../images/product/dermasept_ph8.png"),
        ficheImg: require("../images/fiche/dermasept_ph8.jpg"),
      },
      {
        id: 5,
        name: "Fitolat®",
        productImg: require("../images/product/fitolat.png"),
        ficheImg: require("../images/fiche/fitolat.jpg"),
      },
      {
        id: 6,
        name: "Neonat®",
        productImg: require("../images/product/neonat.png"),
        ficheImg: require("../images/fiche/neonat.jpg"),
      },
      {
        id: 7,
        name: "Genestin® Forte",
        productImg: require("../images/product/genestin_forte.png"),
        ficheImg: require("../images/fiche/genestin_forte.jpg"),
      },
      {
        id: 8,
        name: "Genestin® SPM",
        productImg: require("../images/product/genestin_spm.png"),
        ficheImg: require("../images/fiche/genestin_spm.jpg"),
      },
      {
        id: 9,
        name: "Cystican®",
        productImg: require("../images/product/cystican.png"),
        ficheImg: require("../images/fiche/cystican.jpg"),
      },
    ],
  },
  // {
  //   id: 7,
  //   categorie: "Dermatologie",
  //   color: "#795548",
  //   products: [
  //     {
  //       id: 1,
  //       name: "Vegebom® Bébé baume",
  //       productImg: require("../images/product/vegebom_bebe.jpg"),
  //       ficheImg: require("../images/fiche/vegebom_bebe.jpg"),
  //     },
  //     {
  //       id: 2,
  //       name: "Dermasept® Cica",
  //       productImg: require("../images/product/dermasept_cica.jpg"),
  //       ficheImg: require("../images/fiche/dermasept_cica.jpg"),
  //     },
  //     {
  //       id: 3,
  //       name: "Dermasept®",
  //       productImg: require("../images/product/dermasept.jpg"),
  //       ficheImg: require("../images/fiche/dermasept.jpg"),
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   categorie: "Pédiatrie",
  //   color: "#03a9f4",
  //   products: [
  //     {
  //       id: 1,
  //       name: "Fitobimbi® Appétit",
  //       productImg: require("../images/product/fitobimbi_appetit.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_appetit.jpg"),
  //     },
  //     {
  //       id: 2,
  //       name: "Fitobimbi® Fer",
  //       productImg: require("../images/product/fitobimbi_fer.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_fer.jpg"),
  //     },
  //     {
  //       id: 3,
  //       name: "Fitobimbi® Gaz",
  //       productImg: require("../images/product/fitobimbi_gaz.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_gaz.jpg"),
  //     },
  //     {
  //       id: 4,
  //       name: "Fitobimbi® Immunité",
  //       productImg: require("../images/product/fitobimbi_immunite.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_immunite.jpg"),
  //     },
  //     {
  //       id: 5,
  //       name: "Fitobimbi® Multivitamine",
  //       productImg: require("../images/product/fitobimbi_multi.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_multi.jpg"),
  //     },
  //     {
  //       id: 6,
  //       name: "Fitobimbi® Nez gorge",
  //       productImg: require("../images/product/fitobimbi_nez_gorge.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_nez_gorge.jpg"),
  //     },
  //     {
  //       id: 7,
  //       name: "Fitobimbi® Sommeil",
  //       productImg: require("../images/product/fitobimbi_sommeil.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_sommeil.jpg"),
  //     },
  //     {
  //       id: 8,
  //       name: "Fitobimbi® Spray gorge",
  //       productImg: require("../images/product/fitobimbi_spray.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_spray.jpg"),
  //     },
  //     {
  //       id: 9,
  //       name: "Fitobimbi® Transit",
  //       productImg: require("../images/product/fitobimbi_transit.jpg"),
  //       ficheImg: require("../images/fiche/fitobimbi_transit.jpg"),
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   categorie: "Stress & Anxiété",
  //   color: "#607d8b",
  //   products: [
  //     {
  //       id: 1,
  //       name: "Ansiovit®",
  //       productImg: require("../images/product/ansiovit.jpg"),
  //       ficheImg: require("../images/fiche/ansiovit.jpg"),
  //     },
  //     {
  //       id: 2,
  //       name: "Magnemar®",
  //       productImg: require("../images/product/magnemar.jpg"),
  //       ficheImg: require("../images/fiche/magnemar.jpg"),
  //     },
  //     {
  //       id: 3,
  //       name: "Neovimag®",
  //       productImg: require("../images/product/neovimag.jpg"),
  //       ficheImg: require("../images/fiche/neovimag.jpg"),
  //     },
  //     {
  //       id: 4,
  //       name: "Neovimag® Plus",
  //       productImg: require("../images/product/neovimag_plus.jpg"),
  //       ficheImg: require("../images/fiche/neovimag_plus.jpg"),
  //     },
  //     {
  //       id: 5,
  //       name: "Somnex®",
  //       productImg: require("../images/product/somnex.jpg"),
  //       ficheImg: require("../images/fiche/somnex.jpg"),
  //     },
  //     {
  //       id: 6,
  //       name: "Theramag®",
  //       productImg: require("../images/product/theramag.jpg"),
  //       ficheImg: require("../images/fiche/theramag.jpg"),
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   categorie: "Circulation",
  //   color: "#8bc34a",
  //   products: [
  //     {
  //       id: 1,
  //       name: "Circulex®",
  //       productImg: require("../images/product/circulex.jpg"),
  //       ficheImg: require("../images/fiche/circulex.jpg"),
  //     },
  //   ],
  // },
];
