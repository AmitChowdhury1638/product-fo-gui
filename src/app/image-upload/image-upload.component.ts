import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent implements OnInit {
   file: string | undefined  
   
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  
  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.productService.upload(this.file).subscribe((r) => {
          console.log(r)
            }
         );
        }  
      }
