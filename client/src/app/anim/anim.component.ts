import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.scss']
})
export class AnimComponent implements OnInit, AfterViewInit {
  @ViewChild('outputConsole') private outputConsole: ElementRef;
  commandStart = [
    'Performing DNS Lookups for',
    'Searching ',
    'Analyzing ',
    'Estimating Approximate Location of ',
    'Compressing ',
    'Requesting Authorization From : ',
    'wget -a -t ',
    'tar -xzf ',
    'Entering Location ',
    'Compilation Started of ',
    'Downloading '
  ];
  commandParts = [
    'Data Structure',
    'http://wwjd.com?au&2',
    'Texture',
    'TPS Reports',
    ' .... Searching ... ',
    'http://zanb.se/?23&88&far=2',
    'http://ab.ret45-33/?timing=1ww'
  ];
  commandResponses = [
    'Authorizing ',
    'Authorized...',
    'Access Granted..',
    'Going Deeper....',
    'Compression Complete.',
    'Compilation of Data Structures Complete..',
    'Entering Security Console...',
    'Encryption Unsuccesful Attempting Retry...',
    'Waiting for response...',
    '....Searching...',
    'Calculating Space Requirements '
  ];
  isProcessing = false;
  processTime = 0;
  lastProcess = 0;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.addElement();
    setTimeout(() => {
      this.consoleOutput();
    }, 200);
  }

  addElement() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Click here to add li');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.outputConsole.nativeElement, li);
  }

  consoleOutput(){
    let textEl = this.renderer.createElement('p');
    let text = '';

    if (this.isProcessing){
        textEl = this.renderer.createElement('span');
        text = Math.random() + ' ';
        if (Date.now() > this.lastProcess + this.processTime){
            this.isProcessing = false;
        }
    }else{
        // tslint:disable-next-line: no-bitwise
        const commandType = ~~(Math.random() * 4);
        switch (commandType){
            case 0:
                // tslint:disable-next-line: max-line-length no-bitwise
                text = this.commandStart[~~(Math.random() * this.commandStart.length)] + this.commandParts[~~(Math.random() * this.commandParts.length)];
                break;
            case 3:
                this.isProcessing = true;
                // tslint:disable-next-line: no-bitwise
                this.processTime = ~~(Math.random() * 5000);
                this.lastProcess = Date.now();
            // tslint:disable-next-line: no-switch-case-fall-through
            default:
                 // tslint:disable-next-line: no-bitwise
                 text = this.commandResponses[~~(Math.random() * this.commandResponses.length)];
                 break;
        }
    }

    this.outputConsole.nativeElement.scrollTop = this.outputConsole.nativeElement.scrollHeight;
    this.renderer.appendChild(textEl, this.renderer.createText(text));
    this.renderer.appendChild(this.outputConsole.nativeElement, textEl);

    if (this.outputConsole.nativeElement.scrollHeight > window.innerHeight) {
       const removeNodes = this.outputConsole.nativeElement.querySelectorAll('*');
       // tslint:disable-next-line: no-bitwise
       for (let n = 0; n < ~~(removeNodes.length / 3); n++){
            this.outputConsole.nativeElement.removeChild(removeNodes[n]);
        }
    }

    // // tslint:disable-next-line: no-bitwise
    setTimeout(() => {
      this.consoleOutput();
    }, ~~(Math.random() * 200));
}

}
