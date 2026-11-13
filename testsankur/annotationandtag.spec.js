import{test} from '@playwright/test'
test.skip('test demo01',async({page})=>{

}) ;
test ('not ready',async({page})=>{
test.fail();

});

test.fixme('to be fixed me',async({page})=>{


});

// test('testdemo run @smoke',async({page})=>{


// });