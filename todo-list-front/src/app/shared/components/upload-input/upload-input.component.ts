import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-input',
  templateUrl: './upload-input.component.html',
  styleUrls: ['./upload-input.component.css']
})
export class UploadInputComponent implements OnInit {

  @Input() public excel = false;
  @Input() public word = false;
  @Output() public eventOnFileSelect = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {
  }

  public onFileSelect(event: any): void {
    const af = this.getType();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      if (af.length > 0 && !af.includes(file.type)) {
        this.eventOnFileSelect.emit({ error: 'Only EXCEL Docs Allowed!' });
      } else {
        this.eventOnFileSelect.emit({ file });
      }
    }
  }

  /**
   * checks accepted file types
   * @returns string[]
   */
  private getType(): string[] {
    const types: string[] = [];
    if (this.excel) {
      types.push('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel');
    }
    return types;
  }

}
