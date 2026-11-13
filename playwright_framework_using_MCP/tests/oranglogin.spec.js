 import{test,expect} from '@playwright/test';
 import{Loginpage} from './pages/oranglog'

 test('login orange',async({page})=>{
    
    const Login=new Loginpage(page)
   await Login.Loginurl();
    await Login.login('Admin','admin123');


 //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// await page.getByRole('textbox',{name:'username'}).fill('Admin');
// await page.getByRole('textbox',{name:'password'}).fill('admin123');
// await page.getByRole('button',{name:' Login '}).click();



});

