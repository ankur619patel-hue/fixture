import {test,expect } from '@playwright/test';

test('API get Request demo',async({request})=>{
const response=await request.get('https://reqres.in/api/users/2')

expect(response.status()).toBe(200);
 

})
