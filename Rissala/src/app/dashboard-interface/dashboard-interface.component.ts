import { Component, Inject } from '@angular/core';
import { EditablePostsComponent } from '../editable-posts/editable-posts.component';
import Swal from 'sweetalert2';
import { on } from 'events';
import { Rissala, item } from '../types';
import { PostRissalaService } from '../services/post-rissala.service';

@Component({
  selector: 'app-dashboard-interface',
  standalone: true,
  imports: [EditablePostsComponent,],
  providers: [],

  templateUrl: './dashboard-interface.component.html',
  styleUrl: './dashboard-interface.component.scss'
  
})
export class DashboardInterfaceComponent {
  rissala!: Rissala;
  item!:item;


  constructor(
    private postRissalaService: PostRissalaService,
    
  ) {}

  ngOnInit() {
    this.postRissalaService.getProducts('http://127.0.0.1:8000/api/rissala/id?id_user=10')
      .subscribe((rissala: Rissala) => {
        this.rissala = rissala;
      });
  }
  onDeletePost(postId: number) {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "delete",
      denyButtonText: "cancel"
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
      {
          this.postRissalaService.deleteRissala(`http://127.0.0.1:8000/api/rissala/${postId}`).subscribe(
            response => {
              console.log('Post deleted successfully:', response);
            },
            error => {
              console.error('Error deleting post:', error);

            }
          );
    }


      } else if (result.isDenied) {
      }
    });
  }
  onEditPost(item: any) {
    Swal.fire({
      title: 'Update Rissala',
      html: `
        <input type="text" value="${item.title}" class="swal2-input" id="title">
        <textarea class="swal2-textarea" id="content">${item.content}</textarea>
        <input type="text" value="${item.post_img}" class="swal2-input" id="post_img">
        <input type="text" value="${item.category}" class="swal2-input" id="category">
      `,
      didOpen: () => {
        const inputTitle = Swal.getPopup()!.querySelector('#title') as HTMLInputElement;
        const inputContent = Swal.getPopup()!.querySelector('#content') as HTMLTextAreaElement;
        const inputpost_img = Swal.getPopup()!.querySelector('#post_img') as HTMLTextAreaElement;
        const inputCategory = Swal.getPopup()!.querySelector('#category') as HTMLInputElement;
        inputTitle.style.width = '100%';
        inputContent.style.width = '100%';
        inputpost_img.style.width = '100%';
        inputCategory.style.width = '100%';
      },
      preConfirm: () => {
        return {
          title: (document.getElementById('title') as HTMLInputElement).value,
          content: (document.getElementById('content') as HTMLTextAreaElement).value,
          post_img: (document.getElementById('post_img') as HTMLInputElement).value,
          category: (document.getElementById('category') as HTMLInputElement).value
        };
      },
    }).then((result: any) => {
      if (result.isConfirmed) {
        const updatedItem = {
          ...item,
          title: result.value.title,
          content: result.value.content,
          post_img: result.value.post_img,
          category: result.value.category,
        };
        console.log(updatedItem)
        this.postRissalaService.editRissala(`http://127.0.0.1:8000/api/rissala/update/${item.id}/${updatedItem.title}/${updatedItem.content}/${updatedItem.post_img}/${updatedItem.category}`).subscribe(
          (res: any) => {
            if (res.message === "Post updated successfully") {
              Swal.fire({
                title: "perfect",
                text: res.message,
                icon: "success"
              });
            } else {
              Swal.fire({
                title: "Oops...",
                text: res.message, 
                icon: "error"
              });
            }
          },
          (error) => {
            console.error("Error:", error);
          }
        );
      }

      }
    )};
  }
  
  