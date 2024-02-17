import {Observable, Subject } from "rxjs";

class EventService {
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

export default new EventService();