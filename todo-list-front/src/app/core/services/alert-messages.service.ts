import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertMessagesService {

  constructor() { }

  /**title: string)
   * show success alert
   * @title string
   */
  public showSuccessAlert(title: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: title,
      footer: ''
    });
  }

  /**
   * show error alert
   * @message string
   */
   public showErrorAlert(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      footer: ''
    });
  }

  /**
   * @title string
   * @returns Promise<SweetAlertResult<unknown>>
   */
   public showQuestion(title: string): Promise<SweetAlertResult<unknown>> {
    return Swal.fire({
      title,
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true,
      showCloseButton: true
    });
  }
}
