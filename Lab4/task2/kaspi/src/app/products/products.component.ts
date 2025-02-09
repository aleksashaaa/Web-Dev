import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
declare var bootstrap: any;

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[];
}

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [CommonModule, NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h96/85812013531166.jpg?format=gallery-medium',
      name: 'Jacket',
      description: 'High-quality brown jacket',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/pidzhak-978513-korichnevyi-46-118644284/?c=750000000&hasVariants=true',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/hb4/h96/85812013531166.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h20/86992651911198.jpg?format=gallery-medium',
      name: 'Black dress',
      description: 'Beautiful long black dress',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sarafan-30295090-110067001-chernyi-42-123067218/?c=750000000&hasVariants=true',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/hb8/h20/86992651911198.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h32/h8a/86992652238878.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h26/h40/86992652107806.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h32/87181597409310.jpg?format=gallery-medium',
      name: 'Pajamas',
      description: 'Cute pajamas with cherries',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/pizhama-30310433-434436727-belyi-l-123798420/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h9f/h32/87181597409310.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h09/87181597474846.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hdd/87181597540382.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p35/20223454.jpg?format=gallery-medium',
      name: 'Sports suit',
      description: 'Green sports suit adidas',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/sportivnyi-kostjum-adidas-iy6655-zelenyi-m-133465288/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/p64/p35/20223454.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pf3/p34/20223458.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hcd/83621778882590.jpg?format=gallery-medium',
      name: 'Socks',
      description: 'Lilac socks',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/noski-min-liu-ml23-723-5-par-mul-tikolor-29-32-113198358/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/hcd/83621778882590.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h3a/87172406542366.jpg?format=gallery-medium',
      name: 'Skirt',
      description: 'Black skirt',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/prjamaja-jubka-30214647-803183424-chernyi-m-123761391/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h37/h3a/87172406542366.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p15/18438912.jpg?format=gallery-medium',
      name: 'Puma sneakers',
      description: 'White puma sneakers',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/kedy-puma-club-ii-era-397447p0p-belyi-39-132961226/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/p1c/p15/18438912.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe7/p1f/9543656.jpg?format=gallery-medium',
      name: 'Fur coat',
      description: 'Brown fur coat',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/shuba-30325590-176408744-korichnevyi-46-130377921/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/pe7/p1f/9543656.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/hfe/85792384090142.jpg?format=gallery-medium',
      name: 'Jeans',
      description: 'Wide leg blue jeans',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/dzhinsy-palatstso-fashion-zz2024-sinii-zelenyi-w29-118573784/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h3e/hfe/85792384090142.jpg?format=gallery-medium']
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h07/83607838228510.jpg?format=gallery-medium',
      name: 'Scarf',
      description: 'White scarf',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sharf-1841-moher-kashemir-210-sm-x-35-sm-113188139/?c=750000000',
      gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h43/h07/83607838228510.jpg?format=gallery-medium']
    },


  ];
  ngAfterViewInit() {
    setTimeout(() => {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach((carousel) => {
        new bootstrap.Carousel(carousel, { interval: false }); // Отключаем автопрокрутку
      });
    }, 100);
  }
}