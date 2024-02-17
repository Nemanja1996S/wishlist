import { ApplicationModule, Injectable } from "@angular/core";
import {Observable, Subject } from "rxjs";
import { AppComponent } from "../../app/app.component";

@Injectable({
    providedIn: 'root'
})
export class EventService {
	private subject = new Subject();

	emitFromService(eventName: string, payload: any) {	
		this.subject.next({eventName, payload});  
	}
	
	
	listenFromService(eventName: string, callback: (event: any) => void) {
		this.subject.asObservable().subscribe((nextObj : any) => {
			if(eventName === nextObj.eventName) {
				callback(nextObj.payload);
			}
		});
	}   
}
