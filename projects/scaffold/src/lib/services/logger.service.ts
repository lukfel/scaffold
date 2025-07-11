import { Injectable, inject } from '@angular/core';
import { LibraryConfig } from '../models';
import { CONFIG } from '../scaffold.module';

@Injectable({ providedIn: 'root' })
export class Logger {
  private config = inject<LibraryConfig>(CONFIG, { optional: true });


  /**
   * Uses the regular console log but can be automatically disabled during production by using the LibraryConfig in the ScaffoldModule.forRoot
   * 
   * @param message message of the log
   * @param args arguments of the log
   */
  public log(message: string, ...args: any[]): void {     // eslint-disable-line @typescript-eslint/no-explicit-any
    if (this.config?.production === false) {
      console.log(message, ...args);                      // eslint-disable-line no-console
    }
  }

  /**
   * Uses the regular console warn but can be automatically disabled during production by using the LibraryConfig in the ScaffoldModule.forRoot
   * 
   * @param message message of the warn
   * @param args arguments of the warn
   */
  public warn(message: string, ...args: any[]): void {    // eslint-disable-line @typescript-eslint/no-explicit-any
    if (this.config?.production === false) {
      console.warn(message, ...args);                     // eslint-disable-line no-console
    }
  }

  /**
   * Uses the regular console error but can be automatically disabled during production by using the LibraryConfig in the ScaffoldModule.forRoot
   * 
   * @param message message of the error
   * @param args arguments of the error
   */
  public error(message: string, ...args: any[]): void {   // eslint-disable-line @typescript-eslint/no-explicit-any
    if (this.config?.production === false) {
      console.error(message, ...args);                    // eslint-disable-line no-console
    }
  }

}
