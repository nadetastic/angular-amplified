import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { generateClient } from 'aws-amplify/api'
import { Restaurant, ListRestaurantsQuery } from '../../API';
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'
import * as subs from '../../graphql/subscriptions'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit, OnDestroy {
  
  public createForm: FormGroup;
  public client: ReturnType<typeof generateClient>
  public restaurants: ListRestaurantsQuery["listRestaurants"]
  private subscription: any = null


  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.client = generateClient()

  }

  async ngOnInit() {
    /* fetch restaurants when app loads */
    try {
      const res = await this.client.graphql({
        query: queries.listRestaurants
      })
      console.log(res)

      this.restaurants = res.data.listRestaurants;
    } catch(e) {
      console.log(e)
    };

    this.subscription = this.client.graphql({
      query: subs.onCreateRestaurant
    }).subscribe(
      (event: any) => {
        console.log(event)
        const newRestaurant = event.data.onCreateRestaurant;
        this.restaurants.items = [newRestaurant, ...this.restaurants.items];
      }
    );
  }

  public async onCreate(restaurant: Restaurant) {

    try {
      const res = await this.client.graphql({
        query: mutations.createRestaurant,
        variables: {
          input: restaurant
        }
      })
      console.log('item created!',res);
        this.createForm.reset();
    } catch(e: any) {
        console.log('error creating restaurant...', e);
    };
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}