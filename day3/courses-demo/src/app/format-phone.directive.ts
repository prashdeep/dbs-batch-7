import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[formatPhone]'
})
export class FormatPhoneDirective {

  codeToNumber = function(code){
    if (code === 'IN'){
      return '+91';
    } else {
      return '+41';
    }
  }

  @Input('formatPhone') countryCode;

  @HostListener('focus') onfocus(){
    console.log('came inside the focus method ');
  }

  /*@HostListener('keyup') onkeyup(){
    console.log(this.element.nativeElement.value)
  }*/

  @HostListener('blur') onblur(){
    const inputVal = this.element.nativeElement.value;
    console.log(this.countryCode)
    this.element.nativeElement.value = this.codeToNumber(this.countryCode)+'( '+inputVal+' )';
  }

  constructor(private element:ElementRef) { }

}
