import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Optional, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeaderInputConfig } from '../../../models';

@Component({
  selector: 'lf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() public inputConfig: HeaderInputConfig = {};
  @Input() public isMobile: boolean = false;

  @Output() public inputSubmitEvent = new EventEmitter<string>();
  @Output() public inputChangeEvent = new EventEmitter<string>();
  @Output() public inputPrefixActionEvent = new EventEmitter<void>();

  @ViewChild('input') public input: ElementRef = null!;

  public inputValue: string = '';

  constructor(@Optional() public dialogRef: MatDialogRef<InputComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public config: HeaderInputConfig,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.config) {
      this.inputConfig = this.config;
    }
  }

  ngAfterViewInit(): void {
    if (this.input && this.inputConfig.autoFocus) {
      this.input.nativeElement.focus();
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.inputChangeEvent.emit('');
  }

  public inputSubmitted(value: string): void {
    this.inputSubmitEvent.emit(value);

    if (this.dialogRef) {
      this.dialogRef.close(value);
    }
  }

  public inputChanged(value: string): void {
    this.inputChangeEvent.emit(value);
  }

  public inputPrefixAction(): void {
    this.inputPrefixActionEvent.emit();

    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  public clearInput(): void {
    this.inputValue = '';
    this.inputChangeEvent.emit(this.inputValue);
  }
}
