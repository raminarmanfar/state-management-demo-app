import { Injectable } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {DemoState} from "./demo-state";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class DemoStateService {
  // @ts-ignore
  @Select(DemoState.getEmail) email$: Observable<string>;
  constructor(private store: Store) { }
}
