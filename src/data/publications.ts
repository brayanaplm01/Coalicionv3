export interface Publication {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    "image": "/uploads/img1.jpg",
    "title": "CERES",
    "subtitle": "PUBLICACION RECIENTE",
    "handle": "@ceres",
    "url": "https://www.facebook.com/100064127318311/posts/1168600968620803/?rdid=LsywSDKuyKCUu2t7#"
  },
  {
    "image": "/uploads/img2.jpg",
    "title": "Título de la segunda publicación",
    "subtitle": "Aquí va un subtítulo más.",
    "handle": "@muywaso",
    "url": "https://www.facebook.com/100064127318311/posts/1168600968620803/?rdid=LsywSDKuyKCUu2t7#"
  }
];
