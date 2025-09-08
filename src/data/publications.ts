export interface Publication {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    "id": "pub_1",
    "image": "/uploads/img1.jpg",
    "title": "Ciberwarmis",
    "subtitle": "EleccionesGenerales2025",
    "handle": "@ceres",
    "url": "https://www.facebook.com/100064127318311/posts/1168600968620803/?rdid=LsywSDKuyKCUu2t7#"
  },
  {
    "id": "pub_2",
    "image": "/uploads/img2.jpg",
    "title": "segunda publicación",
    "subtitle": "Aquí va un subtítulo más.",
    "handle": "@muywaso",
    "url": "https://www.facebook.com/100064127318311/posts/1168600968620803/?rdid=LsywSDKuyKCUu2t7#"
  },
  {
    "id": "pub_1757368021656_i7j5wxe3j",
    "image": "/uploads/1757367979111_1755366707021_carlos-muza-hpjSkU2UYSU-unsplash.jpg",
    "title": "tercera publicacion",
    "subtitle": "noticia relacionada a la politica",
    "handle": "@chequeabolivia",
    "url": "https://chequeabolivia.bo/"
  }
];
